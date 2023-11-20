import TrashIcon from '../../../Icons/TrashIcon';
import NodeIcon from '../../../Icons/NodeIcon';
import IconType from '../../../OtherFunctions/IconTypes';
import ManageLinkedList from '../../../Functions/ManageLinkedList/ManageLinkedList';

function NavIcons({
  name,
  icon,
  mobile,
}: {
  name: string;
  icon: IconType;
  mobile: boolean;
}) {
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
    <div
      className={`${
        mobile ? 'w-full' : 'w-fit'
      } h-full text-white flex justify-center items-center hover:bg-[#1ABC9C] duration-300 ease-in-out group relative`}
    >
      <button
        type="button"
        data-testid="NavButton"
        className="w-full h-full px-3 py-3 flex flex-row items-center"
        onClick={() => handleFunction()}
      >
        {icons[icon]}
        <div className="flex flex-row justify-center items-center gap-2 relative">
          <span>{name}</span>
        </div>
      </button>
    </div>
  );
}

export default NavIcons;
