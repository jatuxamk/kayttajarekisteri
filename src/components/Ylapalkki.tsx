import React from 'react'
import { AppBar, Container, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Ylapalkki : React.FC = () : React.ReactElement => {
  return (
    <>
    <CssBaseline />
    <AppBar position='static'>
      <Container>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Käyttäjät</Typography>
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default Ylapalkki;