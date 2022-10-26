import { MenuItemProps } from './types';
import './menuItem.scss';
import getImageByKey from '../../helpers/getImageByKey';

export const MenuItem: React.FC<{ item: MenuItemProps }> = ({ item }) => {
  return (
    <li className='nav__list-item'>
      <a className='nav__link' href='#'>
        <img
          className='nav__img'
          alt={`${item.title} иконка`}
          src={getImageByKey(item.img)}
        />
        <span className='nav__item-title'>{item.title}</span>
      </a>
    </li>
  );
};
