import { describe, it, expect } from 'vitest';
import { render as rtlRender } from '@testing-library/react';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from '../../../Redux/store.tsx';

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe('Navbar', () => {
  it('Checking the title', () => {
    const { getByTestId } = render(<Navbar />);
    const value = getByTestId('name').textContent;
    expect(value).toEqual('Linked List');
  });
});
