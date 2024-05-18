import React, { useState, useEffect } from 'react';
import { Editor as Ed } from 'primereact/editor';
import { Button } from 'primereact/button';
import axios from 'axios';
import Header from '../components/Header';
import styles from '../../../components';

const Editor = () => {
  const [text, setText] = useState('<h1>Welcome to the Editor</h1>');
  const [textContents, setTextContents] = useState([]);

  useEffect(() => {
    fetchTextContents();
  }, []);

  const token = JSON.parse(localStorage.getItem('authUser')).token;

  const fetchTextContents = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/editor', {
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

  const updateTextContent = async (id, updatedText) => {
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

  const deleteTextContent = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/editor/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      fetchTextContents();
    } catch (error) {
      console.error('Error deleting text content:', error);
    }
  };

  return (
    <section className={styles.dashboardSection}>
      <Header category="App" title="Editor" />
      <Ed value={text} className="text-secondary text-3xl" onTextChange={(e) => setText(e.htmlValue)} style={{ height: '50vh' }} />
      <div className="p-mt-3">
        <Button label="Create Text Content" className="p-mr-2" onClick={createTextContent} />
      </div>
      <div className="p-mt-3">
        {textContents.map((textContent) => (
          <TextContentItem
            key={textContent._id}
            content={textContent.content}
            onUpdate={() => updateTextContent(textContent._id, text)}
            onDelete={() => deleteTextContent(textContent._id)}
          />
        ))}
      </div>
      <p>This is an example of a simple editor component. You can see how it works and integrate it into your own projects.</p>
    </section>
  );
};

export default Editor;
