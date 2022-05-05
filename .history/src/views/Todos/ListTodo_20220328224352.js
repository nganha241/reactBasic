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
        let {editTodo, listTodos} = this.state
        let isEmtyObj = Object.keys(editTodo).length === 0

        if(isEmtyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))

            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Cap nhat thanh cong")
            return
        }

        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEdit = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
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
                                                <input value={editTodo.title} onChange={() => this.handleOnChangeEdit(item)}/>
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        }
                                        </>                                     
                                    }
                                    <button className='edit' onClick={() => this.handleEditTodo(item)}> 
                                    {isEmtyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
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