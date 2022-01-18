import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery, gql } from '@apollo/client'

import { Header } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  navLink: {
    textDecoration: 'none',
  },
})

const GET_COUNT_QUERY = gql`
  {
    projects{
        name
    }
    projectName
  }
`

export default function Deposits() {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Header>List of Project Names</Header>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            {/* <TableCell>Name</TableCell> */}
            {/* <TableCell>Business Name</TableCell> */}
            <Table.HeaderCell>Name</Table.HeaderCell>
            {/* <TableCell>Review Text</TableCell> */}
            {/* <TableCell align="right">Review Stars</TableCell> */}
          </Table.Row>
        </Table.Header>

        {loading ? 'Loading...' :
        <Table.Body>
        {data.projects.map((row) => (
            <Table.Row key={row.id}>
              {/* <TableCell>{moment(row.date).format('MMMM Do YYYY')}</TableCell> */}
              {/* <TableCell>{row.business.name}</TableCell> */}
              <Table.Cell>{row.name}</Table.Cell>
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
