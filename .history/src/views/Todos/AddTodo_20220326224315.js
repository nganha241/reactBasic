import React from 'react';

class AddTodo extends React.Component {
    state = {
        title: '',
    }

    handleOnChangeTitle(event) => {
        this.
    }
    render () {
        let {title} = this.state
        return (
            <div className='add-todo'>
                <input type="text" value={title}
                    onChange={(event) => handleOnChangeTitle(event)}
                />
                <button type="button" className='add'>Add</button>
            </div>
        )
    }
}

export default AddTodo;