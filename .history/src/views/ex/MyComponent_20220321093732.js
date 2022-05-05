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
                    <label for="fname">First name:</label><br/>
                    <input type="text" value="{this.state.firstname}" onChange={(event) => this.handleChangeFirstName(event)}/><br/>
                    <label for="lname">Last name:</label><br/>
                    <input type="text" value=""/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form> 
            </>
            
        )
    }
}

export default MyComponent;