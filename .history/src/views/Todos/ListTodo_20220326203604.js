import React from 'react';

class ListTodo extends React.Component {
    render() {
        return (
            <div className='list-todo-container'>
                <div className='add-todo'>
                    <input type="text/>
                </div>
            </div>
        )
    }
}

export default ListTodo;