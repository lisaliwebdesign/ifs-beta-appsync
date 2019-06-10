import React, { Component, Fragment } from 'react'
// import { Query } from 'react-apollo'
import { API, graphqlOperation } from 'aws-amplify'
import Search from './SearchForm'
import ListItem from './CompetitionItem'
import {PAGE_TITLE} from "../constants";
import { graphql, compose } from 'react-apollo'
// import {COMPETITION_QUERY} from "../../store/Competition";
import gql from 'graphql-tag';

import {listCompetitions} from "../../graphql/queries";
const listCompetitionsQuery = gql(listCompetitions)

class Competition extends Component {
    render() {
        return (
                            <Fragment>
                                <h1 className="govuk-heading-l">
                                    {PAGE_TITLE.COMPETITION}
                                </h1>
                                <div className="govuk-grid-row">
                                    <Search/>
                                    <div className="govuk-grid-column-two-thirds">
                                        <h2 className="govuk-heading-s govuk-!-margin-0">{this.props.Count} competitions</h2>
                                        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible govuk-!-margin-top-0"/>
                                        <ul className="govuk-list">
                                            {this.props.Competitions.map((item, index) => (
                                                <ListItem
                                                    key={index}
                                                    isLastItem= {true}
                                                    data={item}
                                                    index={index}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Fragment>

        )
    }
}

export default compose(
    graphql(listCompetitionsQuery, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: props => ({
            Competitions: props.data.listCompetitions ? props.data.listCompetitions.items : [],
            Count: props.data.listCompetitions ? props.data.listCompetitions.items.length : 0

        })
    })
)(Competition)
