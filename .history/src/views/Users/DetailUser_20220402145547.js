import React from 'react';
import {withRouter} from "react";

class DetailUser extends React.Component {
    componentDidMount() {
        if(this.props.match && this.props.match.params)
        let id = this.props.match.params.id
    }

    reder() {
        return (

        )
    }
}

export default withRouter(DetailUser);