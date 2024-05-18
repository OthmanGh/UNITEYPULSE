import { IoWarning } from 'react-icons/io5';

interface ConfirmDeletePopupProps {
  onDeleteConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeletePopup: React.FC<ConfirmDeletePopupProps> = ({ onDeleteConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg relative">
        <h2 className="text-slate-800 flex items-center gap-2 font-montserrat font-semibold text-xl pb-6">
          <IoWarning className="text-2xl text-yellow-500" /> Are you sure you want to delete?
        </h2>
        <p className="text-gray-600 pb-6">This action cannot be undone.</p>
        <div className="flex gap-10">
          <button onClick={onDeleteConfirm} className="bg-red-500 hover:bg-red-600 transition-all duration-500 text-white p-3 rounded-md w-full">
            Delete
          </button>
          <button onClick={() => onCancel()} className="bg-gray-500 hover:bg-gray-600 transition-all duration-500 text-white p-3 rounded-md w-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletePopup;
