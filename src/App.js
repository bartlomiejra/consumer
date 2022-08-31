import Header from './components/Header';
import GlobalStyles from './components/styles/Global';
import Footer from './components/Footer';
import React from 'react';
import darkScrollbar from '@mui/material/darkScrollbar';
import ScrollBar from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import 'firebase/firestore';
import 'firebase/auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { MUItheme } from './assets/styles/MUItheme';
import { theme } from './assets/styles/theme';
<GlobalStyles
  styles={{
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  }}
/>;

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollBar styles={{ ...darkScrollbar() }} />
        <CssBaseline enableColorScheme />

        <ThemeProvider theme={MUItheme}>
          {/* <Box
          m={0}
          sx={{
            color: 'white',
          }}
        > */}
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyles />
              <Header />
              <Footer />
            </>
            {/* </Box> */}
          </ThemeProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
//ssh test

export default App;
