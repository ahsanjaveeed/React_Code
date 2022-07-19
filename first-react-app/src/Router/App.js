import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {AppBar, Toolbar,IconButton, Typography, Box } from '@mui/material'


export default function RouterApp() {
  return (
    <Router>

<AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
           
          </Box>
        </Toolbar>
      </AppBar>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/launch' element={<Launch />} />
        </Routes>
    </Router>
  )
}



const Home = () => {
  return (
    <div>Home</div>
  )
}

const Launch = () => {
    return (
      <div>Launch</div>
    )
  }




const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };