import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Table from './components/Table/Table';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

// <----customize theme---->
const theme = createTheme({
  typography: {
    fontFamily: "Comic Sans MS"
  },
});

function App() {
  const [findData, setFindData] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setData(data));
  }, []);

  const search = (data)=> {
    return data.filter((item) => item.name.toLowerCase().includes(findData));
  };

  return (
    <ThemeProvider theme = {theme}>
     
      <Box component="form"
       style={{marginLeft:"220px",marginTop:'30px'}}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch', },
          }}
          noValidate
          autoComplete="off">
            
         <TextField id="outlined-search" label="Search Name or Email" type="search"
        
         onKeyUp={(e) => setFindData(e.target.value)} />
      </Box>
      <Table data={search(data)}/>
    </ThemeProvider>
  );
}

export default App;
