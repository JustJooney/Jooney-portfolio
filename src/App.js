import GlobalStyle from './GlobalStyle';
import Home from './page/Home';
import {Route} from 'react-router-dom';


function App() {
  return (
    <>
      <GlobalStyle />
      <Route path={['/project/:id', '/']}>
        <Home />
      </Route>
    </>
  );
}



export default App;
