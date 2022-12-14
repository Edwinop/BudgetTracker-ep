import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function createData(name, progress, total) {
    return { name, progress, total};
  }
  
  const rows = [
    createData('Groceries', '80%', '$240 / $400'),
    createData('Games', '80%', '$0 / $200'),
    createData('Entertainment', '80%', '$0 / $500'),
    createData('Books', '80%', '$0 / $300'),
  ];

const BudgetHistory = () => {

    return (
        <>
            <Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Budget History
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <caption>Budget Table</caption>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Budget</TableCell>
                                <TableCell align="center">Progress</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.progress}</TableCell>
                                    <TableCell align="right">{row.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default BudgetHistory