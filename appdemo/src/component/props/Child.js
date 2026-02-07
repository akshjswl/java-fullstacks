import React from 'react'

function Child({data}) {
  return (
    <div>
        <h2>ChildComponent</h2>
        <p>{data}</p>
    </div>
  )
}

export default Child