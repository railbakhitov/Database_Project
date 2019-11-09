import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import getJSON from "./test/test";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {


    }

    componentWillUnmount () {

    }

    render() {
        const text=fetch('https://api.myjson.com/bins/nla64').json();
        return (
            <div>
                <pre>{JSON.stringify(text, null, '\t')}</pre>
            </div>
    );
    }
}

function msp(state) {

}


function mdp(dispatch) {

}

export default connect(msp, mdp)(App);
