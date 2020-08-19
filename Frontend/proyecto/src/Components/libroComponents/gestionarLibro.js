import React, { useState, useEffect } from "react";
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    marginTop: 30,
  }
});

export default function Libros() {

  const [item, setItem] = useState([]);
  
  useEffect(() => {
    cargar();
  }, []);

  const cargar = async() =>{
    const { data } = await axios.get("http://localhost:5000/api/mostrar");
    /* setItem es la funcion asignada para cambiar el valor de item */
    setItem(data.libro);
    return null;
  }

  const elim = (parameter => (event) => {
    axios
    .delete("http://localhost:5000/api/borrar/"+parameter)
    .then(
      response => {
        if(response.status === 200) {
          cargar();
          Swal.fire({
            icon: 'success',
            title: 'Exito...',
            text: response.mensaje,
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data.mensaje,
          })
        }
      }
    )
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.mensaje,
      })
    })
  });

  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Libros seleccionados
      </Typography>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" component="th">Codigo</TableCell>
            <TableCell align="left">Titulo</TableCell>
            <TableCell align="left">Autor</TableCell>
            <TableCell align="left">Idioma</TableCell>
            <TableCell align="left">Actualizar</TableCell>
            <TableCell align="left">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {item.map((sele, index) => (
            
            <TableRow>
              <TableCell align="left">{sele.IdLibro}</TableCell>
              <TableCell align="left">{sele.TituloLibro}</TableCell>
              <TableCell align="left">{sele.Autor}</TableCell>
              <TableCell align="left">{sele.Idioma}</TableCell>
              <TableCell align="left">
              <Link to={`/libro/${sele.IdLibro}`}>
              <Button variant="outlined" color="primari" >
                  Actualizar
                </Button>
              </Link>
              </TableCell>
              <TableCell align="left">
                <Button variant="outlined" color="secondary" onClick={elim(sele.IdLibro)} >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </Container>
    </React.Fragment>
    
  );
}