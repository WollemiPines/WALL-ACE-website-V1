import * as React from 'react';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';


class Home extends React.Component {
    
  render() {
      return (
    <div>
      <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="stretch"
>
        <h1>homepage</h1>
        <Button variant="contained" color="primary" disableElevation component={RouterLink} to="/shop"> Shop Now! </Button>
       </Grid>
 </div>
  )
    }
  };
export default Home