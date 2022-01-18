import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'

import { Header } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'



const GET_COUNT_QUERY = gql`
  {
    projects{
        name
        status
        dataEmbargoStatus
    }
    projectName
  }
`

export default function Deposits() {


  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Header>Projects</Header>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Data Embargo Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {loading ? 'Loading...' :
        <Table.Body>
        {data.projects.map((row) => (
            <Table.Row key={row.id}>
              {/* <TableCell>{moment(row.date).format('MMMM Do YYYY')}</TableCell> */}
              {/* <TableCell>{row.business.name}</TableCell> */}
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
              <Table.Cell>{row.dataEmbargoStatus}</Table.Cell>
              {/* <TableCell>{row.text}</TableCell> */}
              {/* <TableCell align="right">{row.stars}</TableCell> */}
            </Table.Row>
          ))}
        </Table.Body>
}      
      </Table>
    </React.Fragment>
  )
}
