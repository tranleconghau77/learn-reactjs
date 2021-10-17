import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'

const AddTodo=props=>{
    const addToDo=props.addTodoFunc

    const [title,setTitle]=useState('')

    const addToDoFormStyle={
        display:'flex'
    }
    const addToDoInputStyle={
        flex:'10',
        padding:'5px'
    }

    const addToDoSubmitStyle={
        flex:'1'
    }

    const changeTitle= event=>{
        setTitle(event.target.value)
    }

    const addSingleToDo=event=>{
        event.preventDefault()
        if(title!==''){
            addToDo(title)
            setTitle('')
        }
    }

    return(
        <form style={addToDoFormStyle} onSubmit={addSingleToDo}>
            <input 
                style={addToDoInputStyle} 
                type="text" name="title" 
                placeholder='Add To Do' 
                onChange={changeTitle} 
                value={title} />
            <button style={addToDoSubmitStyle} type="submit" value="Add" className='btn' >Add</button>
        </form>
    )
}

AddTodo.propTypes={
    addTodoFunc:PropTypes.func.isRequired
}

export default AddTodo