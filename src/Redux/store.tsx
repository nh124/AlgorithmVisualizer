import { configureStore } from '@reduxjs/toolkit';
import NavBarReducer from './NavBarReducer';
import LinkedListAddReducer from './LinkedListReducer';

export default configureStore({
  reducer: {
    NavbarRed: NavBarReducer,
    LinkedListAddRed: LinkedListAddReducer,
  },
});
