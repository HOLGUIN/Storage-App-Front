// Dependencies
import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types';
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter'
//import { Table, Button, Panel, Grid, Col, Row } from 'react-bootstrap';

//import './css/Table.css';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class STable extends Component {

    static propTypes = {
        modelo: PropTypes.object.isRequired,
        methods: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
    }


    componentDidMount() {

        if (this.props.modelo.modelo.length > 0) {
            var lt = [];
            if (this.props.modelo.tags.length > 0) {
                var aux = this.props.modelo.tags;
                var count = 0;
                Object.keys(this.props.modelo.modelo[0]).forEach(function (key) {
                    if (aux[count] && aux[count].show != false) {

                        if (aux[count].filter && aux[count].filter == true) {
                            var tag = {
                                Header: aux[count].tag ? aux[count].tag : key,
                                accessor: key,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: [key] }),
                                filterAll: true
                            }
                        } else {
                            var tag = {
                                Header: aux[count].tag ? aux[count].tag : key,
                                accessor: key,
                                sortable: false,
                                filterable: false,
                            }
                        }
                        lt.push(tag);
                    }
                    count = count + 1;
                });
            } else {
                Object.keys(this.props.modelo.modelo[0]).forEach(function (key) {
                    var tag = { Header: key, accessor: key }
                    lt.push(tag);
                });
            }
            this.setState({ tags: lt });
        }
    }

    render() {
        const { modelo } = this.props;
        return (
            <div>
                <ReactTable
                    data={modelo.modelo}
                    noDataText="No Data"
                    filterable
                    columns={this.state.tags}
                    defaultPageSize={this.props.modelo.defaultPageSize == 0 ||
                        this.props.modelo.defaultPageSize == null ? 10 :
                        this.props.modelo.defaultPageSize}
                    className="-striped -highlight"
                />
            </div>
        );
    }
}

export default STable;