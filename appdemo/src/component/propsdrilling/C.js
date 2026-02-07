import React from 'react'
import D from './D'
function C({data}) {
  return (
    <div>
        <h2>C componet</h2>
        <D data={data} />
    </div>
  )
}

export default C