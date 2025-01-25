import { useStore } from "../Store/Store";
import { FaPlus } from 'react-icons/fa';

function Sidebar() {
  const { lists, workspaces, openListModal, openWorkspaceModal } = useStore();

  return (
  <div className="w-60 bg-gray-100 flex flex-col">
        <div className="flex-1 overflow-y-auto">
            <div className="p-4">
                <h3 className="text-lg font-semibold flex items-center">
                    Lists
                </h3>
                <ul>
            {lists.map((list, index) => (
              <li
                key={index}
                className="p-2 hover:bg-[#ccc] rounded-lg
                 cursor-pointer flex items-center"
              >
                <span className="mr-2">{list.emoji}</span>
                {list.name}
              </li>
            ))}
          </ul>

                <button 
                onClick={openListModal}
                className="flex justify-center items-center mt-[1rem]">
                    <FaPlus className="mr-2"/>List
                </button>
            </div>

<div className="p-4">
<h3 className="text-lg font-semibold flex items-center">
                   Workspaces
                </h3>

                <ul>
            {workspaces.map((workspace, index) => (
              <li
                key={index}
                className="p-2 hover:bg-[#ccc] rounded-lg 
                cursor-pointer flex items-center"
              >
                <span className="mr-2">{workspace.emoji}</span>
                {workspace.name}
              </li>
            ))}
          </ul>

                <button 
                onClick={openWorkspaceModal}
                className="flex justify-center items-center mt-[1rem]">
                    <FaPlus className="mr-2"/>Workspaces
                </button>
</div>

        </div>
  </div>);
}

export default Sidebar;
