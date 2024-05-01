import React, { useMemo, useState } from 'react';
import { AddIcon, TrashIcon } from '../../../../utils/icons';
import { Column, Task } from './types';
import ColumnContainer from '../../components/ColumnContainer';
import { Id } from 'react-beautiful-dnd';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';

const Kanban = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const columnId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
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
  };

  const handleDragEnd = (event: DragEndEvent) => {
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
    <section className="flex m-auto min-h-screen w-full items-center overflow-x-auto overflow-y-auto px-[40px]">
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="m-auto flex gap-4">
          <SortableContext items={columnId}>
            <div className="flex gap-4">
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
            className="h-[60px] w-[350px] min-w-[350px] bg-darkbg cursor-pointer rounded-lg border-columnbg p-4 ring-rose-500 hover:ring-2 text-white flex gap-2 items-center justify-center"
            onClick={() => createNewColumn()}
          >
            <AddIcon className="text-xl text-blue-400" />
            Add Column
          </button>
        </div>

        {activeColumn &&
          createPortal(
            <DragOverlay>
              <ColumnContainer
                column={activeColumn}
                deleteColumn={handleDeleteColumn}
                updateColumn={handleUpdateColumn}
                onNewTask={handleNewTask}
                tasks={tasks.filter((task) => task.columnId === activeColumn.id)}
                deleteTask={handleDeleteTask}
                updateTask={handleUpdateTask}
              />
            </DragOverlay>,
            document.body
          )}
      </DndContext>
    </section>
  );
};

export default Kanban;
