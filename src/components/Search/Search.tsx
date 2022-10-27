import { ALTS } from '../../constants/ALTS';
import searchIcon from '../../assets/icons/search.svg';
import './search.scss';
import { ContentTop } from '../ContentTop/ContentTop';

export const Search = () => {
  return (
    <>
      <section className='main__search search'>
        <ContentTop
          title='Поиск адресов'
          subtitle='Введите интересующий вас адрес'
        />
        <form className='form main__form'>
          <input
            className='form__input input'
            id='search-input'
            placeholder='Введите интересующий вас адрес'
          ></input>
          <button className='button big-text'>
            <img
              className='button__icon icon--filter-white'
              src={searchIcon}
              alt={ALTS.searchIcon}
            />
            <span>Поиск</span>
          </button>
        </form>
      </section>
      <section className='main__address address'>
        <h2 className='address__title title'>Адреса</h2>
        <ul className='address__list'>
          <li className='address__list-item'>
            город Москва, улица Ленина 13, дом 32
          </li>
        </ul>
      </section>
    </>
  );
};
