import React, {Component} from 'react'

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul id="navigation" className="govuk-header__navigation" aria-label="Top Level Navigation">

                    <li className="govuk-header__navigation-item">
                        <a id="dashboard-navigation-link" href="/new/1"
                           className="govuk-header__link">Dashboard</a>
                    </li>
                    <li className="govuk-header__navigation-item">
                        <a href="/profile/view" className="govuk-header__link">Profile</a>
                    </li>

                    <li className="govuk-header__navigation-item">
                        <a href="/" className="govuk-header__link">Sign
                            out</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav



