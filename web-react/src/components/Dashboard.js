import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import RatingsChart from './RatingsChart'
import UserCount from './UserCount'
import RecentReviews from './RecentReviews'
import HomePage from './HomePage'
import ProjectNames from './ProjectNames'
import ProjectCount from './ProjectCount'

import { Input } from 'semantic-ui-react'

export default function Dashboard() {
  const theme = useTheme()

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <React.Fragment>
      <Grid container spacing={4}>


        {/* Ratings Chart */}
        {/* <Grid item xs={12} md={8} lg={7}>
          <Paper className={fixedHeightPaper}>
            <RatingsChart />
          </Paper>
        </Grid> */}

        {/* User Count */}
        {/* <Grid item xs={12} md={4} lg={5}>
          <Paper className={fixedHeightPaper}>
            <UserCount />
          </Paper>
        </Grid> */}

        {/* Recent Reviews */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RecentReviews />
          </Paper>
        </Grid> */}


        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <HomePage />
          </Paper>
        </Grid> */}

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ProjectCount />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ProjectNames />
          </Paper>
        </Grid>

        {/* <Input icon='search' placeholder='Search...' size="mini"/> */}

        
      </Grid>
    </React.Fragment>
  )
}
