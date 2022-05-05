import React from 'react';

class MyComponent extends React.Component {
    render() {

        let name = 'Ngan Ha';

        return (
            // <React.Fragment></React.Fragment>
            <>
                <div>
                    hello my name is {name}
                </div>
            </>
            
        )
    }
}

export default MyComponent;