import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

//REDUX
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header
            titulo='Administrador Pacientes Veterinaria'
          />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita />
            </div>
            <div className="mt-5 col-md-10 mx-auto">
              <ListaCitas />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;