import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyRoutes from './routes';
import theme from "./theme";
import MyFooter from './components/MyFooter';
import MySwipeableDrawer from './components/MySwipeableDrawer';

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MyNavbar hanldeOpenModal={()=>setOpenModal(true)} />
        <MySwipeableDrawer openModal={openModal} setCloseModal={()=>setOpenModal(false)} />
        <MyRoutes />
        <MyFooter />
      </BrowserRouter>
    </ThemeProvider>
  )
}
