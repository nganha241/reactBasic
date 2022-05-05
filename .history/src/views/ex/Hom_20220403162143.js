import React from "react";
import {withRouter} from "react-router";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    render() {
        return (
            <div>Home Page</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));