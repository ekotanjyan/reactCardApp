import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const options = ['Edit', 'Go to Organization', 'Delete Organization'];
const Item = props => {
    let item = props.data;

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return <Paper>
        <Grid item xs={12} sx={{ p: 2 }}>
            <Box
                sx={{
                    p: 1,
                    display: 'grid',
                    gridTemplateColumns: { md: '2fr 8fr 2fr' },
                    gap: 3,
                    borderBottom: "1px solid lightgray"
                }}
            >
                <Box>
                    <img src={`${item.icon_url}`}
                        srcSet={`${item.icon_url}`}
                        alt={item.name}
                        width="30px"
                    />
                </Box>
                <Box sx={{ fontWeight: "bold" }}>{item.name}
                </Box>
                <Box sx={{ textAlign: "right" }}>
                    <React.Fragment>

                        <Button ref={anchorRef}
                            sx={{ color: "gray", textAlign: "right", minWidth: 0 }}
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                        ><MoreVertIcon color='gray' /></Button>
                        <Popper
                            sx={{
                                zIndex: 1,
                            }}
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList id="split-button-menu" autoFocusItem>
                                                {options.map((option, index) => (
                                                    <MenuItem
                                                        key={option}
                                                        disabled={index === 3}
                                                        selected={index === selectedIndex}
                                                        onClick={(event) => handleMenuItemClick(event, index)}
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </React.Fragment>
                </Box>
            </Box>
        </Grid>
        <Box sx={{ marginLeft: "15px", fontWeight: "bold" }} >Licenses</Box>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold", border: "none" }}>Tracking</TableCell>
                        <TableCell sx={{ border: "none" }}></TableCell>
                        <TableCell align="right" sx={{ border: "none" }}>Protection</TableCell>
                        <TableCell sx={{ border: "none" }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" sx={{ border: "none" }}>
                            In use:
                        </TableCell>
                        <TableCell align="right" sx={{ border: "none" }}>{item.tracking.in_use}</TableCell>
                        <TableCell align="right" sx={{ border: "none" }}>In use:</TableCell>
                        <TableCell align="right" sx={{ border: "none" }}>{item.protection.in_use}</TableCell>
                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            Assigned:
                        </TableCell>
                        <TableCell align="right">{item.tracking.assigned}</TableCell>
                        <TableCell align="right">Assigned:</TableCell>
                        <TableCell align="right">{item.protection.assigned}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
}
export default Item;