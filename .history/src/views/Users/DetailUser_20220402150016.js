import React from 'react';
import {withRouter} from "react";
import axios from 'axios';

class DetailUser extends React.Component {
    componentDidMount() {
        if(this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
        }
        
    }

    reder() {
        return (
            <div>Hello user with id: {this.props.match.params.id}</div>
        )
    }
}

export default withRouter(DetailUser);