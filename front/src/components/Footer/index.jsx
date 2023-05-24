import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import style from "./index.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
const index = () => {
  return (
  <>
  <footer style={{padding:"30px 0"}}>
    <div style={{display:"flex",margin:"0 auto" ,width:"60%",justifyContent:"center",alignItems:"center"}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
       <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
        </Grid>
        
        
        <Grid item xs={6}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
           <a href="#" className={style.a}>
            <FacebookIcon/>
           </a>
        </Grid>
        <Grid item xs={3}>
        <a href="#" className={style.a}>
        <FacebookIcon/>
        </a>
        </Grid>
        <Grid item xs={3}>
        <a href="#" className={style.a}>
        <FacebookIcon/></a>  
        </Grid>
        <Grid item xs={3}>
        <a href="#" className={style.a}>
        <FacebookIcon/>
        </a>
        </Grid>
      </Grid>
    </Box>


        </Grid>
      </Grid>
    </Box>
    </div>
  </footer>
  </>
  )
}

export default index