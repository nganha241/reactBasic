import React from 'react';

class ListTodo extends React.Component {
    render() {
        return (
            <div className='list-todo-container'>
                <div className='add-todo'>
                    <input type="text"/>
                    <button typr="button">Add</button>
                </div>
                <div className='list-todo-container'>
                    
                </div>
            </div>
        )
    }
}

export default ListTodo;