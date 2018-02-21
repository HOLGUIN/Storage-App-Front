// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import STable from '../../components/Global/Table';

// Assets
import '../css/containers.css';

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
            usuarios: [],
            show: false,
            modelo: {
                tags: [],
                modelo: [],
                defaultPageSize: 10
            }
        };

        this.handleUserClick = this.handleUserClick.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.props.loadUsuarios();
    }

    handleUserClick() {
        var u = { nombre: "Leidy Holguin", edad: 45 };
        // this.props.postUsuario(u);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {
        const { usuarios } = this.props;
        this.state.modelo.modelo = usuarios;
        this.state.modelo.tags = [
            { "show": true, "tag": "Nombre", "filter": true },
            { "show": true, "tag": "Edad", "filter": false }];

        return (

            <div>
               
             
                <div className="usuario">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--6-col">
                            <h3>Usuarios</h3>
                        </div>
                        <div className="mdl-cell mdl-cell--6-col">

                        </div>

                        <div className="mdl-cell mdl-cell--12-col">
                            <button onClick={this.handleShow}>prueb</button>
                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab button_create" title="Crear usuario" onClick={this.handleShow}>
                                <i className="material-icons">add</i>
                            </button>
                        </div>

                        <div className="mdl-cell mdl-cell--12-col">
                            <STable modelo={this.state.modelo} />
                        </div>

                        
                    <Modal show={this.state.show} onHide={this.handleClose} animation = {false}  bsSize="large">
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            One fine body...
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                    </div>

                </div>

            </div>
        );
    }
}

export default connect(state => ({
    usuarios: state.usuario.usuarios
}), actions)(Usuario);
