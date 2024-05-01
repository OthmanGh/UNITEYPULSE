import { useMemo, useState } from 'react';
import { AddIcon } from '../../../../utils/icons';
import { Column, Task } from './types';
import ColumnContainer from '../../components/ColumnContainer';
import { Id } from 'react-beautiful-dnd';
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import TaskCard from '../../components/TaskCard';
import Header from '../../components/Header';

const Kanban = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const columnId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

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

    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
  };

  const handleUpdateColumn = (id: Id, title: string) => {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });

    setColumns(newColumns);
  };

  const handleNewTask = (columnId: Id) => {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (id: Id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const handleUpdateTask = (taskId: Id, content: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, content };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === 'Column') {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === 'Task') {
      setActiveTask(event.active.data.current.task);
      return;
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === 'Task';
    const isOverATask = over.data.current?.type === 'Task';

    if (!isActiveATask) return;

    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        tasks[activeIndex].columnId = tasks[overIndex].columnId;

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === 'Column';

    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;

        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;

    if (!over) return;

    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeColumnId);

      const overColumnIndex = columns.findIndex((col) => col.id === overColumnId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  };

  return (
    <section className="md:m-10 mt-24 p-4 md:p-10 bg-white rounded-xl flex flex-col relative">
      <Header category="apps" title="Kanban" />
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
        <div className="w-[100%] h-[100vh]">
          <SortableContext items={columnId}>
            <div className="bg-gray-200 rounded-xl  p-4 grid gap-y-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-auto h-full">
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  deleteColumn={handleDeleteColumn}
                  updateColumn={handleUpdateColumn}
                  onNewTask={handleNewTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                  deleteTask={handleDeleteTask}
                  updateTask={handleUpdateTask}
                />
              ))}
            </div>
          </SortableContext>
          <button
            className="absolute top-14 flex items-center gap-2 bg-secondary text-white px-2 py-2 rounded-lg  hover:bg-white border-secondary border-2 hover:border-2 hover:text-secondary font-semibold transition-all duration-500 right-4"
            onClick={() => createNewColumn()}
          >
            <AddIcon className="text-xl" />
            Add Column
          </button>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={handleDeleteColumn}
                updateColumn={handleUpdateColumn}
                onNewTask={handleNewTask}
                tasks={tasks.filter((task) => task.columnId === activeColumn.id)}
                deleteTask={handleDeleteTask}
                updateTask={handleUpdateTask}
              />
            )}

            {activeTask && <TaskCard task={activeTask} deleteTask={() => handleDeleteTask} updateTask={() => handleUpdateTask} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </section>
  );
};

export default Kanban;
