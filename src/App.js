import { Route } from 'react-router-dom';
import { BaseButton, TheHeader } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <TheHeader />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
