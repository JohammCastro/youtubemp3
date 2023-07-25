import { Box, Grid } from '@mui/material'
import './App.css'
import { Dashboard } from "./pages/Dashboard"



function App() {


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{backgroundColor:'white',margin:"10px",borderRadius:'5px'}}>
              <Dashboard/>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
