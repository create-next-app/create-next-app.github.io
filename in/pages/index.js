/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

import Head from '../components/head';
import Nav from '../components/nav';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 15,
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#dc3545',
    color: '#fff',
    marginTop: 20
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Head
          title="Create Next App"
          description="Command line interface (CLI) for easily creating Next.js apps in one command."
          keywords="next, nextjs, react, reactjs, create-next-app, create-next-app-cli, create-react-app, server-side-rendering, zero-configuration, build-tools, boilerplate"
        />
        <Nav />
        <div className={classes.root}>
          <div>
            <Typography variant="h2" gutterBottom>
              Create Next App
            </Typography>
            <Typography variant="body1" gutterBottom>
              Create Next.js App building tools
            </Typography>
            <Button href={'https://github.com/themodernjavascript/create-next-app-cli'} variant="contained" color="secondary" className={classes.button}>
              <SvgIcon style={{color: 'white'}}>
                <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
              </SvgIcon>
              &nbsp;
              Github
            </Button>
          </div>
        </div>
        <div style={{ display: 'flex', margin: 40 }}>
          <Grid container spacing={24} direction="column">
            <Grid container item spacing={0} justify="center">
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="h4" gutterBottom>
                  Installation
                </Typography>
                <hr/>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center" >
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="body1" gutterBottom>
                  create-next-app-cli is available on npm:
                </Typography>
                <pre>
                  <code className="language-javascript">
                  {`npm install --global create-next-app-cli`}
                  </code>
                </pre>
                <Typography variant="body1" gutterBottom>
                  create-next-app-cli is available on yarn as well:
                </Typography>
                <pre>
                  <code className="language-javascript">
                  {`yarn add create-next-app-cli`}
                  </code>
                </pre>
                <Typography variant="body1" gutterBottom>
                  You don't need to install or setup Webpack or Babel. They come with Next.js, so you can just start coding after running <code>create-next-app</code>.
                </Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center">
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="h4" gutterBottom>
                  Creating an App
                </Typography>
                <hr/>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center" >
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="body1" gutterBottom>
                  Create a new Next.js app with `default` and `material` UI:
                </Typography>
                <pre>
                  <code className="language-javascript">
                  {`create-next-app my-app --template default`}
                  </code>
                </pre>
                <Typography variant="body1" gutterBottom>
                  It will create a directory called my-app inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:
                </Typography>
                <pre>
                  <code className="language-javascript">
{`.
├── README.md
├── components
│   ├── head.js
│   └── nav.js
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   └── index.js
├── static
│   └── favicon.ico
└── yarn.lock`}
                  </code>
                </pre>
                <Typography variant="body1" gutterBottom>
                  No configuration or complicated folder structures, just the files you need to build your app. Once the installation is done, you can open your project folder:
                </Typography>
                <pre>
                  <code className="language-javascript">
                  {`cd my-app`}
                  </code>
                </pre>
                <Typography variant="body1" gutterBottom>
                  Inside the newly created project, you can run some built-in commands:
                </Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center" >
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="h5" gutterBottom className="section">
                  <code>npm run dev</code> or <code>yarn dev</code>
                </Typography>
                <Typography variant="body1" gutterBottom className="section">
                  Runs the app in development mode.<br />
                  Open <code>http://localhost:3000</code> to view it in the browser.
                </Typography>
                <Typography variant="body1" gutterBottom className="section">
                  The page will automatically reload if you make changes to the code.<br/>
                  You will see the build errors and lint warnings in the console.
                </Typography>
                <Typography variant="body1" gutterBottom className="section">
                  Out of the box, we get:
                  <ul>
                    <li><Typography variant="body1" gutterBottom>Automatic transpilation and bundling (with webpack and babel)</Typography></li>
                    <li><Typography variant="body1" gutterBottom>Hot code reloading</Typography></li>
                    <li><Typography variant="body1" gutterBottom>Server rendering and indexing of <code>./pages</code></Typography></li>
                    <li><Typography variant="body1" gutterBottom>Static file serving. <code>./static/</code> is mapped to <code>/static/</code></Typography></li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center">
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="h5" gutterBottom className="section">
                  <code>npm run build</code> or <code>yarn build</code>
                </Typography>
                <Typography variant="body1" gutterBottom className="section">
                  Builds the app for production to the .next folder.<br/>
                  It correctly bundles React in production mode and optimizes the build for the best performance.
                </Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center">
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="h5" gutterBottom className="section">
                  <code>npm run start</code> or <code>yarn start</code>
                </Typography>
                <Typography variant="body1" gutterBottom className="section">
                  Starts the application in production mode. The application should be compiled with <code>npm run build</code> first.
                </Typography>
                <Typography variant="body1" gutterBottom className="section">
                  Now you maybe ready to code and deploy your app!
                </Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center">
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="h4" gutterBottom>
                  Starting Next.js Examples
                </Typography>
                <hr/>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center">
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="body1" gutterBottom>
                  There are a bunch of examples in the <a href="https://github.com/zeit/next.js/tree/canary/examples" target="_blank">Next.js repository</a> (and growing) that you can use to bootstrap your app.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Run command below to use an example:
                </Typography>
                <pre>
                  <code className="language-javascript">
                    {`create-next-app example-app-name --example basic-csss`}
                  </code>
                </pre>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center">
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="h4" gutterBottom>
                  User Guide
                </Typography>
                <hr/>
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center">
              <Grid item lg={6} xl={6} xs={12}>
                <Typography variant="body1" gutterBottom>
                  You can find detailed instructions on using Next.js and many tips in <a href="https://nextjs.org/docs/" target="_blank">its documentation</a>.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <footer>
          <div>© 2019 Copyright</div>
        </footer>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
