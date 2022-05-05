import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }
    handleChangetitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    handleSubmit = () => {
        this.props.addNewJob({
            id: Math.floor(Math.random()*1000),
            title: this.state.title,
            salary: this.state.salary,
        })
    }

    render() {
        return (
            <>
            <form>
                    <label htmlFor="fname">Title Job:</label><br/>
                    <input type="text" value={this.state.title} onChange={(event) => this.handleChangetitle(event)}/><br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)}/><br/><br/>
                    <input type="button" value="Submit" onClick={() => this.handleSubmit()}/>
                </form> 
            </>
        )
    }
}

export default AddComponent