import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
            <a classNames="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
</div>
        )
    }
}

export default Nav;