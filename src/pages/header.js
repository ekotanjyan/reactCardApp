import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './main.scss';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

//New organization data example
const newOrg =  {
    "name": "New Organization",
    "tracking": {
        "in_use": "0",
        "assigned": "0"
    },
    "protection": {
        "in_use": "0",
        "assigned": "0"
    },
    "icon_url": "data:image/png;base64,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"

};
const Header = props => { 

    //On click Add Organization
    const handleNewOrganizationClick = (event, index) => {
        props.setData([...props.origData, newOrg]);
        props.setOrigData([...props.origData, newOrg]);
    };
    
    //On text input in search box
    const handleSearch = (event)=>{
        let currentData = props.origData.filter((organization)=>organization.name.includes(event.target.value));
        props.setData(currentData);
    }

    return <Grid container spacing={2} sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item lg={3} >
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Typography variant="h6" gutterBottom sx={{px:2}}>
                    All Organizations ({props.origData.length})
                </Typography>
            </Box>
        </Grid>

        <Grid item lg={4}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField size="small" id="outlined-basic" label="Search Organization" variant="outlined" onChange={handleSearch} />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Box>
        </Grid>
        <Grid item lg={2}>
        </Grid>
        <Grid item lg={3}>
            <Button variant="contained" onClick={handleNewOrganizationClick}>Add New Organization</Button>
        </Grid>
    </Grid>

}

export default Header;