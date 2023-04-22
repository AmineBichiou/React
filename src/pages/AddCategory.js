import React,{useState,useEffect} from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FullLayout from "../components/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../theme/theme';
import {
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
  } from "@mui/material";
  import BaseCard from '../components/baseCard/BaseCard';
const AddCategory = () => {
    const [name ,setName]=useState('');
    const [description , setDescription]=useState('');
    const navigate = useNavigate('/Categories');
    const submitCategorie = () => {
      Axios.post('http://localhost:3001/api/insertCategorie', data)
      .then((response) => {
        console.log(response);
          navigate('/Categories');
      })
      .catch((error) => {
        console.error(error);
        alert('Error adding category')
      });
    };
    
    
    const handleNameChange =(event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange =( event) =>{
        setDescription(event.target.value);
    };

    /*const handleSubmit =(event) => {
        event.preventDefault();
        console.log(data);
    }*/
    const handleClearForm = () => {
        setName('');
        setDescription('');
      };

    const data={
        name: name,
        description : description,
    };

//     axios.post('/api/categories', data)
//     .then((response) => {
//       console.log(response);
//       // handle success
//        navigate('/Categories');
//     })
//     .catch((error) => {
//       console.error(error);
//       // handle error
//      
//     });
// };

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add Categorie">
        <form onSubmit={submitCategorie}>
          <Stack spacing={3} >
          <TextField
              id="name"
              label="Category Name "
              variant="outlined"
              required
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
              
            />
          </Stack>
          <br />
          <Button type='submit' variant="contained" mt={2}>
            Submit
          </Button>
          <Button variant="outlined" sx={{ ml: '10px' }} onClick={handleClearForm}>
  Clear Form
</Button>
</form>
        </BaseCard>
      </Grid>
      </Grid>
      </FullLayout>
      </ThemeProvider>
  )
}

export default AddCategory