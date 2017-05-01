import React from 'react';
import ReactDOM from 'react-dom';
import elementType from 'react-prop-types/lib/elementType';

import App from './components/App';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
