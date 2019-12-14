import React from 'react';
import store from '../../../redux/store';

class SearchParticipant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    };

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    };

    handleClick(e) {
        store.dispatch({ type: 'SEARCH_PARTICIPANT', payload: this.state.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="button" value="Искать" onClick={this.handleClick}/>
            </form>
        )
    }
}

export default SearchParticipant;