import calendar from '../assets/icons/calendar.svg';
import logout from '../assets/icons/exit.svg';
import finance from '../assets/icons/finance.svg';
import home from '../assets/icons/ic_главная.svg';
import maps from '../assets/icons/maps.svg';
import profile from '../assets/icons/profile.svg';
import search from '../assets/icons/search.svg';
import settings from '../assets/icons/settings.svg';
import tables from '../assets/icons/vs_tables.svg';
import widgets from '../assets/icons/widget.svg';

const images: {
  [key: string]: string;
} = {
  calendar,
  logout,
  finance,
  home,
  maps,
  profile,
  search,
  settings,
  tables,
  widgets,
};

function getImageByKey(key: string) {
  return images[key];
}

export default getImageByKey;
