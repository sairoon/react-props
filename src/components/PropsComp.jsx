import React from 'react'

const PropsComp = (props) => {
  return (
    <h3>{props.propsName}, {props.propsAlso}, {props.object.name}, {props.object.age}</h3>
  )
}

export default PropsComp
