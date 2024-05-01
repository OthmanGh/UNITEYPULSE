import React, { useState } from 'react';
import { Editor as Ed } from 'primereact/editor';
import Header from '../components/Header';
import styles from '../../../components';

const Editor = () => {
  const [text, setText] = useState('<h1>Welcome to the Editor</h1>');

  return (
    <section className={styles.dashboardSection}>
      <Header category="App" title="Editor" />
      <Ed value={text} className="text-secondary text-3xl" onTextChange={(e) => setText(e.htmlValue)} style={{ height: '50vh' }} />
      <p>This is an example of a simple editor component. You can see how it works and integrate it into your own projects.</p>
    </section>
  );
};

export default Editor;
