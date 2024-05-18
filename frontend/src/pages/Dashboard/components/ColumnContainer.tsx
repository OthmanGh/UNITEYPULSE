import { Id } from 'react-beautiful-dnd';
import { AddIcon, TrashIcon } from '../../../utils/icons';
import { Column, Task } from '../pages/Kanban/types';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useMemo, useState } from 'react';
import TaskCard from './TaskCard';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  onNewTask: (columnId: Id) => void;
  tasks: Task[];
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

const ColumnContainer = (props: Props) => {
  const { column, deleteColumn, updateColumn, onNewTask, tasks, deleteTask, updateTask } = props;
  const [editMode, setEditMode] = useState(false);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },

    disabled: editMode,
  });

  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return <div ref={setNodeRef} style={style} className="bg-blue-500  opacity-40 border-blue-600 border-2"></div>;
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="w-full bg-blue-50 bg-opacity-60 shadow-xl rounded-md overflow-hidden h-[400px] flex flex-col justify-between hover:drop-shadow-md transition-all duration-400"
    >
      <div className="flex justify-between items-center gap-4 w-full mb-4 bg-secondary p-3 text-white">
        <p className="text-blue-100 font-semibold">0</p>

        <div
          {...attributes}
          {...listeners}
          onClick={() => setEditMode(true)}
          className="font-bold capitalize cursor-pointer hover:text-blue-100 transition-all duration-500"
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
              className="bg-blue-50 border-none outline-none text-secondary px-2 w-full rounded-sm"
            />
          ) : (
            column.title
          )}
        </div>

        <button className="text-red-50 opacity-50 hover:opacity-100 transition-all duration-500" onClick={() => deleteColumn(column.id)}>
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-col gap-4 justify-start overflow-y-scroll">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} deleteTask={() => deleteTask(task.id)} updateTask={() => updateTask} />
          ))}
        </SortableContext>
      </div>

      <div>
        <button
          className="flex items-center justify-center gap-2 mx-auto bg-secondary bg-opacity-50 text-gray-900 hover:bg-gray-600 hover:text-blue-100 transition-all duration-500 w-full p-2 font-semibold"
          onClick={(e) => {
            e.stopPropagation();
            onNewTask(column.id);
          }}
        >
          <AddIcon className="text-xl" /> Add Task
        </button>
      </div>
    </div>
  );
};

export default ColumnContainer;
