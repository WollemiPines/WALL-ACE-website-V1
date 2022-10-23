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
  <div className='homepage-container'>
    <div className="homepage-sub-container-1">
        <h1>TEXTILE ENGINEERING</h1>
        <p> Sewn goods are rarely durable, at least not the abuse wild environments can throw around. Even when nature is in a good mood things get caught, scuffed, wet and dirty. A mild tantrum on the other hand can easily destroy what you thought you could rely on. The aim of Wall Ace is to provide unique and ultra-durable outdoor products at a reasonable price. A lot more goes into these final versions than meets the eye, weeks of prototyping, product and material tests all conspire into something you can abuse for many years to come.</p>
        <Button className="homepage-shopnowbttn" variant="contained" color="primary" disableElevation component={RouterLink} to="/shop"> Shop Now! </Button>
        <h1>ABOUT OUR GEAR</h1>
        <p>Function AND form are at the core of all our designs. Before anything gets the Wall Ace approval, a few questions must be answered; 
<ul>
<li> Can it be lighter and/or smaller? </li>
<li>Is every component necessary? </li>
<li>What is its main purpose and does it fulfil that? </li>
<li>Is it versatile/multi-purpose? </li>
<li>Can the design, as much as the materials withstand abuse and misuse? </li>
</ul>
Some of our innovations are obvious in items such as the Abseil Pro rope protection and the Twist n' Tag. In others, such as the Wall Ace Soft Release, the simplicity of form, reveals itself with every new use. Our retro bum bags are a classic bestseller, good for almost any adventure while the more specialty items such as the leg bags can solve unique yet annoying issues. Need strong and reliable and loops sewn in your slackline webbing? A broken buckle on your favourite hiking pack? We can repair it. Even climbing bolts, home woodys and other timber and metalwork is possible, simply get in touch. </p>
        <Button className="homepage-shopnowbttn" variant="contained" color="primary" disableElevation component={RouterLink} to="/shop"> Shop Now! </Button>
    
    </div>
    

    <div className="homepage-sub-container-2">
        <img className='homepage-main-img' alt="Logo" src='/images/homepage/tom-the-fear.jpg'/>
    </div>
  </div>
        

       </Grid>
       
 </div>
  )
    }
  };
export default Home