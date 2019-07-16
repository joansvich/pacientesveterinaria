import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cita from './Cita';

//REDUX
import { connect } from 'react-redux';
import { getCitas } from '../actions/citasActions';

import store from '../store';
store.subscribe(() => {
  localStorage.setItem('citas', JSON.stringify(store.getState()))
})

class ListaCitas extends Component {

  componentDidMount() {
    this.props.getCitas();
  }

  render() {
    const citas = this.props.citas;
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aqui';

    return (
      <div className="card mt-2 py-5">
        <div className="card-body">
          <h2 className="card-title text-center">{mensaje}</h2>
          <div className="lista-citas">
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={this.props.deleteCitas}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
};

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  citas: state.citas.citas
})

export default connect(mapStateToProps, { getCitas })(ListaCitas);