// Dependencies
import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button, Panel, Grid, Col, Row } from 'react-bootstrap';

import './css/Table.css';

class STable extends Component {

    static propTypes = {
        modelo: PropTypes.object.isRequired
    };


    generteTableRowsFromJSON(item) {
        var array = [];
        Object.keys(item).forEach(function (key) {
            array.push(item[key])
        });
        return array.map((element, key) => {
            return <td key={key}>{element}</td>
        });
    }



    render() {
        const { modelo } = this.props;
        console.log(modelo);
        return (

            <Table striped bordered condensed hover responsive className="STable">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        modelo.modelo && modelo.modelo.map(
                            (item, key) =>
                                <tr key={key}>
                                    {this.generteTableRowsFromJSON(item)}
                                </tr>
                        )
                    }
                </tbody>
            </Table>
        );
    }
}

export default STable;