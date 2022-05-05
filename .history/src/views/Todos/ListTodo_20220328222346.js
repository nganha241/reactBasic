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
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id )
        this.setState({
            listTodos: currentTodos
        })

        toast.error("Xoa thanh cong")
    }

    handleEditTodo = (todo) => {
        this.setState({
            editTodo: todo
        })
    }

    render() {
        let {listTodos, editTodo} = this.state; // -- let listTodos = this.state.listTodos
        let isEmtyObj = Object.keys(editTodo).length === 0
        return (
            <div className='list-todo-container'>
                <AddTodo addNewTodo = {this.addNewTodo} />
                <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    {isEmtyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                        {editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - 
                                                <input value={editTodo.title} onChange={}/>
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        }
                                        </>                                     
                                    }
                                    <button className='edit' onClick={() => this.handleEditTodo(item)}> Edit</button>
                                    <button className='delete' onClick={() => this.HandleDelete(item)}>Delete</button>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default ListTodo;