import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRoles } from "../../actions/roles";
import { addUser } from "../../actions/users";
import { withAlert } from "react-alert";

function validation(user, userType) {
  const regexPassword = new RegExp(
    "^(?=.*\\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\\S{8,20}$"
  );
  const regexNamesAndNumbers = new RegExp("^[A-Za-z0-9 -]*[^_W]$");
  const errors = [];
  if (userType === "user") {
    if (regexNamesAndNumbers.test(user.username) === false)
      errors.push("Nombre de Usuario");
    if (regexPassword.test(user.password) === false) errors.push("Contraseña");
    if (errors.length === 0) return "validUser";
    else return errors;
  }
}

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

  onSubmit = async e => {
    e.preventDefault();
    let validate = validation(this.state, "user");
    if (validate === "validUser") {
      const user_name = this.state.username,
        user_password = this.state.password,
        user_fk_role = this.state.role_id;
      const user = { user_name, user_password, user_fk_role };
      const result = await this.props.addUser(user);
      if (result === "ok") {
        this.setState({
          username: "",
          password: "",
          role_id: ""
        });
      }
    } else {
      const { alert } = this.props;
      validate.forEach(field =>
        alert.show(field + " no tiene el formato correcto")
      );
    }
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
        <form className="needs-validation formulary">
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
                <button onClick={this.onSubmit} className="btn btn-primary ">
                  Registrarse
                </button>
              </div>
              <div className="col-sm-1">
                <button onClick={this.onReset} className="btn btn-warning">
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

export default connect(mapStateToProps, { getRoles, addUser })(
  withAlert()(Form)
);
