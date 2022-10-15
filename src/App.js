
import './App.css';
import { Typography, Box } from '@mui/material';
import AppNavMenu from './components/navigation/AppNavMenu';
import { appWrapper } from './styles/styles'





function App() {
  return (
    <div className="App">
      <Box sx={appWrapper}>
        <AppNavMenu />

      </Box>


    </div >
  );
}

export default App;
