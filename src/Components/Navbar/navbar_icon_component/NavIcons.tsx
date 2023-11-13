import { useState } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import FormComponent from '../../FormComponent';
import TrashIcon from '../../../Icons/TrashIcon';
import NodeIcon from '../../../Icons/NodeIcon';
import IconType from '../../../OtherFunctions/IconTypes';
import FormBoxType from '../../../OtherFunctions/FormBoxType';
import { UnisetEnlargeNavBar } from '../../../Redux/NavBarReducer';
import { BsWindowSidebar } from 'react-icons/bs';

function NavIcons({
  name,
  icon,
  FormBox,
  mobile,
}: {
  name: string;
  icon: IconType;
  FormBox: FormBoxType;
  mobile: boolean;
}) {
  const [dropForm, setDropForm] = useState(false);
  const dispatch = useDispatch();
  const icons = {
    AddIcon: <TrashIcon size={30} color="white" />,
    DeleteIcon: <TrashIcon size={30} color="white" />,
    SearchIcon: <NodeIcon size={30} status="clear" color="white" />,
    createIcon: <NodeIcon size={30} status="create" color="white" />,
    clearIcon: <NodeIcon size={30} status="clear" color="white" />,
  };
  return (
    <div
      className={`${
        mobile ? 'w-full' : 'w-fit'
      } h-full text-white flex justify-center items-center hover:bg-[#1ABC9C] duration-300 ease-in-out group relative`}
    >
      <button
        onClick={() => {
          setDropForm(!dropForm);
          if (window.innerWidth <= 1041) {
            dispatch(UnisetEnlargeNavBar());
          }
        }}
        type="button"
        data-testid="NavButton"
        className="w-full h-full px-3 py-3"
      >
        <div className="flex flex-row justify-center items-center gap-2 relative">
          <span className="group-hover:opacity-0 duration-300 ease-in-out">
            {name}
          </span>
          <div className="rotate-180">
            <BiSolidUpArrow />
          </div>
        </div>
        {icons[icon]}
      </button>

      <div
        data-testid="form_box"
        className={`w-fit h-fit absolute top-0 ease-in-out duration-300 -z-10 rounded-br-md rounded-bl-md py-1 flex flex-row  ${
          dropForm ? 'translate-y-[50px] z-10' : 'translate-y-[0px]'
        } bg-slate-500`}
      >
        {FormBox.required && (
          <FormComponent name={FormBox.name} label={FormBox.label} />
        )}
      </div>
    </div>
  );
}

export default NavIcons;
