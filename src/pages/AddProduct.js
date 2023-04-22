import React,{useState,useEffect} from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import axios from 'axios';
import { Autocomplete } from '@mui/material';
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
  /*const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
    { value: "strawberry", label: "Strawberry" },
  ];*/
  
  
 
const AddProduct = () => {
  const [Category, setCategories] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/api/getCategorie').then((response) => {
      setCategories(response.data);
      console.log(response.data);
    });
  }, []);
  const options = Category.map((category) => ({
    id: category.id,
    name: category.name,
  }));
 
    const [name ,setName]=useState('');
    const [Qstock , setQstock]=useState('');
    const [state , setState] =useState('available');
    const [prix ,setPrix] =useState('');
    const [marque, setMarque] = useState('a');
    const [value, setValue] = useState('');
    const [category ,setCategory] =useState('');
    const navigate = useNavigate();


    const submitProduct = () => {
      Axios.post('http://localhost:3001/api/insertProduct', data)
      .then((response) => {
        response.preventDefault();
        console.log(response);
          navigate('/Product');
          
      })
      .catch((error) => {
        console.error(error);
      });
    };
    const handleNameChange =(event) => {
        setName(event.target.value);
    };
    const handleQuantityChange =(event) => {
      setQstock(event.target.value);
  };
  const handleStateChange =(event) => {
    setState(event.target.value);
};
const handlePriceChange =(event) => {
  setPrix(event.target.value);
};
const handleCategoryChange =(event) => {
  setCategory(event.target.value);
};
const handleClearForm = () => {
  setName('');
  setQstock('');
  setPrix('');
  setState('');
  setMarque('');
  setCategory('');
};
   

    const data={
        name: name,
        Qstock:Qstock,
        state:state,
        prix:prix,
        category:category,
        marque:marque,

    };
   

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12} sx={{ textAlign: 'left' }}>
        <BaseCard title="Add Product">
        <form onSubmit={submitProduct}>
          <Stack spacing={2}  >
          <TextField
              id="name"
              label="Product Name "
              variant="outlined"
              required
              value={name}
              onChange={handleNameChange}
              sx={{ width: '60%' }}  
            />
            
    <TextField
              id="price"
              label="Product Price "
              variant="outlined"
              required
              value={prix}
              type='number'
              InputProps={{
                inputProps: {
                  min: 0,
                  step: 0.01
                }
              }}
              onChange={handlePriceChange}
              sx={{ width: '60%' }}  
            />

              <TextField
              id="quantity"
              label="Stock quantity "
              variant="outlined"
              required
              value={Qstock}
              type='number'
              
              onChange={handleQuantityChange}
              sx={{ width: '60%' }}  
            />
            <Autocomplete
              options={options}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="Select a category" variant="outlined" />}
              onChange={(event, newValue) => {
              setCategory(newValue ? newValue.id : '');
            }}
              sx={{ width: '60%' }} 
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

export default AddProduct