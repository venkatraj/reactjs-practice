import React from 'react'

const Option = (props) => {
  return (
    <li>
      {props.option} -&nbsp;
      <span
        onClick={(e) => {
          props.handleRemoveOption(props.option)
        }
        }
      >
        Remove
      </span>
    </li>
  );

}

export default Option