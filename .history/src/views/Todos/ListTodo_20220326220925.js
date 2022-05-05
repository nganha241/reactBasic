import React from 'react';
import './ListTodo.scss';

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
                <div className='list-todo-content'>
                        {listTodos && ListTodo.length > 0 && listTodos.map()}
                        <div className='todo-child'>
                            <span>Todo 1</span>
                            <button> Edit</button>
                            <button>Delete</button>
                        </div>
                        
                        <div className='todo-child'>
                            <span>Todo 1</span>
                            <button> Edit</button>
                            <button>Delete</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default ListTodo;