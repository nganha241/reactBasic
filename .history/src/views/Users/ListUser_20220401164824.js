import React from 'react';
import axios from 'axios';

class ListUser extends React.Component {
    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>fgh</div>
        )
    }
}

export default ListUser;