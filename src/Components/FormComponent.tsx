import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddNode from '../Functions/LinkedListAdd';

function FormComponent({
  name,
  label,
}: {
  name: string | undefined;
  label: string | undefined;
}) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const onChange = (event: any) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (name === 'Add Node') {
      AddNode(input, dispatch);
    }
  };
  return (
    <div className="flex flex-col w-fit px-2 py-1">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex h-fit text-white justify-center py-1 gap-3 flex-col"
      >
        <div className="w-full flex flex-row gap-1">
          <input
            className="shadow appearance-none border border-none rounded max-w-[100px] py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outlin bg-[#34495E] h-[40px] "
            value={input}
            onChange={onChange}
            required
            max="10"
            type="number"
          />
          <input
            type="submit"
            value={name}
            className="bg-[#34495E] px-2 py-1 rounded-md w-full hover:cursor-pointer hover:bg-[#1b2937]"
          />
        </div>
      </form>
      <button
        type="button"
        className="bg-[#34495E] px-2 py-1 rounded-md w-full hover:cursor-pointer hover:bg-[#1b2937]"
      >
        More Option
      </button>
    </div>
  );
}

export default FormComponent;
