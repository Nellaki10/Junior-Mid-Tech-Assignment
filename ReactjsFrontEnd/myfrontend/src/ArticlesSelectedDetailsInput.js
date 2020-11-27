import React, {Component} from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

export default class ArticlesSelectedDetailsInput extends Component {
    constructor() {
        super();
    }

    state = {
        _id:  "",
        title:  "",
        description:  "",
        category:  "",
    };


    handleChange = (e) => this.setState({ 
		_id: e.target.value 
    })

    handleGetButton = () => {
        axios.get('/articles/' + this.state._id).then(response => {
            console.log(response.data);
            this.setState ({
                _id:  response.data._id,
                title:  response.data.title,
                description:  response.data.description,
                category:  response.data.category, 
            });
        });
    };

    render() {
        return (
            <div>
                <br></br>
                <p> The requested article saved in the database is:</p>
                <ul>
                    <li key={this.state._id}>ID: {this.state._id}, Title: {this.state.title}, Category: {this.state.category}, Description: {this.state.description} </li> 
                </ul>
                <hr></hr>
                <br></br>
                <TextField id="standard-basic" label="Find Article By ID" value={this.state._id} onChange={this.handleChange}/> &nbsp;&nbsp; 
                <br></br>
                <br></br>
                <Button variant="contained" onClick={this.handleGetButton}>Get Specific Article</Button>
            </div>
        );
    }

}