import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="flex items-center mt-3 gap-4">
      <div>
        <FontAwesomeIcon className="text-2xl pt-1" icon={faListCheck} />
      </div>
      <h1 className="text-2xl font-semibold">To-do List</h1>
    </div>
  );
};

export default Header;
