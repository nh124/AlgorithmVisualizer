/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch } from 'react-redux';
import { FiMoreVertical } from 'react-icons/fi';
import NavIcons from '../navbar_icon_component/NavIcons';
import TrashIcon from '../../../Icons/TrashIcon';
import NodeIcon from '../../../Icons/NodeIcon';
import { setEnlargeNavBar } from '../../../Redux/NavBarReducer';

function NavbarDesktop() {
  const dispatch = useDispatch();

  return (
    <div
      className="w-fit h-[50px] flex justify-start items-center flex-row gap-3 max-md:hidden flex-wrap"
      data-testid="desktop-comp"
    >
      {/* ADD */}
      <NavIcons
        name="Add Node"
        icon={<TrashIcon size={30} color="white" />}
        FormBox={{ required: true, name: 'Add Node', label: 'Ex. 1' }}
        mobile={false}
      />
      {/* Delete */}

      <NavIcons
        name="Delete Node"
        icon={<NodeIcon size={30} status="create" color="white" />}
        FormBox={{ required: true, name: 'Delete Node', label: 'Ex. 1' }}
        mobile={false}
      />
      {/* Search */}
      <NavIcons
        name="Search Node"
        icon={<NodeIcon size={30} status="clear" color="white" />}
        FormBox={{ required: true, name: 'Search Node', label: 'Ex. 1' }}
        mobile={false}
      />

      {/* Create */}
      <NavIcons
        name="Create New LinkedList"
        icon={<TrashIcon size={30} color="white" />}
        FormBox={{ required: false }}
        mobile={false}
      />
      <button
        type="button"
        data-testid="manu_icon"
        className="max-[1044px]:inline hidden hover:cursor-pointer"
        onClick={() => {
          dispatch(setEnlargeNavBar());
        }}
      >
        <FiMoreVertical style={{ color: 'white' }} />
      </button>
      {/* Clear */}
      <NavIcons
        name="Clear LinkedList"
        icon={<NodeIcon size={30} status="create" color="white" />}
        FormBox={{ required: false }}
        mobile={false}
      />
    </div>
  );
}

export default NavbarDesktop;
