import { Fragment, useState } from 'react';
import { NAV } from '../../constants/NAV';
import { MenuItem } from '../MenuItem/MenuItem';
import './sideMenu.scss';

export const SideMenu: React.FC = () => {
  const [areSubfieldsShown, setAreSubfieldsShown] = useState(false);
  let subfieldsClasses = `nav__list nav__list--shiftted ${
    !areSubfieldsShown && 'hidden'
  }`;

  function toogleMenuItemHandler() {
    setAreSubfieldsShown((prevState) => !prevState);
  }

  const list = NAV.map((item, index) => (
    <Fragment key={index}>
      {!item.subfields && <MenuItem item={item} />}
      {item.subfields && (
        <>
          <MenuItem item={item} key={index} onClick={toogleMenuItemHandler} />
          <ul className={subfieldsClasses}>
            {item.subfields.map((el, idx) => (
              <MenuItem item={el} key={idx} />
            ))}
          </ul>
        </>
      )}
    </Fragment>
  ));

  return (
    <nav className='nav'>
      <div className='nav__title'>Меню</div>
      <ul className='nav__list'>{list}</ul>
    </nav>
  );
};
