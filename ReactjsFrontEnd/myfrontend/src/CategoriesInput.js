import React, {Component} from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

export default class CategoriesInput extends Component {
    
    constructor() {
        super();
    }

    state = {
        _id:  "",
    };

    handleChange = (e) => this.setState({ 
		_id: e.target.value 
    })

    handleDeleteButton = () => {
        axios.delete('/categories/' + this.state._id).then(response => {
            console.log(response.data);
        });
    };

    render() {
        return (
            <div>
                <br></br>
                <TextField id="standard-basic" label="Delete Category By ID" value={this.state._id} onChange={this.handleChange}/> &nbsp;&nbsp; 
                <br></br>
                <br></br>
                <Button variant="contained" onClick={this.handleDeleteButton}>Delete Category</Button>
            </div>
        );
    }
}