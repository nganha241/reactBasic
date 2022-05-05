import React from 'react';

class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    render() {
        return (
            <>
            <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.titleJob} onChange={(event) => this.handleChangetitleJob(event)}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangesalary(event)}/><br/><br/>
                    <input type="button" value="Submit" onClick={() => this.handleClick()}/>
                </form> 
            </>
        )
    }
}

export default AddComponent