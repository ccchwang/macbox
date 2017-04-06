import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function(props) {

    return (
      <MuiThemeProvider>
      <div>
        <div id="body">
          <Navbar />
          { props.children && React.cloneElement(props.children, props) }
        </div>
        <Footer />
      </div>
      </MuiThemeProvider>
    )


}
