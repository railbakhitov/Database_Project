import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import loadTestData from './redux/actions/loadTestData';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Person from './components/PersonData/Person';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.init();

    }

    componentWillUnmount () {

    }

    render() {
        return (
            <div className="wrapper">
                <LeftMenu />
                <Person />
            </div>
    );
    }
}

function msp(state) {

}


function mdp(dispatch) {
    return {
        init() {
            dispatch(loadTestData())
        }
    }
}

export default connect(msp, mdp)(App);
