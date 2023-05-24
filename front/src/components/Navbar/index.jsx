import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import style from "./index.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import Add from '../../pages/Add';
import PersonIcon from '@mui/icons-material/Person';
import { getAllImmigrants } from '../../api/requests';

const index = () => {
  const [immigrants,setImmigrants]=useState([]);
  useEffect((data) => {
    getAllImmigrants().then(res => {
          setImmigrants(data)
    });
  });
  return (
    <>
    <header className={style.head}>
    <div style={{display:"flex",margin:"0 auto",width:"70%"}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <span>
We believe we helps people <br></br>
for happier lives
</span>
        </Grid>
        <Grid item xs={4}>
            <a href="#">
              <img src='https://preview.colorlib.com/theme/immigration/img/logo.png.webp' style={{maxWidth:"100%",height:"auto"}}/>
            </a>
        </Grid>
        <Grid item xs={4}>
            <a href="tel:+880 123 12 658 439" style={{color:"black",textDecoration:"none"}}>+880 123 12 658 439</a>
            <a href="tel:+880 123 12 658 439"><span className={style.span2}>  <LocalPhoneIcon/>
              </span></a>
        </Grid>
      </Grid>
    </Box>
    </div>
    <hr className={style.hr}></hr>
   <div style={{display:"flex",margin:"0 auto",width:"60%"}}>
      <nav style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"20%"}}>
        <ul>
          <Link to="/" element={<Home />} style={{marginLeft:"10px",color:"red"}}>Home</Link>
          <Link to="/add" element={<Add />}  style={{marginLeft:"10px",color:"black"}}>Add</Link>
          <li className={style.li}><a href='#' className={style.a}>Immigration</a></li>
          <li className={style.li}><a href='#' className={style.a}>Course</a></li>
          <li className={style.li}><a href='#' className={style.a}>Country</a></li>
          <li className={style.li}><a href='#' className={style.a}>Contact</a></li>
          <li className={style.li}><a href='#' className={style.a}>Blog</a></li>
          <li className={style.li}><a href='#' className={style.a}>Elements</a></li>
        </ul>
      </nav>
   </div>
    </header>
     <section className={style.section2}>
      <div style={{display:"flex",flexDirection:"row",position:"relative"}}>
            <div style={{display:"flex",flexDirection:"column",position:"relative"}}>
             <h6 style={{position:"absolute"}}>Proces  Vitha Without Hours</h6>
             <h1 style={{position:"absolute"}}>Immagrations & Visa Consultation<br></br></h1>
             <a href="#">Book Consultancy</a>
            </div>
           <img src="https://preview.colorlib.com/theme/immigration/img/header-img.png.webp" style={{position:"absolute",right:"0",top:"90px"}} />
      </div>
     </section>
     <section className={style.sec}>
          <h3 style={{fontSize:"38px",textAlign:"center",fontWeight:"bold"}}>Requirements to be Immigrants</h3>
          <p style={{color:"gray",textAlign:"center",marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br></br>ut labore et dolore magna aliqua.</p>
          {
            immigrants&&immigrants.map((immigrant)=>{
              return   immigrant.imageUrl
            })
          }
     </section>
     <section className={style.section3}>
      <h1 style={{fontSize:"38px",textAlign:"center",marginBottom:"20px"}}>Our Unique Features that can impress you</h1>
      <p style={{fontSize:"22px",textAlign:"center",marginBottom:"20px",color:'gray'}}>Who are in extremely love with eco friendly system.</p>
      <div style={{display:"flex",width:"80%",margin:"0 auto"}}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
        <Card>
      <CardContent>
         <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
          <div style={{display:"flex",flexDirection:'row'}}>
               <PersonIcon/>
               <h2 style={{marginLeft:"20px"}}>Expert Technicans</h2>
          </div>
          <h4 style={{color:"gray",marginTop:"20px"}}>Usage of the Internet is becoming more<br></br> common due to rapid advancement of<br></br> technology and power.</h4>
         </div>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12}  md={6} lg={4}>
        <Card>
      <CardContent>
         <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
          <div style={{display:"flex",flexDirection:'row'}}>
               <PersonIcon/>
               <h2 style={{marginLeft:"20px"}}>Expert Technicans</h2>
          </div>
          <h4 style={{color:"gray",marginTop:"20px"}}>Usage of the Internet is becoming more<br></br> common due to rapid advancement of<br></br> technology and power.</h4>
         </div>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <Card>
      <CardContent>
         <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
          <div style={{display:"flex",flexDirection:'row'}}>
               <PersonIcon/>
               <h2 style={{marginLeft:"20px"}}>Expert Technicans</h2>
          </div>
          <h4 style={{color:"gray",marginTop:"20px"}}>Usage of the Internet is becoming more<br></br> common due to rapid advancement of<br></br> technology and power.</h4>
         </div>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <Card>
      <CardContent>
         <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
          <div style={{display:"flex",flexDirection:'row'}}>
               <PersonIcon/>
               <h2 style={{marginLeft:"20px"}}>Expert Technicans</h2>
          </div>
          <h4 style={{color:"gray",marginTop:"20px"}}>Usage of the Internet is becoming more<br></br> common due to rapid advancement of<br></br> technology and power.</h4>
         </div>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <Card>
      <CardContent>
         <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
          <div style={{display:"flex",flexDirection:'row'}}>
               <PersonIcon/>
               <h2 style={{marginLeft:"20px"}}>Expert Technicans</h2>
          </div>
          <h4 style={{color:"gray",marginTop:"20px"}}>Usage of the Internet is becoming more<br></br> common due to rapid advancement of<br></br> technology and power.</h4>
         </div>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <Card>
      <CardContent>
         <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
          <div style={{display:"flex",flexDirection:'row'}}>
               <PersonIcon/>
               <h2 style={{marginLeft:"20px"}}>Expert Technicans</h2>
          </div>
          <h4 style={{color:"gray",marginTop:"20px"}}>Usage of the Internet is becoming more<br></br> common due to rapid advancement of<br></br> technology and power.</h4>
         </div>
      </CardContent>
    </Card>
        </Grid>
      </Grid>
    </Box>
      </div>
    </section>
    <section  className={style.section4}>
        <h2 className={style.h22}>Latest News from our Blog</h2>
        <p className={style.p2}>Who are in extremely love with eco friendly system.</p>



        <div  style={{display:"flex",width:"80%",margin:"0 auto"}}>
           
        <Grid container spacing={2}>
  <Grid item xs={12} lg={6}>
  <Card>
      <CardContent>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src="https://preview.colorlib.com/theme/immigration/img/b1.jpg.webp" alt="sdd" style={{maxWidth:"100%",height:"auto"}} />
         </div>
         <ul style={{display:"flex",flexDirection:"row",marginTop:"20px",marginLeft:"90px"}}>
          <li className={style.lise}>
            <a href='#' className={style.as}>Travel</a>
          </li>
          <li className={style.lise}>
            <a href='#' className={style.as}>Travel</a>
          </li>
         </ul>
         <h5 style={{marginLeft:"80px",marginTop:"20px",fontSize:"800",color:"black",fontSize:"30px"}}>Portable latest Fashion young women</h5>
         <p style={{marginLeft:"80px",marginTop:"20px",color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br></br>tempor incididunt ut labore et dolore.</p>
         <p style={{marginLeft:"80px",marginTop:"20px"}}>31st January, 2018</p>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} lg={6}>
  <Card>
      <CardContent>
         <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src="https://preview.colorlib.com/theme/immigration/img/b1.jpg.webp" alt="sdd" style={{maxWidth:"100%",height:"auto"}} />
         </div>
         <ul style={{display:"flex",flexDirection:"row",marginTop:"20px",marginLeft:"90px"}}>
          <li className={style.lise}>
            <a href='#' className={style.as}>Travel</a>
          </li>
          <li className={style.lise}>
            <a href='#' className={style.as}>Travel</a>
          </li>
         </ul>
         <h5 style={{marginLeft:"80px",marginTop:"20px",fontSize:"800",color:"black",fontSize:"30px"}}>Portable latest Fashion young women</h5>
         <p style={{marginLeft:"80px",marginTop:"20px",color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br></br>tempor incididunt ut labore et dolore.</p>
         <p style={{marginLeft:"80px",marginTop:"20px"}}>31st January, 2018</p>
      </CardContent>
    </Card>
  </Grid>
</Grid>
        </div>

    </section>
    </>
  )
}

export default index