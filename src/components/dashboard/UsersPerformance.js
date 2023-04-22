import React,{useState,useEffect} from "react";
import Axios from 'axios';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';
import IconButton from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Grid, Pagination, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {
 
  Button,
 Fab,
  ButtonGroup,
} from "@mui/material";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Avatar,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";

/* const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch('/api/sales')
      .then(res => res.json())
      .then(data => setSales(data))
      .catch(error => console.error(error));
  }, []);*/
/*const products = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    budget: "12.8",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    budget: "2.4",
  },
];*/

const UsersPerformance = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/api/getUser').then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);
  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/api/deleteUser/${id}`);
    console.log(id);
  }
  const handleDelete = (id) => {
    deleteUser(id);
    window.location.reload();
  };
  
  const navigate = useNavigate();
  const handleButtonClick =()=>{
    navigate('/AddUser');
  };
  return (
    <BaseCard title="Users Perfomance" >
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "50px" , marginTop:"-50px"}}>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>Add User</Button>
      </div>
      <Table
        aria-label="simple table"
        sx={{
          mt: -5,
          whiteSpace: "nowrap",
         
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell >
              <Typography color="textSecondary" variant="h6">
                Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Phone
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Email
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
              Join Time
              </Typography>
            </TableCell>
            <TableCell >
              <Typography color="textSecondary" variant="h6">
                Update
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Delete
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => (
            <TableRow key={user.login}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {user.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                    <Avatar alt={user.login} src="src/assets/users/user.jpg"/>
                      {user.login}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {user.post}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.tel}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  
                  label={user.email}
                ></Chip>
              </TableCell>
              <TableCell>
              <Typography variant="h6">{user.join_time}</Typography>
              </TableCell>
              <TableCell  >
              <Link to={`updateUser/${user.id}`}><ModeEditIcon/></Link>
              </TableCell>
              <TableCell align="right" >
              <button onClick={() => {deleteUser(user.id)}} /*onClick={handleDelete(user.id)}*/ style={{ border: 'none', background: 'none' }} ><DeleteOutlineIcon/></button>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{position:'fixed' ,top:'0px' }}>
      <Stack spacing={2}>
            <Pagination count={10} />
            
          </Stack>
          </div>
    </BaseCard>
  );

};

export default UsersPerformance;
