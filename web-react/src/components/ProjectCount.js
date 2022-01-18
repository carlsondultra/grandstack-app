import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'

import { Header } from 'semantic-ui-react'


const GET_COUNT_QUERY = gql`
  {
    projectCount
  }
`

export default function Deposits() {
  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Header>Total Projects</Header>
        {loading ? 'Loading...' : data.projectCount + ' projects found'}
    </React.Fragment>
  )
}
