import React, {Component} from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

export default class Categories extends Component {
    
    constructor() {
        super();
    }

    state = {
        categories:  [],
    };

    handleGetButton = () => {
        axios.get("/categories").then(response => {
            //console.log(response);
            this.setState ({
                categories: response.data  
            });
        });
    };

    render() {
        return (
            <div>
                <p> The Categories saved in the database are:</p>
                <ul>
                    {this.state.categories.map(categorie => <li key={categorie._id}>ID: {categorie._id}, Name: {categorie.name} </li>) } 
                </ul>
                <hr></hr>
                <Button variant="contained" onClick={this.handleGetButton}>Get Categories</Button> &nbsp;&nbsp;
                <Button variant="contained" onClick={this.handleGetButton}>Update Categories</Button> &nbsp;&nbsp;
            </div>
        );
    }
}