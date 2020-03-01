import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SideBar from './sidebar/SideBar';
import STORE from './STORE';
import './App.css';
import Main from './main/Main';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1>
          <Link to={'/'}>Noteful</Link>
        </h1>
        
          <Switch>
            <Route
              path="/folder/:folderId"
              render={(props) => 
                <SideBar 
                  folders={STORE.folders} 
                  notes={STORE.notes} 
                  {...props}
                />}
            />
            <Route
              exact path="/"
              render={(props) => 
                <SideBar 
                  folders={STORE.folders}
                  notes={STORE.notes} 
                  {...props}
                />}
            />
            {/* <Route
              path='/folder/main'
              render={() => 
                <Main 
                  notes={STORE.notes}
                />}
            /> */}
          </Switch>
      </div>
    )
  }
}

export default App;
