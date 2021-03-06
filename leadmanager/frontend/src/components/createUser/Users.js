import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers, deleteUser } from "../../actions/users";

export class Users extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <Fragment>
        <h2>Usuarios</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre de Usuario</th>
              <th>Fecha de Creación</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.user_name}</td>
                <td>{user.user_created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteUser.bind(this, user.user_id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps, { getUsers, deleteUser })(Users);
