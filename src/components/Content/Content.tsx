import './content.scss';
import { ContentProps } from './types';

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <main className='main'>{children}</main>;
};
