/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import store from '../../../Redux/store';

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe('Navbar', () => {
  it('Checking the title', () => {
    const { getByTestId } = render(<Navbar />);
    const value = getByTestId('name').textContent;
    expect(value).toEqual('Linked List');
  });
});
