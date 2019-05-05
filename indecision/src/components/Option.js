import React from 'react'

const Option = (props) => (
  <li>
    {props.option}
      <span
      onClick={(e) => {
        props.handleRemoveOption(props.option)
      }
      }
    >
      Remove
    </span>
  </li>
)

export default Option