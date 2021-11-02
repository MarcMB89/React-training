import React from "react";
import axios from "axios";

// INPUT CONFIG USING CONTROLLED COMPONENT

export default class Form extends React.Component{
    state = {userName : ""};
    handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(response.data);
        this.setState({ userName: '' });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="GitHub username..." 
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value})}
                    required />
                <button>Add card</button>
            </form>
        )
    }
}

/*
CONFIG DE INPUT USANDO REF Y CLASS 

export default class Form extends React.Component{
    userNameInput = React.createRef();
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.userNameInput.current.value)
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="GitHub username..." 
                    ref={this.userNameInput} 
                    required />
                <button>Add card</button>
            </form>
        );
    }
}
*/