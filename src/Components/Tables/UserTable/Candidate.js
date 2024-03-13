import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Candidate.css'
import { MdDelete, MdEdit, MdBlock } from "react-icons/md";

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { MdSearch } from "react-icons/md";
import InputAdornment from '@mui/material/InputAdornment';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, "enabled", 24, 4.0),
  createData('Ice cream sandwich', 237, "disabled", 37, 4.3),
  createData('Eclair', 262, "disabled", 24, 6.0),
  createData('Cupcake', 305, "enabled", 67, 4.3),
  createData('Gingerbread', 356, "disabled", 49, 3.9),
];

const makeStyles = (fat)=>{
    if (fat === 'enabled') {
        return {background: 'rgb(145 254 159 / 47%)',
        color: 'green'
    }    
    } else if (fat === 'disabled'){
        return {background: '#ffadad8f',
        color: 'red'
    }    
        
    }
}

export default function Candidate() {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = (event) => {
       setSearchTerm(event.target.value);
    };
   
    // Filter rows based on searchTerm
    // const filteredRows = rows.filter(row => row.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className='admin-user'>
        <h3>Candidates</h3>
        <div className="search-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ margin: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="search" size="small">
                 <MdSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">
                <span className='userstatus' style={makeStyles(row.fat)}>{row.fat}</span>
              </TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">
              <div className='action-icons'>
              <MdDelete />
              <MdEdit />
              <MdBlock />
              </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}