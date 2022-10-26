import { NAV } from '../../constants/NAV';
import { MenuItem } from '../MenuItem/MenuItem';
import './sideMenu.scss';

export const SideMenu: React.FC = () => {
  const list = NAV.map((item, index) => (
    <>
      <MenuItem item={item} key={index} />
      {item.subfields && (
        <ul className='nav__list nav__list--shiftted'>
          {item.subfields.map((el, idx) => (
            <MenuItem item={el} key={idx} />
          ))}
        </ul>
      )}
    </>
  ));

  return (
    <nav className='nav'>
      <div className='nav__title'>Меню</div>
      <ul className='nav__list'>{list}</ul>
    </nav>
  );
};
