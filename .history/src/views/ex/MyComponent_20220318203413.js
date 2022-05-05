import React from 'react';

class MyComponent extends React.Component {
    render() {

        let name = 'Ngan Ha';

        return (
            
            <div>
                console.log('name:', name);
                hello my name is {name}
            </div>
        )
    }
}

export default MyComponent;