import { Component, Fragment } from 'react';

import { Props } from './types';

class ErrorBoundary extends Component<
  {
    children: React.ReactNode;
  },
  { hasError: boolean }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <p className='info'>Что-то пошло не так :/</p>
          <p className='info'>Мы уже работаем над этим</p>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
