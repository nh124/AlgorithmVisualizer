import { useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import FormComponent from "../../FormComponent";
const NavIcons = ({
  name,
  icon,
  FormBox,
  mobile,
}: {
  name: string;
  icon: any;
  FormBox: any;
  mobile: boolean;
}) => {
  const [dropForm, setDropForm] = useState(false);
  return (
    <button
      className={`${
        mobile ? "w-full" : "w-fit"
      } h-full py-2 px-3 text-white flex justify-center items-center hover:bg-[#1ABC9C] duration-300 ease-in-out group relative`}
    >
      <button onClick={() => setDropForm(!dropForm)}>
        <div className="flex flex-row justify-center items-center gap-2 relative">
          <span className="group-hover:opacity-0 duration-300 ease-in-out">
            {name}
          </span>
          <div className="rotate-180">
            <BiSolidUpArrow />
          </div>
        </div>
        {icon}
      </button>

      <div
        className={`w-fit h-fit absolute top-0 ease-in-out duration-300 -z-10 rounded-br-md rounded-bl-md py-1 flex flex-row ${
          dropForm ? "translate-y-[50px] z-10" : "translate-y-[0px]"
        } bg-slate-500`}
      >
        {FormBox.required && (
          <FormComponent name={FormBox.name} lable={FormBox.label} />
        )}
      </div>
    </button>
  );
};

export default NavIcons;
