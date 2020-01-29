import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.user_name)
        alert.error("Nombre de usuario " + error.msg.user_name);
      if (error.msg.user_password)
        alert.error("Contraseña " + error.msg.user_password);
      if (error.msg.user_fk_role) alert.error("Rol " + error.msg.user_fk_role);
    } else alert.success("Usuario registrado exitosamente");
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));
