import React from 'react';

class AddComponent extends React.Component {
    render() {
        return (
            <>
            <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstname} onChange={(event) => this.handleChangeFirstName(event)}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastname} onChange={(event) => this.handleChangeLastName(event)}/><br/><br/>
                    <input type="button" value="Submit" onClick={() => this.handleClick()}/>
                </form> 
            </>
        )
    }
}

export default AddComponent