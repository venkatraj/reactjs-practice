import React from 'react'
import Option from './Option'

const Options = (props) => (
  <div>
    <div className="widget__heading">
      <h3>Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleRemoveAll}
      >
        Remove All
      </button>
    </div>
    <div className="widget__body">
      {
        props.options.length == 0 ? <p>Please add tasks to get started!</p> :
          <ol>
            {props.options.map((option, index) => (
              <Option
                key={index}
                option={option}
                handleRemoveOption={props.handleRemoveOption}
              />
            ))}
          </ol>
      }
    </div>
  </div>
)

export default Options