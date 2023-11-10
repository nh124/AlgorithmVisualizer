import { FaTrashCan } from "react-icons/fa6";
const TrashIcon = ({ size, color }: { size: number; color: string }) => {
  return (
    <div
      className={`opacity-0 flex flex-col group duration-300 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className="w-full h-1/4 flex justify-start items-start overflow-hidden group-hover:rotate-12 origin-bottom-right duration-300">
        <FaTrashCan size={size} style={{ color: `${color}` }} />
      </div>
      <div className="w-full h-3/4 flex justify-start items-end overflow-hidden">
        <FaTrashCan size={size} style={{ color: `${color}` }} />
      </div>
      <div></div>
    </div>
  );
};

export default TrashIcon;
