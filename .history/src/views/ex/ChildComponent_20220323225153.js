import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let {arrJobs} = this.props
        let {showJobs} = this.state

        return (
            <>
                {showJobs === false && 
                <div>
                    <button onClick={() => this.handleShowHide()}>Show</button>
                </div>}
                {showJobs &&
                    <>
                        <div className='job-list'>
                        {
                            arrJobs.map((item, index) => {
                                return(
                                    <div key={item.id}>
                                        {item.id} {item.salary}
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
            
        )
    }
}
// const ChildComponent = (props) => {
//     let {arrJobs} = props;
//     return (
//                 <>
//                     <div className='job-list'>
//                     {
//                         arrJobs.map((item, index) => {
//                             return(
//                                 <div key={item.id}>
//                                     {item.id} {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                     </div>
//                 </>
//     )
// }
export default ChildComponent;