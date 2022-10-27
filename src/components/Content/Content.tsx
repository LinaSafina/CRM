import { News } from '../News/News';
import { Search } from '../Search/Search';
import './content.scss';

export const Content: React.FC = () => {
  return (
    <main className='main'>
      {/* <Search /> */}
      <News />
    </main>
  );
};
