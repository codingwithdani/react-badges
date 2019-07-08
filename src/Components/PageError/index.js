import React from 'react';

import './index.css';

function PageError(props) {
  return <div className="PageError">❌{props.error.message}😱</div>;
}

export default PageError;