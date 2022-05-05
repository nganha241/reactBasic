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
                    <button type="button" className='add'>Add</button>
                </div>
                <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <button className='edit'> Edit</button>
                                    <button className='delete'>Delete</button>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default ListTodo;