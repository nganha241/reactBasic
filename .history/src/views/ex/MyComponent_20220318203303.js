import React from 'react';

class MyComponent extends React.Component {
    render() {

        let name = 'Ngan Ha';

        return (
            {console.log($name)}
            <div>hello my name is {name}</div>
        )
    }
}

export default MyComponent;