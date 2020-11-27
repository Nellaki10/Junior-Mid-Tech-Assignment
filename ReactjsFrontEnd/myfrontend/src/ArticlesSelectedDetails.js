import React, {Component} from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

export default class ArticlesSelectedDetails extends Component {
    
    constructor() {
        super();
    }

    state = {
        articles:  [],
    };

    handleGetButton = () => {
        axios.get("/articles").then(response => {
            //console.log(response);
            this.setState ({
                articles: response.data  
            });
        });
    };

    render() {
        return (
            <div>
                <p> The Articles saved in the database are:</p>
                <ul>
                {this.state.articles.map(article => <li key={article._id}>ID: {article._id}, Title: {article.title}, Category: {article.category}, Description: {article.description} </li>) } 
                </ul>
                <hr></hr>
                <Button variant="contained" onClick={this.handleGetButton}>Get Articles </Button> &nbsp;&nbsp;
                <Button variant="contained" onClick={this.handleGetButton}>Update Articles</Button> &nbsp;&nbsp;
            </div>
        );
    }
}

