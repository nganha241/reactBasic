import React from 'react';

class ChildComponent extends React.Component {

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
            console.log(this.props)
            // <React.Fragment></React.Fragment>
            <>
                <div>
                    child component: {this.props.name}
                </div>
            </>
            
        )
    }
}

export default ChildComponent;