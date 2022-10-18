
import './App.css';
import { appWrapper } from './styles/styles'
import AppNavMenu from './components/navigation/AppNavMenu';

import {Box} from "@mui/material"






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
