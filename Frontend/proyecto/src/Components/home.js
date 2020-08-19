import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    
  },
  link2: {
    margin: 'auto',
    
  },

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },



  
  root: {
    minWidth: 275,
    margin: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
 
}));

export default function Pricing() {
  const classes = useStyles();
  
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Support
            </Link>
          </nav>
          {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Biblioteca UBB
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Texto de prueba para el desarrollo del programa
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {/* Desde aqui---------------------------------------------------------------------------------------------------------------------------- */}
          <Card className={classes.root}>
            <CardContent >
              <Typography variant="h4" component="h2">
              ------Libros------
              </Typography>

              
            </CardContent>
            <CardActions>
              <Link className={classes.link2} href={"/registrolibro"}>
                <Button variant="contained" color="primary">
                  Registrar Libro
                </Button>
              </Link>
              
              <br />
            </CardActions>

            <CardActions>
            <Link className={classes.link2} href={"/gestionar"}>
                <Button variant="contained" color="primary">
                  Mostrar Libros
                </Button>
              </Link>
            </CardActions>
            
          </Card>
          {/* Desde aqui----------------------------------------------------------------------------------------------------------------------- */}
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h4" component="h2">
                ---Prestamos---
              </Typography>
            </CardContent>
            <CardActions>
              <Link className={classes.link2} href={"/home/check"}>
                <Button  variant="contained" color="primary">
                  Gestionar Prestamos
                </Button>
              </Link>
              <br /><br /><br /><br /><br />
              
            </CardActions>
          </Card>
          {/* Desde aqui----------------------------------------------------------------------------------------------------------------------- */}
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h4" component="h2">
                -----Alumnos-----
              </Typography>

            </CardContent>
            <CardActions>
              <Link className={classes.link2} href={"/registroalumno"}>
                <Button variant="contained" color="primary">
                  Registrar Alumnos
                </Button>
              </Link>
              
            </CardActions>

            <CardActions>
            <Link className={classes.link2} href={"/lista-A"}>
                <Button variant="contained" color="primary">
                  .Mostrar Alumnos.
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </React.Fragment>
  );
}