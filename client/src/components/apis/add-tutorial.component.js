import React, { Component } from 'react';

export default class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",
            published: false,

        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        })
    }

    saveTutorial() {
        const { title, description } = this.state;
    }
        
    render() {
        return (
            <>
                <div className="submit-form">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" className="form-group" id="title"
                            required name="title" value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Description</label>
                        <input 
                            type="text" className="form-group" id="description"
                            required name="description" value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <button onclick={this.saveTutorial} className="btn btn-success">
                        Submit
                    </button>
                </div>
            </>
        )
    }
}
