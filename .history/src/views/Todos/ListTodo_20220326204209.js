import React from 'react';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing homeword'},
            {id: 'todo2', title: 'Learn React'}
        ]
    }
    render() {
        let {listTodos} = this.state; // -- let listTodos = this.state.listTodos
        return (
            <div className='list-todo-container'>
                <div className='add-todo'>
                    <input type="text"/>
                    <button typr="button">Add</button>
                </div>
                <div className='list-todo-container'>
                    <ul>
                        <div className='todo-child'>Todo 1</div>
                        <div className='todo-child'>Todo 2</div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ListTodo;