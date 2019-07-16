import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

//REDUX
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {


  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }


  // cuando eliminamos o agregamos nueva cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }



  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos]
    this.setState({
      citas
    })
  }

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita => cita.id !== id);
    this.setState({
      citas
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header
            titulo='Administrador Pacientes Veterinaria'
          />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita
                crearNuevaCita={this.crearNuevaCita}
              />
            </div>
            <div className="mt-5 col-md-10 mx-auto">
              <ListaCitas
                eliminarCita={this.eliminarCita}
              />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;