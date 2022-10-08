import React from 'react';
import "./Table.css";
import { Grid } from '@mui/material';


const Table = ({data}) => {
   
  console.log(data);
    
   return (
      <Grid container>
         <Grid item xs={6} md={8} style={{textAlign:"center",marginTop:'25px'}}>
            
            <div>
               <center>
               <table>
                  <tbody>
                     <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company Name</th>                       
                        <th>Zip Code</th>
                     </tr>
                     {data.map((item)=> (
                        <tr key = {item.id}>
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.email}</td>
                           <td>{item.company.name}</td>
                           <td>{item.address.zipcode}</td>
                        </tr>
                        
                         ))};
                  </tbody>
               </table> 
               </center>         
            </div>
         </Grid>
      </Grid>
   );
};

export default Table;