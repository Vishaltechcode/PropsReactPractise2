import React from 'react'
import GrandChildComponent from './GrandChildComponent'

function ChildComponent(props) {
  return (
    <div>ChildComponent
        <GrandChildComponent test={props.test}/>
    </div>
  )
}

export default ChildComponent