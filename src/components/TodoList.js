
import React from 'react'

export default function TodoList(props) {
  return (
    
        <ul>
            <li className='list-items' >{props.todos} <button className='delete-btn' onClick={()=>props.handleRemove(props.id)}>Delete</button></li>
        </ul>
   
  )
}
