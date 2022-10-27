import { MenuItemProps } from './types';
import './menuItem.scss';
import getImageByKey from '../../helpers/getImageByKey';

export const MenuItem: React.FC<{
  item: MenuItemProps;
  onClick?: () => void;
}> = ({ item, onClick }) => {
  return (
    <li className='nav__list-item'>
      {!item.subfields && (
        <a className='nav__link' href={item.link}>
          <img
            className='nav__img'
            alt={`${item.title} иконка`}
            src={getImageByKey(item.img)}
          />
          <span className='nav__item-title'>{item.title}</span>
        </a>
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
