import { ALTS } from '../../constants/ALTS';
import firmLogo from '../../assets/icons/logo.svg';
import userIcon from '../../assets/icons/ic_person.svg';
import './header.scss';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <a className='logo'>
        <img className='logo__img' src={firmLogo} alt={ALTS.firmLogo} />
      </a>
      <div className='header__user'>
        <img className='header__user-img' src={userIcon} alt={ALTS.user} />
        <div className='header__user-name'>Имя Фамилия</div>
      </div>
    </header>
  );
};
