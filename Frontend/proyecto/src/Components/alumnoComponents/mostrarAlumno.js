import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import MaterialDatatable from "material-datatable";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

export default function App() {
  
  const [item, setItem] = useState([]);

  const columns = [
    {
     name: "Nombre",
     field: "Nombre",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Rut",
     field: "Rut",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];


  useEffect(() => {
    cargar();
  }, []);

  const cargar = async() =>{
    const { data } = await axios.get("http://localhost:5000/api/mostrar-A");

    //const { data } = await axios.get("/api/zona/listar");
    console.log(data);
    setItem(data.alumno);
    return null;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    tabla: {
      margin:'auto',
      
      
      
    },
    
    
  }));
  const classes = useStyles();
  return (
    <div>
      <Container>
          <Grid  className={classes.tabla} item xs={12}>
        <MaterialDatatable
          title={"Alumnos"}
          data={item}
          columns={columns}
          options={{
            selectableRows: false,
            print: false,
            onlyOneRowCanBeSelected: false,
            textLabels: {
              body: {
                noMatch: "Lo sentimos, no se encuentran registros",
                toolTip: "Sort",
              },
              pagination: {
                next: "Siguiente",
                previous: "Página Anterior",
                rowsPerPage: "Filas por página:",
                displayRows: "de",
              },
            },
            download: false,
            pagination: true,
            rowsPerPage: 3,
            usePaperPlaceholder: true,
            rowsPerPageOptions: [2, 10, 25],
            sortColumnDirection: "desc",
          }}
        />
        </Grid>
      </Container>
    </div>
  );
}