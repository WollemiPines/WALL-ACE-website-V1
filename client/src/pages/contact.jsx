import * as React from 'react';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
class Contact extends React.Component {
    
  render() {
      return (
        <div>
          <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <div className='contact-container'>
        <div className="contact-sub-container-1">
            <h1>Get In Touch</h1>
            <p> For general inquiries or feedback, please get in touch.</p>
            <p>chrisw1096@gmail.com</p>
            <p>0420 748 67(Five)</p>

            {/* <Button className="contact-submit-bttn" variant="contained" color="primary" disableElevation component={RouterLink} to="/shop"> Submit</Button> */}

        </div>
        
    
        <div className="contact-sub-container-2">
            <img className='contact-main-img' alt="Logo" src='/images/contact/contact.jpg'/>
        </div>
      </div>
            
    
           </Grid>
           
     </div>
      )
    }
  };
export default Contact