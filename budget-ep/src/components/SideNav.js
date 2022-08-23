import React,{useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const SideNav = () => {
    const drawerWidth = 240;
    const [value, setValue] = useState(0);
  return (
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          
          [`& .MuiDrawer-paper`]: { overflowX:'hidden', width: drawerWidth, backgroundColor: '#666F85', color: 'white', boxSizing: 'border-box' },
        }}
      >
        <AppBar position="left" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor: '#666F85',width: `calc(${drawerWidth}px)`, mr: `${drawerWidth}px`, alignItems: 'center'}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Budget Tracker
          </Typography>
        </Toolbar>
      </AppBar>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Groceries', 'Games', 'Entertainment', 'Books'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                  <EditIcon className='edit-budget'/>
                </ListItemButton>             
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ width: drawerWidth,position: 'fixed', bottom: 0, left: 0,[`& .MuiBottomNavigation-root`]: { backgroundColor: '#666F85', color: 'white' },[`& .MuiButtonBase-root`]: { color: 'white' } }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Delete" icon={<DeleteForeverIcon />} />
        <BottomNavigationAction label="Add" icon={<AddCircleIcon />} />
      </BottomNavigation>
    </Box>
      </Drawer>
  )
}

export default SideNav