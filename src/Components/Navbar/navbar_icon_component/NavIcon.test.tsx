import { describe, it, expect } from 'vitest';
import {
  render as rtlRender,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { Provider } from 'react-redux';
import TrashIcon from '../../../Icons/TrashIcon';
import NavIcons from './NavIcons';
import store from '../../../Redux/store';

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe('NavBarMobile', () => {
  it('Check hoverAnimation on icon', async () => {
    render(<TrashIcon size={30} color="white" />);
    render(
      <NavIcons
        name="Add Node"
        icon="DeleteIcon"
        FormBox={{ required: true, name: 'Add Node', label: 'Ex. 1' }}
        mobile
      />
    );
    const navIcon = screen.getByTestId('NavButton');
    const formBox = screen.getByTestId('form_box');

    expect(formBox).toHaveClass('translate-y-[0px]');
    fireEvent.click(navIcon);
    await waitFor(() => {
      expect(formBox).toHaveClass(`translate-y-[50px] z-10`);
    });
  });
});
