import { useDispatch } from 'react-redux';
import { BsChevronDoubleDown } from 'react-icons/bs';
import NavBarIcons from '../../../OtherFunctions/NavBarIcons';
import NavIcons from '../navbar_icon_component/NavIcons';
import { setShowMobileMenu } from '../../../Redux/NavBarReducer';

function NavBarMobile({ showMobileMenu }: { showMobileMenu: boolean }) {
  const height = 50;
  const dispatch = useDispatch();
  return (
    <div className="absolute bottom-0 w-full left-0  justify-center items-center bg-slate-200 flex-col h-auto gap-3 pt-2 hidden max-md:flex">
      <button
        type="button"
        className={`max-md:flex h-fit w-full flex justify-center  `}
        onClick={() => dispatch(setShowMobileMenu())}
      >
        <div
          className={`${
            showMobileMenu ? 'rotate-0' : 'rotate-180'
          } duration-300`}
        >
          <BsChevronDoubleDown size={30} />
        </div>
      </button>
      <div
        className="w-full h-full overflow-hidden transition-height bg-white flex flex-row"
        style={{
          height: `${showMobileMenu ? height : 0}px`,
          transition: 'height 0.3s ease',
        }}
      >
        {NavBarIcons()
          .filter((item) => item.FormBox === 'ButtonName')
          .map((item) => (
            <div className="w-full h-[50px] flex justify-center" key={item.id}>
              <NavIcons
                name={item.name}
                icon={item.icon}
                mobile={item.mobile}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default NavBarMobile;
