import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import loadTestData from './redux/actions/loadTestData';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Person from './components/PersonData/Person';
import { Route, Switch } from 'react-router-dom';
import ParticipantInfo from './components/ParticipantInfo/ParticipantInfo';

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
        console.log('gjdfng', this.props.currentID);
        return (
            <div className="wrapper">
                <LeftMenu />
                    <Switch>
                        <Route path={'/'} exact component={Person} />
                        <Route path={`/${this.props.currentID}`} component={ParticipantInfo} />
                    </Switch>
            </div>
    );
    }
}

function msp(state) {
    return {
        'currentID': state.currentParticipant 
    }
}

function mdp(dispatch) {
    return {
        init() {
            dispatch(loadTestData())
        }
    }
}

export default connect(msp, mdp)(App);
