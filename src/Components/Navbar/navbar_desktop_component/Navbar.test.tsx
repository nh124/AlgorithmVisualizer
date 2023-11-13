import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import store from '../../../Redux/store';
import NavbarDesktop from './NavbarDesktop';
import { setEnlargeNavBar } from '../../../Redux/NavBarReducer';

describe('NavbarDesktop', () => {
  it('applies style based on enlargeNavBar State', () => {
    render(
      <Provider store={store}>
        <NavbarDesktop />
      </Provider>
    );
    const desktopNavBar = screen.getByTestId('desktop-comp');
    expect(desktopNavBar).toHaveStyle('overflow: visible');
    act(() => {
      store.dispatch(setEnlargeNavBar());
      render(
        <Provider store={store}>
          <NavbarDesktop />
        </Provider>
      );
    });
    act(() => {
      setTimeout(() => {
        expect(desktopNavBar).toHaveStyle('overflow: visible');
      }, 300);
    });
  });
});
