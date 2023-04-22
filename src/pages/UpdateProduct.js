import React from 'react'
import  { useState  } from 'react';
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
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
    { value: "strawberry", label: "Strawberry" },
  ];
const UpdateProduct = () => {
    const [name ,setName]=useState('');
    const [quantity , setQuantity]=useState('');
    const [state , setState] =useState('available');
    const [price ,setPrice] =useState('');
    const [value, setValue] = useState('');
    const [category ,setCategory] =useState(null);
    const navigate = useNavigate();
    const handleNameChange =(event) => {
        setName(event.target.value);
    };
    const handleQuantityChange =(event) => {
      setQuantity(event.target.value);
  };
  const handleStateChange =(event) => {
    setState(event.target.value);
};
const handlePriceChange =(event) => {
  setPrice(event.target.value);
};
const handleCategoryChange =(event) => {
  setCategory(event.target.value);
};
const handleClearForm = () => {
  setName('');
  setQuantity('');
  setPrice('');
  setState('');
  setCategory('');
};
    const handleSubmit =(event) => {
        event.preventDefault();
        console.log(data);
        //     axios.post('/api/categories', data)
        //     .then((response) => {
      //       console.log(response);
      //navigate('/Product');
      //.catch((error) => {
        //       console.error(error);
        //       // handle error
        //      
        //     });
        // };
    }

    const data={
        name: name,
        quantity:quantity,
        state:state,
        price:price,
        category:category
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
      <Grid item xs={12} lg={12} sx={{ textAlign: 'left' }}>
        <BaseCard title="Add Product">
        <form onSubmit={handleSubmit}>
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
            <Autocomplete
      id="category"
      options={options}
      value={category}
      onChange={(event, newValue) => {
        setCategory(newValue);
      }}
      inputValue={category}
      onInputChange={(event, newInputValue) => {
        setCategory(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Select a Category" variant="outlined" />
      )}
      sx={{ width: '60%' }}
    />
    <TextField
              id="price"
              label="Product Price "
              variant="outlined"
              required
              value={price}
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
              value={quantity}
              type='number'
              
              onChange={handleQuantityChange}
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

export default UpdateProduct