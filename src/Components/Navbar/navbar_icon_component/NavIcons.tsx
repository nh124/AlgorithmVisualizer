import TrashIcon from '../../../Icons/TrashIcon';
import NodeIcon from '../../../Icons/NodeIcon';
import IconType from '../../../OtherFunctions/IconTypes';
import ManageLinkedList from '../../../Functions/ManageLinkedList/ManageLinkedList';

function NavIcons({ name, icon }: { name: string; icon: IconType }) {
  const icons = {
    AddIcon: <TrashIcon size={30} color="black" />,
    DeleteIcon: <TrashIcon size={30} color="black" />,
    SearchIcon: <NodeIcon size={30} status="clear" color="black" />,
    createIcon: <NodeIcon size={30} status="create" color="black" />,
    clearIcon: <NodeIcon size={30} status="clear" color="black" />,
  };

  const { createList, clearList } = ManageLinkedList();

  const handleFunction = () => {
    if (name === 'Create Linked List') createList();
    if (name === 'Clear all Linked List') clearList();
  };
  return (
    <div className="h-fit text-black flex justify-center items-center duration-300 ease-in-out group relative">
      <button
        type="button"
        data-testid="NavButton"
        className="w-full h-full px-2 py-1 flex flex-row items-center"
        onClick={() => handleFunction()}
      >
        <div className="max-md:hidden">{icons[icon]}</div>
        <div className="flex flex-row justify-center items-center gap-2 relative">
          <span>{name}</span>
        </div>
      </button>
    </div>
  );
}

export default NavIcons;
