import React from 'react';
import AddTodo from './AddTodo';
import './ListTodo.scss';
import {toast} from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing homeword'},
            {id: 'todo2', title: 'Learn React'}
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Them thanh cong!");
    }

    HandleDelete = (todo) => {
        console(todo)
    }

    render() {
        let {listTodos} = this.state; // -- let listTodos = this.state.listTodos
        
        return (
            <div className='list-todo-container'>
                <AddTodo addNewTodo = {this.addNewTodo} />
                <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <button className='edit'> Edit</button>
                                    <button className='delete' onClick={this.HandleDelete(item)}>Delete</button>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default ListTodo;