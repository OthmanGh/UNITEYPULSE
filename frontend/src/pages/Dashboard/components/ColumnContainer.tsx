import { Id } from 'react-beautiful-dnd';
import { AddIcon, TrashIcon } from '../../../utils/icons';
import { Column, Task } from '../pages/Kanban/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import TaskCard from './TaskCard';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  onNewTask: (columnId: Id) => void;
  tasks: Task[];
}

const ColumnContainer = (props: Props) => {
  const { column, deleteColumn, updateColumn, onNewTask, tasks } = props;
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
        <div className="flex justify-center items-center bg-blue-800 px-2 py-1 text-sm rounded-full flex-1">0</div>

        <div
          {...attributes}
          {...listeners}
          onClick={() => setEditMode(true)}
          className="bg-blue-300 text-md h-[60px] cursor-grab rounded-md p-3 font-bold border-blue-600 flex-2"
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

        <button className="flex-1" onClick={() => deleteColumn(column.id)}>
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-grow flex-col gap-4 p-2  overflow-y-hidden overflow-x-auto">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <div>
        <button
          className="flex items-center gap-2 border-2 bg-black text-white w-full text-center justify-center py-2 cursor-pointer hover:bg-blue-900 transition-all duration-900"
          onClick={(e) => {
            e.stopPropagation();
            onNewTask(column.id);
          }}
        >
          <AddIcon /> Add Task
        </button>
      </div>
    </div>
  );
};

export default ColumnContainer;
