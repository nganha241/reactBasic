import React from 'react';
import {withRouter} from "react";
import axios from 'axios';

class DetailUser extends React.Component {
    componentDidMount() {
        if(this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            lets res = await axios.get(``)
        }
        
    }

    reder() {
        return (

        )
    }
}

export default withRouter(DetailUser);