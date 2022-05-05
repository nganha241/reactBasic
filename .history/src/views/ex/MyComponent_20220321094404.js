import React from 'react';

class MyComponent extends React.Component {

    // state = {
    //     name: 'Ngan Ha',
    //     age: 20
    // }

    state = {
        firstname: '',
        lastname: '',
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstname: event.target.value,
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastname: event.target.value,
        })
    }

    handleClick = () => {
        alert(this.state.firstname + ' ' + this.state.lastname)
    }

    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value,
    //     })
    // }

    // handleClickButton = () => {
    //     alert('hello')
    // }

    render() {

        return (
            // <React.Fragment></React.Fragment>
            <>
                {/* <div>
                    <input value={this.state.name} type="text" onChange={(event)=> this.handleOnChangeName(event)} />
                </div>

                <div>
                    hello my name is {this.state.name} 
                </div>

                <div className='tuoi'>
                    {this.state.age} year olds
                </div>

                <div className='onc'>
                    <button onClick={()=> this.handleClickButton()}>Click</button>
                </div> */}

                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstname} onChange={(event) => this.handleChangeFirstName(event)}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastname} onChange={(event) => this.handleChangeLastName(event)}/><br/><br/>
                    <input type="submit" value="Submit" onClick={() => this.handleClick()}/>
                </form> 
            </>
            
        )
    }
}

export default MyComponent;