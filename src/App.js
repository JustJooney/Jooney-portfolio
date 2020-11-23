import Nav from './components/Nav';
import GlobalStyle from './GlobalStyle';
import Home from './page/Home';
import {Route} from 'react-router-dom';


function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Route path={['/project/:id', '/']}>
        <Home />
      </Route>
    </>
  );
}



export default App;
