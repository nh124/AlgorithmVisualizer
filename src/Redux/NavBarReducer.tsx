import { createSlice } from '@reduxjs/toolkit';

export const NavBarReducer = createSlice({
  name: 'NavBar',
  initialState: {
    showMenu: false,
    enlargeNavBar: false,
    showMobileMenu: false,
  },
  reducers: {
    //action
    setShowMenu: (state) => {
      // reducer
      state.showMenu = !state.showMenu;
    },
    setEnlargeNavBar: (state) => {
      state.enlargeNavBar = !state.enlargeNavBar;
    },
    setShowMobileMenu: (state) => {
      state.showMobileMenu = !state.showMobileMenu;
    },
  },
});

export const { setShowMenu, setEnlargeNavBar, setShowMobileMenu } =
  NavBarReducer.actions;
export default NavBarReducer.reducer;
