import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    // state = {
    //     name: 'Ngan Ha',
    //     age: 20
    // }

    state = {
        arrJobs: [
            {id: 'scdv', salary: '700'},
            {id: 'scdv2', salary: '750'}
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
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




                <AddComponent
                    addNewJob={this.state}
                />

                

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
            
        )
    }
}

export default MyComponent;