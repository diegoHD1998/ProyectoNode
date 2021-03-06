import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Registro from './usuarioComponents/registrarUsuario';
import Collapse from '@material-ui/core/Collapse';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [modoregistro,setModoregistro] = useState(false);

  const registro = () =>{

    setModoregistro(true);
  }

  const { register, handleSubmit, errors } = useForm();
// Validar si el usuario existe
  const onSubmit = data => {
    axios
    .post("http://localhost:5000/api/validar-U",data)
    .then(
      
      (response)=>{
        console.log(response.data);

        if(response.status ===200){
          localStorage.setItem('TOKEN_APP_TALLER',response.data.token)
          window.location = '/home'
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Usuario No Validado',
            text: 'El correo o contraseña ingresada no corresponde'
          })
        }
       /*  Swal.fire({
          icon: 'success',
          title: 'Usuario Validado',
          text: 'El usuario fue validado con exito'
        }) */

        

        
      }
    )
    .catch((error)=>{
      console.log(error);

      Swal.fire({
        icon: 'error',
        title: 'Usuario No Validado',
        text: 'El correo o contraseña ingresada no corresponde'
      })
    });
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="correo"
            label="Email Address"
            name="correo"
            autoComplete="email"
            autoFocus
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="clave"
            label="Password"
            type="password"
            id="clave"
            autoComplete="current-password"
            inputRef={register}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordar"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
               Olvido su Contraseña?
              </Link>
            </Grid>
            <Grid item>
            <Link href="#" variant="body2" onClick={registro}>
                {"Nuevo usuario"}
              </Link>
            </Grid>
          </Grid>
        </form>

        <Collapse in={modoregistro}>
          <Registro    setModoregistro={setModoregistro} />
      </Collapse>

       
      </div>

      
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}