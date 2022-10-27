import { ALTS } from '../../constants/ALTS';
import searchIcon from '../../assets/icons/search.svg';
import './search.scss';
import { ContentTop } from '../ContentTop/ContentTop';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import getAddresses from '../../helpers/getAddresses';
import { RequestStateType } from './types';

export const Search = () => {
  const [enteredAddress, setEnteredAddress] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [requestState, setRequestState] = useState<RequestStateType>({
    error: null,
    isLoading: false,
    data: null,
  });

  let submitBtnClasses = `button big-text ${isBtnDisabled && 'disabled'}`;

  const addressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAddress(event.target.value);
    setIsBtnDisabled(event.target.value.length < 3);
  };

  const submitAddressFormHandler = (event: FormEvent) => {
    event.preventDefault();

    if (enteredAddress.length < 3) {
      return;
    }

    setRequestState({ isLoading: true, error: null, data: null });

    getAddresses(enteredAddress)
      .then((response) => response.json())
      .then((result) => {
        setRequestState({
          error: null,
          isLoading: false,
          data: result,
        });
      })
      .catch((error) => {
        setRequestState({
          error: error,
          isLoading: false,
          data: null,
        });
        console.log('error', error);
      })
      .finally(() => {
        setEnteredAddress('');
      });
  };

  let list: ReactElement | ReactElement[] = <li></li>;

  if (requestState.data) {
    list = requestState.data.suggestions.map((item, index) => (
      <li className='address__list-item' key={index}>
        {item.value}
      </li>
    ));
  }

  const isAddressesListEmpty = requestState?.data?.suggestions.length === 0;

  return (
    <>
      <section className='main__search search'>
        <ContentTop
          title='Поиск адресов'
          subtitle='Введите интересующий вас адрес'
        />
        <form className='form main__form' onSubmit={submitAddressFormHandler}>
          <input
            className='form__input input'
            id='search-input'
            placeholder='Введите интересующий вас адрес'
            value={enteredAddress}
            onChange={addressChangeHandler}
          ></input>
          <button className={submitBtnClasses} type='submit'>
            <img
              className='button__icon icon--filter-white'
              src={searchIcon}
              alt={ALTS.searchIcon}
            />
            <span>Поиск</span>
          </button>
        </form>
      </section>
      {requestState.isLoading && <p>Загружаю...</p>}
      {requestState.data && isAddressesListEmpty && (
        <p>По Вашему запросу ничего не найдено</p>
      )}
      {requestState.data && !isAddressesListEmpty && (
        <section className='main__address address'>
          <h2 className='address__title title'>Адреса</h2>
          <ul className='address__list'>{list}</ul>
        </section>
      )}
    </>
  );
};
