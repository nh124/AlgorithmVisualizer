import IconType from './IconTypes';
import FormBoxType from './FormBoxType';

const NavBarIcons = (forMobile: boolean) => {
  interface NavBarIcon {
    id: number;
    name: string;
    icon: IconType;
    FormBox: FormBoxType;
    mobile: boolean;
  }
  const NavBarIconsList: NavBarIcon[] = [
    {
      id: 1,
      name: 'Add Node',
      icon: 'AddIcon',
      FormBox: {
        name: 'Add Node',
        required: true,
        label: 'Ex. 1',
      },
      mobile: forMobile,
    },
    {
      id: 2,
      name: 'Delete Node',
      icon: 'DeleteIcon',
      FormBox: {
        name: 'Delete Node',
        required: true,
        label: 'Ex. 1',
      },
      mobile: forMobile,
    },
    {
      id: 3,
      name: 'Search Node',
      icon: 'SearchIcon',
      FormBox: {
        name: 'Search Node',
        required: true,
        label: 'Ex. 1',
      },
      mobile: forMobile,
    },
    {
      id: 4,
      name: 'Create a Linked List',
      icon: 'createIcon',
      FormBox: {
        name: undefined,
        required: false,
        label: undefined,
      },
      mobile: forMobile,
    },
    {
      id: 5,
      name: 'Clear a Linked List',
      icon: 'clearIcon',
      FormBox: {
        name: undefined,
        required: false,
        label: undefined,
      },
      mobile: forMobile,
    },
  ];
  return NavBarIconsList;
};

export default NavBarIcons;
