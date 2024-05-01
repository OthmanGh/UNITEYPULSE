import { Id } from 'react-beautiful-dnd';
import { TrashIcon } from '../../../constants/icons';
import { Column } from '../pages/Kanban/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
}

const ColumnContainer = (props: Props) => {
  const { column, deleteColumn, updateColumn } = props;
  const [editMode, setEditMode] = useState(false);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },

    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-blue-500 w-[350px] h-[500px] max-h-[500px rounded-md flex flex-col opacity-40 border-blue-600 border-2"
      ></div>
    );
  }

  return (
    <div ref={setNodeRef} style={style} className="bg-blue-500 w-[350px] h-[500px] max-h-[500px rounded-md flex flex-col">
      <div className="flex gap-2">
        <div className="flex justify-center items-center bg-blue-800 px-2 py-1 text-sm rounded-full">0</div>

        <div
          {...attributes}
          {...listeners}
          onClick={() => setEditMode(true)}
          className="bg-blue-300 text-md h-[60px] cursor-grab rounded-md p-3 font-bold border-blue-600"
        >
          {editMode ? (
            <input
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return;
                setEditMode(false);
              }}
              className="bg-white focus:border-blue-400 rounded outline-none px-2"
            />
          ) : (
            column.title
          )}
        </div>

        <button onClick={() => deleteColumn(column.id)}>
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-grow">Content</div>

      <div>Footer</div>
    </div>
  );
};

export default ColumnContainer;
