import * as React from 'react';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

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
       <Button color="primary">Shop Now</Button>;
       </Grid>
 </div>
  )
    }
  };
export default Home