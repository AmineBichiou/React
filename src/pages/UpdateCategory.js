import React,{useState,useEffect} from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FullLayout from "../components/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../theme/theme';
import axios from 'axios';
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
const UpdateCategory = () => {
    const [name ,setName]=useState('');
    const [description , setDescription]=useState('');
    const[newName, setNewName] = useState('');
    const[newDescription, setNewDescription] = useState('');
    const navigate = useNavigate();
    const updateCategorie = (name,description) => {
      Axios.put('http://localhost:3001/api/updateCategorie', {
        name: name,
        description: description,
      }).then((response) => {
        console.log(response);
          navigate('/Categories');
      })
      .catch((error) => {
        console.error(error);
        alert('Error updating category')
      });
      setNewName('');
      setNewDescription('');

      
    }
    const handleNameChange =(event) => {
        setName(event.target.value);
    };
    const handleNewNameChange =(event) => {
        setNewName(event.target.value);
    };
    const handleNewDescriptionChange =(event) => {
        setNewDescription(event.target.value);
    };

    const handleDescriptionChange =( event) =>{
        setDescription(event.target.value);
    };

    const handleSubmit =(event) => {
        event.preventDefault();
    }

    const data={
        name: name,
        description : description,
    };


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
    <Grid container spacing={0}>
        
      <Grid item xs={12} lg={12}>
        <BaseCard title="Update Category">
          <Stack spacing={3}>
          <TextField
              id="name"
              label="Category Name "
              variant="outlined"
              required
              value={name}
              //defaultValue={}
              onChange={handleNameChange}
            />
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              //defaultValue={}
              value={description}
              onChange={handleDescriptionChange}
              
            />
          </Stack>
          <br />
          <Button type='submit' variant="contained" mt={2}>
            Submit
          </Button>
        </BaseCard>
      </Grid>
      </Grid>
      </FullLayout>
      </ThemeProvider>
  )
}

export default UpdateCategory