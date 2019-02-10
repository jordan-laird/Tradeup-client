import React from 'react'
import { Table } from 'semantic-ui-react'

export class ActivePortfolioTableHeader extends React.Component{
    render() {
        return(
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                    <Table.HeaderCell>Purchased Price</Table.HeaderCell>
                    <Table.HeaderCell>Current</Table.HeaderCell>
                    <Table.HeaderCell>Gain/Loss</Table.HeaderCell>
                    <Table.HeaderCell>Sell</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        )
    }
}