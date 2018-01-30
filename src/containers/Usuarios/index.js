// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import { Table, Button, Panel, Grid, Col, Row } from 'react-bootstrap';
import  STable  from '../../components/Global/Table';

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
            modelo : {
                headers:[],
                modelo: []
            },
            tags: []
        }; 
    }

    componentDidMount() {
        this.props.loadUsuarios();
    }



    render() {
        const { usuarios } = this.props;
        this.state.modelo.modelo = usuarios;
        this.state.tags = ["Nombre", "Edad"];
        return (
            <div className="usuario">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col">
                        <h3>Usuarios</h3>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">

                    </div>
                </div>

                <STable modelo={this.state.modelo} tags={this.state.tags} />

                <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab button_create" title="Crear usuario">
                    <i className="material-icons">add</i>
                </button>
            </div >
        );
    }
}

export default connect(state => ({
    usuarios: state.usuario.usuarios
}), actions)(Usuario);
