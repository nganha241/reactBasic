import React from 'react';
import {withRouter} from "react-router";
import axios from 'axios';

class DetailUser extends React.Component {
    async componentDidMount() {
        if(this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            console.log(res);
        }
        
    }

    reder() {
        return (
            <div>Hello user with id: {this.props.match.params.id}</div>
        )
    }
}

export default withRouter(DetailUser);