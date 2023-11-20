import IconType from './IconTypes';
import FormBoxType from './FormBoxType';

const NavBarIcons = () => {
  interface NavBarIcon {
    id: number;
    name: string;
    icon: IconType;
    FormBox: FormBoxType | string;
  }
  const NavBarIconsList: NavBarIcon[] = [
    {
      id: 1,
      name: 'Create Linked List',
      icon: 'createIcon',
      FormBox: 'ButtonName',
    },
    {
      id: 1,
      name: 'Add',
      icon: 'AddIcon',
      FormBox: {
        name: 'Add',
        required: true,
        label: 'Ex. 1',
      },
    },
    {
      id: 2,
      name: 'Delete',
      icon: 'DeleteIcon',
      FormBox: {
        name: 'Delete',
        required: true,
        label: 'Ex. 1',
      },
    },
    {
      id: 3,
      name: 'Search',
      icon: 'SearchIcon',
      FormBox: {
        name: 'Search',
        required: true,
        label: 'Ex. 1',
      },
    },
    {
      id: 5,
      name: 'Clear all Linked List',
      icon: 'clearIcon',
      FormBox: 'ButtonName',
    },
  ];
  return NavBarIconsList;
};

export default NavBarIcons;
