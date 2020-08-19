import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2';
import axios from 'axios';



const Newuser = ({
  setModoregistro
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
      axios
      .post("http://localhost:5000/api/guardar-U",data)
      .then(
        (response)=>{
            console.log(response.data)

            Swal.fire({
                icon: 'success',
                title: 'Usuario Registrado',
                text: 'El usuario a sido registrado con exito'
              })   
        }
      )
      .catch((error)=>{

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.mensajeUser
        })

        console.log(error);
      });
  };
  console.log(errors);

  


  
  return (
    <div>
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Registrar Usuario
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nombre"
                label="Nombre"
                name="nombre"
                type="text"
                autoComplete="off"
                autoFocus
                inputRef={register}
                />

<TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="apellido"
                label="Apellido"
                name="apellido"
                type="text"
                autoComplete="off"
                autoFocus
                inputRef={register}
                />

                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="correo"
                label="Correo"
                name="correo"
                type="email"
                autoComplete="off"
                autoFocus
                inputRef={register}
                />

                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="clave"
                label="Clave"
                name="clave"
                type="password"
                autoComplete="off"
                autoFocus
                inputRef={register}
                />

                <Button 
                type="submit" 
                fullwidth
                variant="contained" 
                color="primary" 
                size="large">
                  Registrar
                </Button>

            </form>

            <br></br>
      <Button 
          onClick={() => setModoregistro(false)}
          variant="contained" 
          color="secondary"
          >
            Cerrar
          </Button>

        </Container>
    </div>


    
  );
}

export default Newuser;