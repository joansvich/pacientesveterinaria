import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';


// REDUX
import { connect } from 'react-redux';
import { getCitas, addCitas, isError } from '../actions/citasActions';

// const stateInicial = {
//   cita: {
//     mascota: '',
//     propietario: '',
//     fecha: '',
//     hora: '',
//     sintomas: ''
//   },
//   error: false
// }

class NuevaCita extends Component {

  // Si no utilizaramos Redux, con React haríamos lo siguiente:
  // state = { ...stateInicial }

  nombreMascotaRef = React.createRef();
  propietarioRef = React.createRef();
  fechaRef = React.createRef();
  horaRef = React.createRef();
  sintomasRef = React.createRef();

  componentDidMount() {
    this.props.getCitas()
    console.log(this.props)
  }

  // No nos hace falta ya que usamos referencias
  // handleChange = e => {
  //   this.setState({
  //     cita: {
  //       ...this.state.cita,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }

  handleSubmit = e => {
    e.preventDefault();

    // const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    if (!this.nombreMascotaRef.current.value || !this.propietarioRef.current.value || !this.fechaRef.current.value || !this.horaRef.current.value || !this.sintomasRef.current.value) {
      this.props.isError(true)
    } else {
      const nuevaCita = {
        id: uuid(),
        mascota: this.nombreMascotaRef.current.value,
        propietario: this.propietarioRef.current.value,
        fecha: this.fechaRef.current.value,
        hora: this.horaRef.current.value,
        sintomas: this.sintomasRef.current.value
      }

      //enviamos al action de Redux la nueva cita
      this.props.addCitas(nuevaCita)

      // reset al form (opcional)
      e.currentTarget.reset();
    }


  }

  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>
          {this.props.error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
          <form
            onSubmit={this.handleSubmit}
          >
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre mascota"
                  name="mascota"
                  ref={this.nombreMascotaRef}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre dueño"
                  name="propietario"
                  ref={this.propietarioRef}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  ref={this.fechaRef}
                />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  ref={this.horaRef}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Describe los síntomas"
                  name="sintomas"
                  ref={this.sintomasRef}
                ></textarea>
              </div>
            </div>
            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita" />
          </form>
        </div>
      </div>
    );
  }
}

NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  citas: state.citas.citas,
  error: state.citas.error
})

export default connect(mapStateToProps, { getCitas, addCitas, isError })(NuevaCita);