/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useDispatch } from 'react-redux';
import NodeIcon from '../../Icons/NodeIcon';
import NavBarIcons from '../../OtherFunctions/NavBarIcons';
import ToggleFormWithButton from '../ToggleFormWithButton/ToggleFormWithButton';
import { setListIndex } from '../../Redux/LinkedListReducer';

function ListToggleFormWithButton({ index }: { index: number }) {
  const loadIcons: { [key: string]: JSX.Element } = {
    Add: <NodeIcon size={20} status="create" color="black" />,
    Delete: <NodeIcon size={20} status="create" color="black" />,
    Search: <NodeIcon size={20} status="create" color="black" />,
  };
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-row max-md:flex-col"
      onClick={() => dispatch(setListIndex(index))}
      role="button"
    >
      {NavBarIcons()
        .filter((item) => item.FormBox !== 'ButtonName')
        .map((item) => (
          <div key={item.id}>
            <ToggleFormWithButton
              name={item.name}
              icon={loadIcons[item.name]}
            />
          </div>
        ))}
    </div>
  );
}

export default ListToggleFormWithButton;
