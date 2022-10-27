import { ALTS } from '../../constants/ALTS';
import firmLogo from '../../assets/icons/logo.svg';
import userIcon from '../../assets/icons/ic_person.svg';
import './header.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <Link className='logo' to='/'>
        <img className='logo__img' src={firmLogo} alt={ALTS.firmLogo} />
      </Link>
      <div className='header__user'>
        <img className='header__user-img' src={userIcon} alt={ALTS.user} />
        <div className='header__user-name'>Имя Фамилия</div>
      </div>
    </header>
  );
};
