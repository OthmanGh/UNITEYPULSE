import React, { useState, useEffect } from 'react';
import { Editor as Ed } from 'primereact/editor';
import { Button } from 'primereact/button';
import axios from 'axios';
import Header from '../components/Header';
import styles from '../../../components';
import { Tooltip } from '@mui/material';
import ConfirmDeletePopup from '../../../components/ConfirmDeletePopup';

interface TextContent {
  _id: string;
  content: string;
}

const Editor: React.FC = () => {
  const [text, setText] = useState<string>('<h1>Welcome to the Editor</h1>');
  const [textContents, setTextContents] = useState<TextContent[]>([]);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [textContentToDelete, setTextContentToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchTextContents();
  }, []);

  const token: string | null = JSON.parse(localStorage.getItem('authUser') || '').token;

  const fetchTextContents = async () => {
    try {
      const response = await axios.get<TextContent[]>('http://127.0.0.1:8000/api/editor', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setTextContents(response.data);
    } catch (error) {
      console.error('Error fetching text contents:', error);
    }
  };

  const createTextContent = async () => {
    try {
      await axios.post(
        'http://127.0.0.1:8000/api/editor',
        { content: text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      fetchTextContents();
    } catch (error) {
      console.error('Error creating text content:', error);
    }
  };

  const updateTextContent = async (id: string, updatedText: string) => {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/editor/${id}`,
        { content: updatedText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      fetchTextContents();
    } catch (error) {
      console.error('Error updating text content:', error);
    }
  };

  const handleDeleteTextContent = async () => {
    try {
      if (!textContentToDelete) {
        console.error('No text content selected for deletion.');
        return;
      }

      await axios.delete(`http://127.0.0.1:8000/api/editor/${textContentToDelete}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      fetchTextContents();
      setShowDeletePopup(false);
      setTextContentToDelete(null);
    } catch (error) {
      console.error('Error deleting text content:', error);
    }
  };

  return (
    <section className={styles.dashboardSection}>
      <Header category="App" title="Editor" />

      <div>
        <h2 className="text-secondary font-bold text-2xl mb-2">Content:</h2>
        <div className="grid grid-cols-3 gap-10 p-4">
          {textContents.map((textContent) => (
            <TextContentItem
              key={textContent._id}
              content={textContent.content}
              onUpdate={() => updateTextContent(textContent._id, text)}
              onDelete={() => {
                setShowDeletePopup(true);
                setTextContentToDelete(textContent._id);
              }}
            />
          ))}
        </div>
      </div>

      <h2 className="text-secondary font-bold text-2xl mb-2 mt-6">Edit:</h2>
      <div className=" p-4">
        <Ed value={text} className="text-secondary text-3xl " onTextChange={(e) => setText(e.htmlValue)} style={{ height: '50vh' }} />
        <p>This is an example of a simple editor component. You can see how it works and integrate it into your own projects.</p>
      </div>
      <div className=" p-4">
        <Button
          label="Create Text Content"
          className="p-mr-2 bg-secondary hover:bg-dark transition-all duration-500 text-slate-100 p-3 rounded-md "
          onClick={createTextContent}
        />
      </div>

      {showDeletePopup && <ConfirmDeletePopup onDeleteConfirm={handleDeleteTextContent} onCancel={() => setShowDeletePopup(false)} />}
    </section>
  );
};

export default Editor;

interface TextContentItemProps {
  content: string;
  onUpdate: () => void;
  onDelete: () => void;
}

const TextContentItem: React.FC<TextContentItemProps> = ({ content, onUpdate, onDelete }) => {
  return (
    <div className="p-mb-3 bg-dark p-4 rounded-lg relative">
      <div className="p-card p-4 overflow-auto flex flex-col gap-10">
        <div dangerouslySetInnerHTML={{ __html: content }} className="text-slate-100 text-[14px]" />
        <div className="p-mt-3 flex gap-2 text-md mt-4 items-end justify-end">
          <Tooltip title="Edit your text content in the editor below, then click 'Update' to save changes.">
            <Button label="Update" className="p-button-danger text-green-400 hover:text-green-500 transition-all duration-500 text-sm" onClick={onUpdate} />
          </Tooltip>
          <Button label="Delete" className="p-mr-2 text-red-400 hover:text-red-500 transition-all duration-500 text-sm" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};
