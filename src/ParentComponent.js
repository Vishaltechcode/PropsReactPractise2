import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent(props) {
  return (
    <div>Parent ChildCompone
    <ChildComponent test={props.mycolor}/>
    </div>
  )
}

export default ParentComponent;