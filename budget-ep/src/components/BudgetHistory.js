import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
const BudgetHistory = () => {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Budget History
            </Typography>
            <AppBar position="static" sx={{ backgroundColor: 'white', color: '#848484' }}>
                <Toolbar>
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        Budget
                    </Typography >
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        Progress
                    </Typography >
                    <Box>
                        <Typography component="div" sx={{ flexGrow: 1 }}>
                            Total
                        </Typography>
                    </Box>
                </Toolbar>
                <Divider />
            </AppBar>
        </>
    )
}

export default BudgetHistory