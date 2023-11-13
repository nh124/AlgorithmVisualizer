import { FaArrowRightLong } from 'react-icons/fa6';

function NodeElement({ NodeVal }: { NodeVal: number }) {
  return (
    <div className="flex flex-col w-[80px]">
      <div className="flex flex-row items-center  w-[80px] text-black relative">
        <div className="box w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#023e8a] font-bold text-2xl">
          {NodeVal}
        </div>

        <div className="right-0 z-0}">
          <FaArrowRightLong size={30} color="#023e8a" />
        </div>
      </div>
    </div>
  );
}

export default NodeElement;
