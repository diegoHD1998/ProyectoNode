import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2';
import axios from 'axios';



export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
      axios
      .post("http://localhost:5000/api/guardar",data)
      .then(
        (response)=>{
            console.log(response.data)

            Swal.fire({
                icon: 'success',
                title: 'Libro Registrado',
                text: 'El libro a sido registrado con exito'
              })
        }
      )
      .catch((error)=>{
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
                id="TituloLibro"
                label="TituloLibro"
                name="TituloLibro"
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
                id="IdLibro"
                label="IdLibro"
                name="IdLibro"
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
                id="Autor"
                label="Autor"
                name="Autor"
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
                id="Idioma"
                label="Idioma"
                name="Idioma"
                type="text"
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

        </Container>
    </div>


    
  );
}