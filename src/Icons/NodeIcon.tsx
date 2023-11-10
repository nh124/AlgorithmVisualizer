import { BsCircle, BsArrowRight } from "react-icons/bs";
const NodeIcon = ({
  size,
  status,
  color,
}: {
  size: number;
  status: string;
  color: string;
}) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
      <div
        className={`w-fit h-fit flex flex-row relative group  px-2 py-1 overflow-hidden`}
      >
        <div className="w-full h-full flex flex-row group-hover:opacity-0 duration-300">
          <div>
            <BsCircle size={size} style={{ color: `${color}` }} />
          </div>
          <div>
            <BsArrowRight size={size} style={{ color: `${color}` }} />
          </div>
        </div>
        <div
          className={`absolute w-full h-full  ${
            status === "create"
              ? "group-hover:animate-nodeSlideUpAnimation translate-y-10"
              : ""
          }
         duration-300`}
        >
          <div className="w-full h-full relative flex flex-row">
            <div
              className={`${
                status === "create"
                  ? "absolute"
                  : "group-hover:animate-nodeSlideDownAnimation"
              }`}
            >
              <BsCircle size={size} style={{ color: `${color}` }} />
            </div>
            <div
              className={` ${
                status === "create"
                  ? "group-hover:animate-nodeSlideAnimation absolute"
                  : "group-hover:animate-nodeSlideDownAnimation"
              }

              duration-300`}
            >
              <BsArrowRight size={size} style={{ color: `${color}` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeIcon;
