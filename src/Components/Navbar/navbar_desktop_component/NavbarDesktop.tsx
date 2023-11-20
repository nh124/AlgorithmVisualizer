/* eslint-disable jsx-a11y/no-static-element-interactions */
import NavIcons from '../navbar_icon_component/NavIcons';
import NavBarIcons from '../../../OtherFunctions/NavBarIcons';

function NavbarDesktop() {
  return (
    <div
      className="w-fit h-[50px] flex  justify-start items-center flex-row gap-3 max-md:hidden flex-wrap relative"
      data-testid="desktop-comp"
    >
      {NavBarIcons()
        .filter((item) => item.FormBox === 'ButtonName')
        .map((item) => (
          <div key={item.id}>
            <NavIcons name={item.name} icon={item.icon} mobile={item.mobile} />
          </div>
        ))}
    </div>
  );
}

export default NavbarDesktop;
