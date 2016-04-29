import React from 'react';
import { blueGrey700 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './components/TopBar';
//import Nav from './components/Nav';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey700
  }
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <TopBar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
