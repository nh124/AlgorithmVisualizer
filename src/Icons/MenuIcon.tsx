function MenuIcon({
  size,
  showMenu,
  color,
}: {
  size: number;
  showMenu: boolean;
  color: string;
}) {
  return (
    <div
      className={` h-[${size}px] flex flex-col relative justify-between group`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        className={`w-full h-[20%] border-2 ${
          showMenu
            ? 'absolute top-1/2 transform -translate-y-1/2 rotate-45 h-[10%]'
            : ''
        } rounded-lg duration-300`}
        style={{ backgroundColor: `${color}` }}
      />

      {!showMenu && (
        <div
          className="w-full h-[20%] border-2  rounded-lg duration-300"
          style={{ backgroundColor: `${color}` }}
        />
      )}
      <div
        className={`w-full h-[20%] border-2  ${
          showMenu
            ? 'absolute top-1/2 transform -translate-y-1/2 -rotate-45 h-[10%]'
            : ''
        } rounded-lg duration-300`}
        style={{ backgroundColor: `${color}` }}
      />
    </div>
  );
}

export default MenuIcon;
