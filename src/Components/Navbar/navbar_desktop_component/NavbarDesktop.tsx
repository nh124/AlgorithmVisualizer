/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch, useSelector } from 'react-redux';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import NavIcons from '../navbar_icon_component/NavIcons';
import NavBarIcons from '../../../OtherFunctions/NavBarIcons';
import { setEnlargeNavBar } from '../../../Redux/NavBarReducer';

function NavbarDesktop() {
  const dispatch = useDispatch();
  const { enlargeNavBar } = useSelector((state: any) => state.NavbarRed);
  const [currentStyle, setCurrentStyle] = useState({ overflow: 'visible' });
  useEffect(() => {
    if (!enlargeNavBar && window.innerWidth <= 1041) {
      setCurrentStyle({ overflow: 'hidden' });
    }
    if (enlargeNavBar) {
      setTimeout(() => {
        setCurrentStyle({ overflow: 'visible' });
      }, 300);
    }
    if (window.innerWidth > 104) {
      setCurrentStyle({ overflow: 'visible' });
    }
  }, [enlargeNavBar]);

  return (
    <div
      className="w-fit h-[50px] flex justify-start items-center flex-row gap-3 max-md:hidden flex-wrap relative"
      data-testid="desktop-comp"
      style={currentStyle}
    >
      {NavBarIcons(false).map((item) => (
        <div key={item.id} className="relative">
          <NavIcons
            name={item.name}
            icon={item.icon}
            FormBox={item.FormBox}
            mobile={item.mobile}
          />
        </div>
      ))}
      <button
        type="button"
        data-testid="manu_icon"
        className="max-[1044px]:inline hidden hover:cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[20px]"
        onClick={() => {
          dispatch(setEnlargeNavBar());
        }}
      >
        <div
          className={`${
            enlargeNavBar ? 'rotate-180' : 'rotate-0'
          } duration-300`}
        >
          <BiSolidDownArrow style={{ color: 'white' }} />
        </div>
      </button>
    </div>
  );
}

export default NavbarDesktop;
