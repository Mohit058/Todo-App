/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
const TodoItems = ({ list, onDelete, toggle, onEdit }) => {
  const { id, text, isComplete } = list;
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <FontAwesomeIcon
          className="w-7 text-xl text-blue-600"
          icon={isComplete ? faCircleXmark : faCircle}
        />
        <p
          className={`text-slate-700 ml-3 text-[16px] decoration-slate-500 ${
            isComplete && "line-through"
          }`}
        >
          {text}
        </p>
      </div>
      <div className="flex items-end cursor-pointer">
        <FontAwesomeIcon
          onClick={() => onEdit(id)}
          className="w-7 text-lg"
          icon={faPenToSquare}
        />
        <FontAwesomeIcon
          onClick={() => onDelete(id)}
          className="w-7 text-lg"
          icon={faTrashCan}
        />
      </div>
    </div>
  );
};

export default TodoItems;
