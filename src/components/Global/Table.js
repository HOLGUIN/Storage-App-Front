// Dependencies
import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button, Panel, Grid, Col, Row } from 'react-bootstrap';

import './css/Table.css';

class STable extends Component {

    static propTypes = {
        modelo: PropTypes.object.isRequired,
        tags: PropTypes.array.isRequired
    };


    json2array(item, getKeys, tags) {

        var array = [];
        var filter = false
        if (tags == "all" || tags == "ALL") {
            filter = false;
        }
        else {
            filter = true;
        }

        if( item !== undefined)
        {
            Object.keys(item).forEach(function (key) {
                if (getKeys) {
    
                    if (filter) {
                        tags.forEach(function (tag) {
                            if (key.toLowerCase() == tag.toLowerCase()) { array.push(key); }
    
                        })
                    }
                    else {
                        array.push(key);
                    }
    
                }
                else {
                    if (filter) {
                        tags.forEach(function (tag) {
                            if (key.toLowerCase() == tag.toLowerCase()) { array.push(item[key]); }
    
                        })
                    }
                    else {
                        array.push(item[key]);
                    }
                }
            });
    
            return array;
        }else{
            return [];
        }

    }

    generateTableRowsFromJSON(item, tags) {

        var array = this.json2array(item, false, tags);
        return array.map((element, key) => {
            return <td key={key}>{element}</td>
        });
    }

    generateTableColumnsFromJSON(item, tags) {
        var array = this.json2array(item, true, tags);
        return array.map((element, key) => {
            return <th key={key}>{element}</th>
        });
    }



    render() {
        const { modelo, tags } = this.props;
        return (

            <Table striped bordered condensed hover responsive className="STable">
                <thead>
                    <tr>
                        {this.generateTableColumnsFromJSON(modelo.modelo[0], tags)}
                    </tr>
                </thead>
                <tbody>
                    {
                        modelo.modelo && modelo.modelo.map(
                            (item, key) =>
                                <tr key={key}>
                                    {this.generateTableRowsFromJSON(item, tags)}
                                </tr>
                        )
                    }
                </tbody>
            </Table>
        );
    }
}

export default STable;