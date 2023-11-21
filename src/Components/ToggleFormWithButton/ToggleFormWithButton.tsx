import { useState } from 'react';
import FormComponent from '../FormComponent/FormComponent';

function ToggleFormWithButton({
  name,
  icon,
}: {
  name: string | undefined;
  icon: JSX.Element;
}) {
  const [style, setStyle] = useState({ width: 'auto' });
  const [expand, setExpand] = useState(false);
  const Expand = () => {
    setExpand(!expand);
    if (!expand && name === 'Add') setStyle({ width: '280px' });
    else setStyle({ width: '210px' });
    if (expand) setStyle({ width: 'auto' });
  };
  return (
    <div className="relative flex gap-3">
      <div
        className="relative w-auto group bg-slate-400 h-fit duration-300 ease-in-out"
        style={style}
      >
        <button
          className="bg-slate-300 px-1 py-2 hover:scale-105 ease-in-out duration-300 z-10 relative"
          type="button"
          onClick={() => Expand()}
        >
          {icon}
        </button>
        <span className="absolute top-0 text-sm group-hover:translate-y-[45px] font-bold left-3 duration-300 ease-in-out z-0">
          {name}
        </span>
        <FormComponent name={name} label="" expand={expand} />
      </div>
    </div>
  );
}

export default ToggleFormWithButton;
