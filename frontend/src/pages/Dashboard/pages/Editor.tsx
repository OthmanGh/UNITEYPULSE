import React, { useState } from 'react';
import { Editor as Ed } from 'primereact/editor';

const Editor = () => {
  const [text, setText] = useState('');

  return (
    <section className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl flex flex-col gap-4">
      <Ed value={''} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '80vh' }} />
    </section>
  );
};

export default Editor;
