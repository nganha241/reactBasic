import React from 'react';

class ChildComponent extends React.Component {


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