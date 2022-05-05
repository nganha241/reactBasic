import React from 'react';

class ChildComponent extends React.Component {


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
        let {name} = this.props
        console.log(this.props)
        return (
           
            // <React.Fragment></React.Fragment>
            <>
                <div>
                    child component: {name} - {arrJobs} - {na}
                </div>
            </>
            
        )
    }
}

export default ChildComponent;