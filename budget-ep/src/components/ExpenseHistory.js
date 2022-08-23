import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import TablePagination from '@mui/material/TablePagination';
function createData(name, total) {
    return { name, total };
}

const rows = [
    createData('Carrots', '$4 / $300'),
    createData('Milk', '$5 / $300'),
    createData('Water', '$8 / $300'),
    createData('Meat', '$12 / $300'),
    createData('Snacks', '$4 / $300'),
    createData('Snacks', '$4 / $300'),
];

const ExpenseHistory = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Expenses History
                </Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mb: 2 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Expenses..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <TableContainer component={Paper} sx={{ mb: 2, height: 440 }}>
                    <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }} >
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={4} align="left">Budget</TableCell>
                                <TableCell align="right">Total $240 / 300
                                    <IconButton sx={{ ml: 1 }}>
                                        <PlaylistAddIcon style={{ cursor: 'pointer' }} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow key={row.name} sx={{ p: 0 }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell colSpan={4} align="right" >{row.total}
                                        <IconButton sx={{ ml: 1 }}>
                                            <ClearIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell align="left" colSpan={5} style={{ color: '#868282' }}>Groceries Table</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 50]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </>
    )
}

export default ExpenseHistory