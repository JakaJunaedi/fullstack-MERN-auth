import React, { Component } from 'react';
import axios from 'axios';

export default class ListTutor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [],
            description: "",
            published: false
        }
    }

    componentDidMount() {
        this._ambilData();
    }

    _ambilData = () => {
        const url = "http://localhost:8000/api/tutorials";
        axios.get(url).then(
            res => this.setState({title: res.data.results})
        )
    }

    render() {
        return (
            <div>
              tes  
            </div>
        )
    }
}
