import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Songs from './components/pages/Songs'
import Playlists from './components/pages/Playlists'
import Radio from './components/pages/RadioPage/Radio'
import Support from './components/pages/Support'

function App() {
  
  return (
     <>
       <Router>
        <Navbar />
           <Switch>
             <Route exact path='/' component={Home} />
             <Route path='/songs'  component={Songs} />
             <Route path='/playlists' component={Playlists} />
             <Route path='/radio'  component={Radio} />
             <Route path='/support' component={Support} />
           </Switch>
       </Router>
     </>
  );
}


export default App;
