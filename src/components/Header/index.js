import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import HeaderTop from "./Top";


class Header extends Component {
    render() {
        return (
            <Fragment>
                <HeaderTop/>
            </Fragment>
        )
    }
}

export default withRouter(Header)