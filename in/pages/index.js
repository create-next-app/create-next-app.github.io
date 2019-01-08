/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Head from '../components/head';
import Nav from '../components/nav';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
  },
  row: {
    marginTop: 60
  },
  papper: {
    paddingLeft: 20,
    paddingTop: 2,
    paddingBottom: 5
  },
  description: {
    marginTop: 25
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Head title="Create Next App CLI" />
        <Nav />
        <div className={classes.root}>
          <div>
            <Typography variant="h3" gutterBottom>
              Create Next App
            </Typography>
            <Typography variant="body1" gutterBottom>
              Create Next.js App building tools
            </Typography>
          </div>
          <Grid container spacing={24} justify='center' className={classes.row}>
          </Grid>
        </div>
        <style jsx>{`
          .card p {
            text-decoration: none !important;
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
          a {
            color: #067df7;
            text-decoration: none
          }
        `}</style>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
