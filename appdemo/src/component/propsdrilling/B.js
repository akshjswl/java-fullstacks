import React from 'react'
import C from './C'
function B({data}) {
  return (
    <div>
        <h2>B component</h2>
        <C data={data} />
    </div>
  )
}

export default B