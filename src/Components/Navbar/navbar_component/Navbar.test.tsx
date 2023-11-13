/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import {
  render as rtlRender,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Navbar from './Navbar';

import store from '../../../Redux/store';

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

// move this to NavbarMobile
describe('NavBarMobile', () => {
  it('Checking navbar mobile height', async () => {
    render(<Navbar />);
    const mobileMenu = screen.getByTestId('mobile-menu');
    const button = screen.getByTestId('LinkedList_Botton');
    const styles = window.getComputedStyle(mobileMenu);
    expect(styles.height).toBe('0px');
    fireEvent.click(button);
    await waitFor(() => {
      const updateStyles = window.getComputedStyle(mobileMenu);
      expect(updateStyles.height).toBe('410px');
    });
  });
});

describe('NavBar', () => {
  it('Check navbar height', async () => {
    render(<Navbar />);
    const navbar = screen.getByTestId('NavBar');
    const navbarStyle = window.getComputedStyle(navbar);
    expect(navbarStyle.height).toBe('50px');
    const button = screen.getByTestId('manu_icon');
    fireEvent.click(button);
    await waitFor(() => {
      const ubdatednavbarStyle = window.getComputedStyle(navbar);
      expect(ubdatednavbarStyle.height).toBe('120px');
    });
  });
});
