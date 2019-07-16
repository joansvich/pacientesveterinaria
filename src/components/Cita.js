import React, { Component } from 'react';
import PropTypes from 'prop-types';

//REDUX

import { connect } from 'react-redux';
import { deleteCitas } from '../actions/citasActions';

class Cita extends Component {

  render() {
    const { id, fecha, hora, mascota, propietario, sintomas } = this.props.cita;
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{mascota}</h3>
          <p className="card-text"><span>Nombre dueño</span> {propietario}</p>
          <p className="card-text"><span>Fecha</span> {fecha}</p>
          <p className="card-text"><span>Hora</span> {hora}</p>
          <p className="card-text"><span>Síntomas</span></p>
          <p className="card-text">{sintomas}</p>

          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteCitas(id)}
          >Borrar &times;</button>
        </div>
      </div >
    )
  }
}

Cita.propTypes = {
  info: PropTypes.shape({
    fecha: PropTypes.string,
    hora: PropTypes.string,
    mascota: PropTypes.string,
    propietario: PropTypes.string,
    sintomas: PropTypes.string
  }),
}

export default connect(null, { deleteCitas })(Cita);