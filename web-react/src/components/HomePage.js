import React from 'react'
// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'

import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'
import moment from 'moment'

const GET_RECENT_REVIEWS_QUERY = gql`
  {
    reviews(options: { limit: 10, sort: { date: DESC } }) {
      user {
        name
      }
      business {
        name
      }
      date
      text
      stars
    }
  }
`
const GET_PROJECT_QUERY = gql`
{
    project {
        name
    }
}
`

const GET_ALL_QUERY = gql`
    {
        user {
            name
            email
            phone
        }
        project {
            projectID
            name
            status
            dataEmbargoStatus
        }
        sample{
            sampleID
            name
            gender
            age
            rawSequencingData
            processedDataOnHG19
            processedDataOnHG38
        }
        experiment {
            experimentID
            name
            componentPrep
            medipWashes
            pcr
            sequencing
        }
        qualityControl {
            qcid
            alignmentMetrics
            libraryComplexity
            signalEnrichment
        }
        clinicalInfo {
            clinicalInfoID
            tumourType
            tumourSubtype
            tumourStage
            treatment
        }
        tumourType {
            oncotreeCode
        }
    }
`

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_PROJECT_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>List of Users</Title>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            {/* <TableCell>Date</TableCell> */}
            {/* <TableCell>Business Name</TableCell> */}
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Project Text</Table.HeaderCell>
            {/* <TableCell>Review Text</TableCell> */}
            {/* <TableCell align="right">Review Stars</TableCell> */}
          </Table.Row>
        </Table.Header>




        <Table.Body>
          {data.reviews.map((row) => (
            <Table.Row key={row.id}>
              {/* <TableCell>{moment(row.date).format('MMMM Do YYYY')}</TableCell> */}
              {/* <TableCell>{row.business.name}</TableCell> */}
              <Table.Cell>{row.user.name}</Table.Cell>
              {/* <Table.Cell>{row.project.name}</Table.Cell> */}
              {/* <TableCell>{row.text}</TableCell> */}
              {/* <TableCell align="right">{row.stars}</TableCell> */}
            </Table.Row>
          ))}
        </Table.Body>


        
      </Table>
    </React.Fragment>
  )
}
