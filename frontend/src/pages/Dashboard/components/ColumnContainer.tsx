import { Id } from 'react-beautiful-dnd';
import { TrashIcon } from '../../../constants/icons';
import { Column } from '../pages/Kanban/types';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

const ColumnContainer = (props: Props) => {
  const { column, deleteColumn } = props;
  return (
    <div className="bg-blue-500 w-[350px] h-[500px] max-h-[500px rounded-md flex flex-col">
      <div className="flex gap-2">
        <div className="flex justify-center items-center bg-blue-800 px-2 py-1 text-sm rounded-full">0</div>

        <div className="bg-blue-300 text-md h-[60px] cursor-grab rounded-md p-3 font-bold border-blue-600 ">{column.title}</div>

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
