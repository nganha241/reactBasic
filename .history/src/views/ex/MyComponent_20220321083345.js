import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Ngan Ha',
        age: 20
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleClickButton = () => {
        alert('hello')
    }

    render() {

        let name = 'Ngan Ha';

        return (
            // <React.Fragment></React.Fragment>
            <>
                <div>
                    <input value={this.state.name} onChange={(event)=> this.handleOnChangeName()} />
                </div>

                <div>
                    hello my name is {this.state.name} 
                </div>

                <div className='tuoi'>
                    {this.state.age} year olds
                </div>

                <div className='onc'>
                    <button onClick={()=> this.handleClickButton()}>Click</button>
                </div>
            </>
            
        )
    }
}

export default MyComponent;