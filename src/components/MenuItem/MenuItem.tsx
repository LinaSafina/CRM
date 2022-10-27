import { MenuItemProps } from './types';
import './menuItem.scss';
import getImageByKey from '../../helpers/getImageByKey';
import { Link } from 'react-router-dom';

export const MenuItem: React.FC<{
  item: MenuItemProps;
  onClick?: () => void;
}> = ({ item, onClick }) => {
  return (
    <li className='nav__list-item'>
      {!item.subfields && (
        <Link className='nav__link' to={item.link || '#'}>
          <img
            className='nav__img'
            alt={`${item.title} иконка`}
            src={getImageByKey(item.img)}
          />
          <span className='nav__item-title'>{item.title}</span>
        </Link>
      )}
      {item.subfields && onClick && (
        <button className='nav__button nav__link' onClick={onClick}>
          <img
            className='nav__img'
            alt={`${item.title} иконка`}
            src={getImageByKey(item.img)}
          />
          <span className='nav__item-title'>{item.title}</span>
        </button>
      )}
    </li>
  );
};
