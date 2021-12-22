import React from 'react';
import PropTypes from 'prop-types';

import s from 'components/Button/Button.module.css';

function Button({ children, onClick, id }) {
  return (
    <button id={id} type="button" className={s.Button} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { Button };
