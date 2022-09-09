import React from 'react';

import './ContentHeader.scss';

const ContentHeader = ({ headerTitle, buttonTitle, onClickButton }) => {
  return (
    <div className='content__header'>
      <h1>{headerTitle}</h1>
      <button onClick={onClickButton}>{buttonTitle}</button>
    </div>
  );
};

export default ContentHeader;