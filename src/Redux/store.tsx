import { configureStore } from '@reduxjs/toolkit';
import NavBarReducer from './NavBarReducer';
export default configureStore({
  reducer: {
    NavbarRed: NavBarReducer,
  },
});
