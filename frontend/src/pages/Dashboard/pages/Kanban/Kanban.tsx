import React, { useState } from 'react';
import { AddIcon } from '../../../../constants/icons';
import { Column } from './types';
import ColumnContainer from '../../components/ColumnContainer';
import { Id } from 'react-beautiful-dnd';

const Kanban = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  console.log(columns);
  const generateId = () => {
    return Math.floor(Math.random() * 10001);
  };

  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  };

  const handleDeleteColumn = (id: Id) => {
    const filteredColumn = columns.filter((col) => col.id !== id);
    setColumns(filteredColumn);
  };

  return (
    <section className="flex m-auto min-h-screen w-full items-center overflow-x-auto overflow-y-auto px-[40px]">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map((col) => (
            <ColumnContainer key={col.id} column={col} deleteColumn={handleDeleteColumn} />
          ))}
        </div>

        <button
          className="h-[60px] w-[350px] min-w-[350px] bg-darkbg cursor-pointer rounded-lg border-columnbg p-4 ring-rose-500 hover:ring-2 text-white flex gap-2 items-center justify-center"
          onClick={() => createNewColumn()}
        >
          <AddIcon className="text-xl text-blue-400" />
          Add Column
        </button>
      </div>
    </section>
  );
};

export default Kanban;
