import React from 'react'
import  AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import  Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const TopNav = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    History
                </Typography>
                <Box>
                    <Typography variant="caption" component="div" sx={{ flexGrow: 1, color: '#848484' }}>
                        Budget Total
                    </Typography>
                    <Typography>
                        $240 / $1,400
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopNav