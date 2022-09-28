import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './header'
import OrganizationItems from './organizationsItems';
const MainLayout = props => {
    const [data, setData] = React.useState([]);
    //Keeping original data in state
    const [origData, setOrigData] = React.useState([]);
    //Getting data from json file
    const fetchJson = () => {
        fetch('./data/organizations.json')
            .then(response => {
                return response.json();
            }).then(data => {
                setData(data.data);
                setOrigData(data.data);
                
            }).catch((e) => {
                console.log(e);
            });
    }
    React.useEffect(() => {
        fetchJson()
    }, [])
    return (
        <React.Fragment>
            <CssBaseline />
            <Container sx={{ bgcolor: 'lightgray', padding: '25px' }}>
                <Box sx={{ bgcolor: 'white', height: '100vh' }}>
                    <Header setData={setData} origData={origData} setOrigData={setOrigData}></Header>
                    <OrganizationItems data={data}></OrganizationItems>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default MainLayout