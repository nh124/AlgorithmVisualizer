import NavBarIcons from '../../../OtherFunctions/NavBarIcons';
import NavIcons from '../navbar_icon_component/NavIcons';

function NavBarMobile({ showMobileMenu }: { showMobileMenu: boolean }) {
  const size = 5;
  const height = size * 66 + 80;
  return (
    <div
      className="hidden w-[250px]  bg-[#34495E]  flex-col absolute top-[50px] left-0 gap-4 items-cente px-4 py-4 overflow-hidden transition-height max-md:flex rounded-br-md rounded-bl-md"
      style={{
        height: `${showMobileMenu ? height : 0}px`,
        paddingBottom: `${showMobileMenu ? 16 : 0}px`,
        paddingTop: `${showMobileMenu ? 16 : 0}px`,
        transition: `height 0.3s ease`,
      }}
      data-testid="mobile-menu"
    >
      {NavBarIcons(true).map((item) => (
        <div
          className="w-full h-[50px] bg-slate-900 flex justify-center items-center"
          key={item.id}
        >
          <NavIcons
            name={item.name}
            icon={item.icon}
            FormBox={item.FormBox}
            mobile={item.mobile}
          />
        </div>
      ))}
    </div>
  );
}

export default NavBarMobile;
