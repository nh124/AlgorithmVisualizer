import { describe, it, expect } from 'vitest';
import {
  render as rtlRender,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import NavBarIcons from '../../../OtherFunctions/NavBarIcons';

import store from '../../../Redux/store';
import Navbar from './Navbar';
import NavIcons from '../navbar_icon_component/NavIcons';
import ManageLinkedList from '../../../Functions/ManageLinkedList/ManageLinkedList';
import DisplayPanel from '../../DisplayPanel/DisplayPanel';

const render = (component: any) => {
  rtlRender(<Provider store={store}>{component}</Provider>);
};

describe('Navbar loads algorithm name', () => {
  it('Navbar loads algorithm name', () => {
    render(<Navbar />);
    const title = screen.getByText('Linked List');
    expect(title).toBeInTheDocument();
  });
});

describe('Navbar loads two icons', () => {
  it('Navbar loads two icons', () => {
    render(<Navbar />);
    const title = screen.getByText('Linked List');
    expect(title).toBeInTheDocument();
    const NavIconsFunc = NavBarIcons()
      .filter((item) => item.FormBox === 'ButtonName')
      .map((item) => item.name);
    expect(NavIconsFunc).not.toStrictEqual(['Add', 'Delete', 'Search']);
  });
});

describe('NavIcon click to Creating linkedList', () => {
  it('NavIcon click', () => {
    render(<NavIcons name="Create Linked List" icon="createIcon" />);
    render(<DisplayPanel />);
    function TestComponent() {
      const { getAllLists } = ManageLinkedList();
      return <div data-testid="testNumber">{getAllLists().length}</div>;
    }
    // Render TestComponent once
    render(<TestComponent />);
    // Retrieve the element with data-testid="testNumber"
    const listCount = screen.getByTestId('testNumber').textContent as string;
    expect(parseInt(listCount, 10)).toBe(0);
    const navButton = screen.getByTestId('NavButton');
    fireEvent.click(navButton);
    act(() => {
      render(<TestComponent />);
      render(<DisplayPanel />);
    });
    const linkedListContainers = screen.queryAllByTestId('linkedListContainer');
    expect(linkedListContainers[0]).toBeInTheDocument();
    const updatedListCount = screen.getAllByTestId('testNumber')[1]
      .textContent as string;
    expect(parseInt(updatedListCount, 10)).toBe(1);
  });
});

describe('NavIcon click to Creating linkedList', () => {
  it('NavIcon click', () => {
    render(<NavIcons name="Clear all Linked List" icon="clearIcon" />);

    function TestComponent() {
      const { getAllLists } = ManageLinkedList();
      return <div data-testid="testNumber">{getAllLists().length}</div>;
    }
    // Render TestComponent once
    render(<TestComponent />);
    // Retrieve the element with data-testid="testNumber"
    const listCount = screen.getByTestId('testNumber').textContent as string;
    expect(parseInt(listCount, 10)).toBe(1);
    const navButton = screen.getByTestId('NavButton');
    fireEvent.click(navButton);
    act(() => {
      render(<TestComponent />);
      render(<DisplayPanel />);
    });
    const updatedListCount = screen.getAllByTestId('testNumber')[1]
      .textContent as string;
    const defaultElment = screen.getByText('Sandbox');
    expect(parseInt(updatedListCount, 10)).toBe(0);
    expect(defaultElment).toBeInTheDocument();
  });
});
