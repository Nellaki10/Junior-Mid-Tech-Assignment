import React, {Component} from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

export default class UpdatedArticleInput extends Component {
    
    constructor() {
        super();
    }

    state = {
        _id:  "",
        content:  "",
    };

    handleChange = (e) => this.setState({ 
        _id: e.target.value
    })

    handleChange2 = (e) => this.setState({ 
        content: e.target.value
    })

    handleUpdateButton = () => {
        const article = {
            content: this.state.content
        }

        axios.patch('/articles/' + this.state._id, {content: this.state.content}).then(response => {
            console.log(response.data);
        });
    };

    render() {
        return (
            <div>
                <br></br>
                <TextField id="standard-basic" label="Update Article By ID" value={this.state._id} onChange={this.handleChange}/> &nbsp;&nbsp;
                <TextField id="standard-basic" label="New Content" value={this.state.content} onChange={this.handleChange2}/> &nbsp;&nbsp; 
                <br></br>
                <br></br>
                <Button variant="contained" onClick={this.handleUpdateButton}>Updated Article</Button>
            </div>
        );
    }
}