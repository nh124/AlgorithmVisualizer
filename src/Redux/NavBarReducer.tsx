import { createSlice } from '@reduxjs/toolkit';

export const NavBarReducer = createSlice({
  name: 'NavBar',
  initialState: {
    showMenu: false,
    enlargeNavBar: false,
    showMobileMenu: false,
  },
  reducers: {
    // action
    setShowMenu: (state) => {
      return {
        ...state,
        showMenu: !state.showMenu, // Toggling the showMenu boolean
      };
    },
    setEnlargeNavBar: (state) => {
      return {
        ...state,
        enlargeNavBar: !state.enlargeNavBar,
      };
    },
    setShowMobileMenu: (state) => {
      return {
        ...state,
        showMobileMenu: !state.showMobileMenu,
      };
    },
    UnisetEnlargeNavBar: (state) => {
      return {
        ...state,
        enlargeNavBar: true,
      };
    },
  },
});

export const {
  setShowMenu,
  setEnlargeNavBar,
  setShowMobileMenu,
  UnisetEnlargeNavBar,
} = NavBarReducer.actions;
export default NavBarReducer.reducer;
