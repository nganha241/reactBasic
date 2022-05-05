import React from 'react';

class ChildComponent extends React.Component {

    state = {
        firstname: '',
        lastname: '',
    }

//     handleChangeFirstName = (event) => {
//         this.setState({
//             firstname: event.target.value,
//         })
//     }

//     handleChangeLastName = (event) => {
//         this.setState({
//             lastname: event.target.value,
//         })
//     }

//     handleClick = () => {
//         alert(this.state.firstname + ' ' + this.state.lastname)
//     }


    render() {
        let {arrJobs} = this.props
        console.log(this.props)
        return (
            <>
                <div><button>Show</button></div>
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
                <div><button>Hide</button></div>
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