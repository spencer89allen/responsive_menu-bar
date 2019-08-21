import React, { Component } from 'react';

import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

class App extends Component {

  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{ sideDrawerOpen: !prevState.sideDrawerOpen } 
    })
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
    })
  }

  render() {

    let backdrop = null;
    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop closeBackdrop={this.backdropClickHandler}/>;
    }

    return (
      <div style={{ height: '100vh' }}>
        <Toolbar drawerToggle={this.drawerToggleClickHandler}/>
        <SideDrawer display={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This it the Page Contnet!</p>
        </main>
      </div>
    );
  }
}

export default App;
