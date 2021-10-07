import  React,{ useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
    
  const history = useHistory();

  useEffect(() => {
  
      
      return value === 0 ? history.push('/'):
      value === 1 ? history.push('/projects'): 
      value === 2 ? history.push('/contact'):
      null;
      
  }, [value, history])
  


  

  return (
    <Box sx={{ width: '100vw', bottom:0, position:'fixed', }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{backgroundColor:'#3c402f',  }}
        
      >

        <BottomNavigationAction sx={{color:'#f2eeeb',}}  label="Home" icon={<HomeIcon/>}    />
        <BottomNavigationAction sx={{color:'#f2eeeb',}}  label="Projects" icon={<WorkIcon/>}    />
        <BottomNavigationAction sx={{color:'#f2eeeb',}}  label="Contact Me" icon={<EmailIcon/>}/>
      </BottomNavigation>
    </Box>
  );
}
