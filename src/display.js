import React from 'react'

const Display = ({input}) => {
  return (
    <div className="output">
        <div className="display backlight">
          <input type="text" className="result" value={input} disabled />
        </div>
      </div>
  )
}

export default Display