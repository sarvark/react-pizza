import axios from 'axios';
import React from 'react';
import { Route } from 'react-router-dom';
import { TheHeader } from './components';
import { Home, Cart } from './pages';
import { connect } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

class App extends React.Component {
  componentDidMount() {
    this.loadPizzas();
  }

  async loadPizzas() {
    const { data } = await axios('http://localhost:3000/db.json');
    this.props.setPizzas(data.pizzas);
  }

  render() {
    return (
      <div className="wrapper">
        <TheHeader />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
