function FormComponent({
  name,
  label,
}: {
  name: string | undefined;
  label: string | undefined;
}) {
  return (
    <form
      action=""
      onSubmit={() => {}}
      className="flex h-fit px-2 text-white justify-center py-1"
    >
      <div className="w-full flex flex-row gap-1">
        <input
          className="shadow appearance-none border border-none rounded max-w-[100px] py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outlin bg-[#34495E] h-[40px] "
          id="Node"
          type="number"
          placeholder={label}
          value=""
          onChange={() => {}}
          required
          max="10"
        />
        <input
          type="submit"
          value={name}
          className="bg-[#34495E] px-2 py-1 rounded-md w-full hover:cursor-pointer hover:bg-[#1b2937]"
        />
      </div>
    </form>
  );
}

export default FormComponent;
