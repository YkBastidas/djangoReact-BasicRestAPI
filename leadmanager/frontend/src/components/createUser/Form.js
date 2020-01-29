import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRoles } from "../../actions/roles";
import { addUser } from "../../actions/users";

export class Form extends Component {
  state = {
    username: "",
    password: "",
    role_id: ""
  };

  static propTypes = {
    roles: PropTypes.array.isRequired,
    getRoles: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const user_name = this.state.username,
      user_password = this.state.password,
      user_fk_role = this.state.role_id;
    const user = { user_name, user_password, user_fk_role };
    this.props.addUser(user);
    this.setState({
      username: "",
      password: "",
      role_id: ""
    });
  };

  onReset = e => {
    e.preventDefault();
    this.setState({
      username: "",
      password: "",
      role_id: ""
    });
  };

  componentDidMount() {
    this.props.getRoles();
  }

  render() {
    const { username, password, role_id } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Crear Usuario</h2>
        <form onSubmit={this.onSubmit} onReset={this.onReset}>
          <fieldset>
            <legend> Cuenta </legend>
            <div className="form-group row">
              <div className="col-sm-4">
                <label>Nombre de Usuario</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                  maxLength="30"
                  required
                />
              </div>
              <div className="col-sm-3">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control bg-light"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  maxLength="20"
                  required
                />
              </div>
              <div className="col-sm-4">
                <label> Rol </label>
                <select
                  className="custom-select bg-light"
                  name="role_id"
                  required
                  onChange={this.onChange}
                  value={role_id}
                >
                  <option value="">Seleccione...</option>
                  {this.props.roles.map(role => (
                    <option key={role.role_id} value={role.role_id}>
                      {" "}
                      {role.role_name}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">
                <button type="submit" className="btn btn-primary ">
                  Registrarse
                </button>
              </div>
              <div className="col-sm-1">
                <button type="reset" className="btn btn-warning">
                  Borrar
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  roles: state.roles.roles
});

export default connect(mapStateToProps, { getRoles, addUser })(Form);
