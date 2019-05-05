import React from 'react'
import Option from './Option'

const Options = (props) => (
  <div>
    <button onClick={props.handleRemoveAll}>Remove All</button>
    {
      props.options.length == 0 ? <p>Please add tasks to get started!</p> :
        <ul>
          {props.options.map((option, index) => (
            <Option
              key={index}
              option={option}
              handleRemoveOption={props.handleRemoveOption}
            />
          ))}
        </ul>
    }

  </div>
)

export default Options