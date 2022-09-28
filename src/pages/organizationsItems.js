import Item from "./item";
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';


const lightTheme = createTheme({ palette: { mode: 'light' } });
const OrganizationItems = props => {
    
    return (<Grid container spacing={2}>
            <Grid item xs={12}>
                <ThemeProvider theme={lightTheme}>
                    <Box
                        sx={{
                            p: 2,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr 1fr' },
                            gap: 3,
                        }}
                    >
                        {props.data?.map((item, i) => (
                            <Item key={i} data={item} />
                        ))}
                    </Box>
                </ThemeProvider>
            </Grid>
    </Grid>
    );
}
export default OrganizationItems;