import { useState } from "react";
import styled from "@emotion/styled";

const Dropdown = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const ListItem = styled.li`
  position: relative;
`;

export function ToDoListItem({ todo, steps }) {
  const [hover, setHover] = useState(false);

  return (
    <ListItem className ="Ddown"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {todo}
      {hover && (
        <Dropdown>
          {steps.map(function (step, index) {
            return (
              <p className = "pstep" key={index}>
                Step {index + 1} for {todo}: {step}
              </p>
            );
          })}
        </Dropdown>
      )}
    </ListItem>
  );
}

export default ToDoListItem;
