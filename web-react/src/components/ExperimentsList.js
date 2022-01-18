import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'

import { Button, Checkbox, Container, Header, Icon, Input, Table } from 'semantic-ui-react'
import SamplesList from './SamplesList'

const GET_COUNT_QUERY = gql`
  {
    experiments{
        name
        componentPrep
        medipWashes
        pcr 
        sequencing
    }
    samples{
        name
        gender
        age
    }
  }
`

export default function Deposits() {

    const[checked, setChecked] = useState(false) // useState for showing the samples portion on the front-end


  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Header> Experiments 
      {/* <Input icon='search' placeholder='Search...' size="mini"/> */}
        <Button icon='download' floated='right' content='Download' />
      </Header>


    {/* <div>
        <Button>Toggle it</Button>
        <Checkbox
            label='Show samples'
        />
    </div> */}

    <Checkbox label='Show samples' onChange={() => setChecked(!checked)} checked={checked}/>
    {checked ? <SamplesList /> : (<div></div>)}
    
    {!checked ? 
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Component Prep</Table.HeaderCell>
            <Table.HeaderCell>Medip Washes</Table.HeaderCell>
            <Table.HeaderCell>PCR</Table.HeaderCell>
            <Table.HeaderCell>Sequencing</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {loading ? 'Loading...' :
        <Table.Body>
        {data.experiments.map((row) => (
            <Table.Row key={row.id}>
              {/* <TableCell>{moment(row.date).format('MMMM Do YYYY')}</TableCell> */}
              {/* <TableCell>{row.business.name}</TableCell> */}
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.componentPrep}</Table.Cell>
              <Table.Cell>{row.medipWashes}</Table.Cell>
              <Table.Cell>{row.pcr}</Table.Cell>
              <Table.Cell>{row.sequencing}</Table.Cell>
              {/* <TableCell>{row.text}</TableCell> */}
              {/* <TableCell align="right">{row.stars}</TableCell> */}
            </Table.Row>
          ))}
        </Table.Body>
}
        
      </Table>
      :
      (<div></div>)}
    </React.Fragment>
  )
}
