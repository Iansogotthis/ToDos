import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './ToWriteItems.module.css';

export function ToWriteItem({ toWrite, steps }) {
  const [hover, setHover] = useState(false);

  return (
    <li className={styles.Ddown}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    
     <a href="">   {toWrite} </a>
     
      {hover && (
        <div className={styles.dropdown}>
          {steps.map(function (step, index) {
            return (
              <p className={styles.pstep} key={index}>
                <h4>{toWrite} </h4>
                <h5> Step: {index + 1} </h5>
                <h4> <a href = "">{step}</a> </h4>
              </p>
            );
          })}
        </div>
      )}
    </li>
  );
}

ToWriteItem.propTypes = {
  toWrite: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
};

export default ToWriteItem;