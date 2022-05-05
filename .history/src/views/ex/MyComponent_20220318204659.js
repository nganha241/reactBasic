import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Ngan Ha',
        age: 20
    }

    render() {

        let name = 'Ngan Ha';

        return (
            // <React.Fragment></React.Fragment>
            <>
                <div>
                    hello my name is {this.state.name} 
                </div>

                <div className='tuoi'>
                    {this.state.age} year olds
                </div>
            </>
            
        )
    }
}

export default MyComponent;