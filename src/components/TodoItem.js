import React from "react";
import PropTypes from "prop-types";


const TodoItem = (pros) => {
    const todo = pros.todoProps
    const markComplete = pros.markCompleteFunc
    const deleteTodo = pros.deleteTodoFunc

    //Style
    //element p style
    const todoItemStyle = {
        background: '#f4f4f4f4',
        padding: '20px',
        borderBottom: '1px #ccc dotted',
        position: 'relative',
        textDecoration: todo.completed ? 'line-through' : 'none',
        alignItems: 'center',
        display: 'flex'
    }
    const btnDeleteStyle = {
        background: 'orange',
        boxSizing: 'border-box',
        padding: '10px',
        borderRadius: '50%',
        border: '1px #ccc solid',
        position: 'absolute',
        right: '20px',
        cursor: 'pointer'
    }


    return (
        <p style={todoItemStyle}>
            <input  type="checkbox" onChange={markComplete.bind(this, todo.id)} checked={todo.completed} />
            {todo.title}
            <button style={btnDeleteStyle} onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
        </p>
    )
}

//PropTypes: Defined th
TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompleteFunc: PropTypes.func.isRequired,
    deleteTodoFunc: PropTypes.func.isRequired
}

export default TodoItem
