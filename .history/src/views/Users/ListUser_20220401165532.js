import React from 'react';
import axios from 'axios';

class ListUser extends React.Component {
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=1')
        // .then(res => {
        //     console.log(res)
        // })
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data
        })
    }

    render() {
        return (
            <div>fgh</div>
        )
    }
}

export default ListUser;