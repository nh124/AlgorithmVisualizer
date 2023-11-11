/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import {
  render as rtlRender,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import NavbarDesktop from './NavbarDesktop';

import store from '../../../Redux/store';

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe('NavbarDesktop', () => {
  it('Checking navbar manuIcon visibility on desktop height with display of < 1044', async () => {
    window.innerWidth = 1100;
    render(<NavbarDesktop />);
    const smallScreenMenuIcon = screen.getByTestId('manu_icon');
    expect(smallScreenMenuIcon).toHaveClass('hidden');
  });
});

describe('NavbarDesktop', () => {
  it('Checking navbar manuIcon visibility on desktop height with display of > 1044', async () => {
    window.innerWidth = 1044;
    render(<NavbarDesktop />);
    const smallScreenMenuIcon = screen.getByTestId('manu_icon');
    expect(smallScreenMenuIcon).toHaveClass('max-[1044px]:inline');
  });
});
