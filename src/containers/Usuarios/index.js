// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button, Panel } from 'react-bootstrap';

// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

class Usuario extends Component {

    static propTypes = {
        loadUsuarios: PropTypes.func.isRequired,
        usuarios: PropTypes.any
    };

    constructor(props) {
        super(props);

        this.state = {
            usuarios: []
        };

    }

    componentDidMount() {
        this.props.loadUsuarios();
    }

    renderUsuariosList(usuarios) {
        return (
            <Table responsive striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario, key) => {
                            return (
                                <tr key={key}>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.edad}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    }

    render() {
        const { usuarios } = this.props;
        return (
            <div className="usuario">
                    <h3>Usuarios</h3>               
                    {usuarios && this.renderUsuariosList(usuarios)}
            </div>
        );
    }
}

export default connect(state => ({
    usuarios: state.usuario.usuarios
}), actions)(Usuario);
