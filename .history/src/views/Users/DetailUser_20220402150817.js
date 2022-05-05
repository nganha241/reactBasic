import React from 'react';
import {withRouter} from "react-router";
import axios from 'axios';

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if(this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
        
    }

    reder() {
        return (
            <>
                <div>ello user with id: {this.props.match.params.id}</div>
                <div>User's name: {}</div>
                <div>User's email: {}</div>
                <div>
                    <img src=""/>
                </div>
            </>

        )
    }
}

export default withRouter(DetailUser);