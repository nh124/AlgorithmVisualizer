import { useState } from 'react';
import LinkedListFunctions from '../../Functions/LinkedListFunctions/LinkedListFunctions';

function FormComponent({
  name,
  label,
  expand,
}: {
  name: string | undefined;
  label: string | undefined;
  expand: boolean;
}) {
  const { AddNode, AddNodeOnIndex, LinkedListDelete, LinkedLisSearchNode } =
    LinkedListFunctions();

  const [input, setInput] = useState('');
  const [index, setIndex] = useState('');
  const setInputOnchange = (event: any) => {
    setInput(event.target.value);
  };
  const setIndexOnChange = (event: any) => {
    setIndex(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (name === 'Add') {
      if (index === '') AddNode(input);
      else AddNodeOnIndex(input, index);
    } else if (name === 'Search') {
      const indexFound = LinkedLisSearchNode(input);
      console.log(indexFound);
    } else if (name === 'Delete') {
      LinkedListDelete(input);
    }
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className={`absolute  text-sm justify-center text-black  flex flex-row top-1/2 duration-300 transform -translate-y-1/2 gap-1
      ${expand ? 'translate-x-[70px] opacity-100' : 'opacity-0'}
      `}
    >
      <input
        className="shadow appearance-none border border-none rounded-sm max-w-[70px] px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-slate-300 h-[40px]"
        value={input}
        placeholder={label}
        onChange={setInputOnchange}
        required={name !== 'Delete'}
        max="10"
        type="number"
      />
      {name === 'Add' && (
        <input
          className="shadow appearance-none border border-none rounded-sm max-w-[70px] px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-slate-300 h-[40px] "
          value={index}
          placeholder="Index"
          onChange={setIndexOnChange}
          max="10"
          type="number"
        />
      )}
      <input
        type="submit"
        value={name}
        className="bg-slate-300 rounded-sm w-full hover:cursor-pointer hover:bg-slate-400 px-2 py-2"
      />
    </form>
  );
}

export default FormComponent;

{
  /* <form
          action=""
          onSubmit={handleSubmit}
          className="flex h-fit text-black justify-center gap-3 flex-row text-sm"
        >
          <div className="w-full flex flex-row gap-1 items-center">
            <input
              className="shadow appearance-none border border-none rounded-sm max-w-[70px] px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-slate-300 h-[40px]"
              value={input}
              placeholder={label}
              onChange={setInputOnchange}
              required={name !== 'Delete'}
              max="10"
              type="number"
            />
            {name === 'Add' && (
              <input
                className="shadow appearance-none border border-none rounded-sm max-w-[70px] px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-slate-300 h-[40px] "
                value={index}
                placeholder="Index"
                onChange={setIndexOnChange}
                max="10"
                type="number"
              />
            )}
            <input
              type="submit"
              value={name}
              className="bg-slate-300 rounded-sm w-full hover:cursor-pointer hover:bg-slate-400 px-2 py-2"
            />
          </div>
        </form>  */
}
