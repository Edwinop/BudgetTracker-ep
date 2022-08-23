import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import BudgetHistory from './components/BudgetHistory';
import ExpenseHistory from './components/ExpenseHistory';
const App = () => {

  return (

    <Box component="main" sx={{ flexGrow: 1, }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideNav />
        <Box sx={{ flexGrow: 1 }}>
          <TopNav />
          <Box sx={{ flexGrow: 1, px:12, pt: 3,maxHeight: 'md' }}>
            <BudgetHistory />
          </Box>
          <Box sx={{ flexGrow: 1, px:12, pt: 3,maxHeight: 'md' }}>
            <ExpenseHistory />
          </Box>          
        </Box>
      </Box>
    </Box>
  )
}

export default App