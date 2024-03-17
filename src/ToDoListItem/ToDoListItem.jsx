import { useState } from "react";
import PropTypes from 'prop-types';
import styles from './ToDoListItem.module.css';

export function ToDoListItem({ todo, steps }) {
  const [hover, setHover] = useState(false);

  return (
    <li className={styles.Ddown}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {todo}
      {hover && (
        <div className={styles.dropdown}>
          {steps.map(function (step, index) {
            return (
              <p className={styles.pstep} key={index}>
                <h4>{todo} </h4>
                <h5> Step: {index + 1} </h5>
                <h4> {step} </h4>
              </p>
            );
          })}
        </div>
      )}
    </li>
  );
}

ToDoListItem.propTypes = {
  todo: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
};

export default ToDoListItem;