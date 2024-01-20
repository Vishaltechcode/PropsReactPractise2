import React from 'react'

function GrandChildComponent(props) {
  let color=props.test;
    return (
    <div style={{color: color}}>GrandChildComponent</div>
  )
}

export default GrandChildComponent