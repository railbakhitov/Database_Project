import React from 'react';
import { DocGrid, Row, Col } from '../../../partials/DocGrid';
import axios from 'axios';
import store from '../../../redux/store';
import addPersonData from '../../../redux/actions/addPersonData';

/* 
TODO: 1. Название проекта - textArea
      2. Направление - textArea
      3. Финансы
      4. Результат
      5. Год проведения
*/

class ProgramUMNIK extends React.Component {
    constructor(props) {
        super(props);

        const { personData } = this.props;
        const data = Object.keys(personData).filter( name => name !== 'direction')
                                            .reduce((acc, name) => ({ 
                                                ...acc, [name]: personData[name]
                                            }),{});

        this.state = {
            // данные участника
            data: data,
            projects: [],

            // Данные для проекта
            projectName: '',
            projectDirection: '',
            projectFinance: '',
            projectResult: '',
            projectYear: '',
        }

        this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
        this.handleChangeProjectDirection = this.handleChangeProjectDirection.bind(this);
        this.handleChangeProjectFinance = this.handleChangeProjectFinance.bind(this);
        this.handleChangeProjectResult = this.handleChangeProjectResult.bind(this);
        this.handleChangeProjectYear = this.handleChangeProjectYear.bind(this);

        this.dispatchData = this.dispatchData.bind(this);
    }

    handleChangeProjectName(e) {
        const projectName = e.target.value;
        this.setState({ projectName });
    }

    handleChangeProjectDirection(e) {
        const projectDirection = e.target.value;
        this.setState({ projectDirection });
    }

    handleChangeProjectFinance(e) {
        const projectFinance = e.target.value;
        this.setState({ projectFinance });
    }

    handleChangeProjectResult(e) {
        const projectResult = e.target.value;
        this.setState({ projectResult });
    }

    handleChangeProjectYear(e) {
        const projectYear = e.target.value;
        this.setState({ projectYear });
    }

    dispatchData() {
        const { projectName, projectDirection, projectFinance, projectResult, projectYear, data } = this.state;
        const newState = {
            ...data,
            projects: [ 
                ...this.state.projects, 
                {
                    projectName,
                    projectDirection,
                    projectFinance,
                    projectResult,
                    projectYear,
                }
            ]
        };
        axios.post('https://database-knrtu.firebaseio.com/data.json', newState );
        store.dispatch(addPersonData( newState ));
    }  

    render() {
        return (
            <DocGrid cols={2}>
                <Row>
                    <Col>Название проекта</Col>
                    <Col>
                        <textarea 
                            type="text" 
                            cols="60"
                            rows="4"
                            value={ this.state.projectName } 
                            onChange={ this.handleChangeProjectName } 
                            name="projectName" /> 
                    </Col>
                </Row>
                <Row>
                    <Col>Направление</Col>
                    <Col>
                        <textarea 
                            type="text" 
                            cols="60"
                            rows="4"
                            value={ this.state.projectDirection } 
                            onChange={ this.handleChangeProjectDirection } 
                            name="projectDirection" /> 
                    </Col>
                </Row>
                <Row>
                    <Col>Финансы</Col>
                    <Col>
                        <input 
                            type="text" 
                            value={ this.state.projectFinance } 
                            onChange={ this.handleChangeProjectFinance } 
                            name="projectFinance" /> 
                    </Col>
                </Row>
                <Row>
                    <Col>Результат</Col>
                    <Col>
                        <input 
                            type="text" 
                            value={ this.state.projectResult } 
                            onChange={ this.handleChangeProjectResult } 
                            name="projectResult" /> 
                    </Col>
                </Row>
                <Row>
                    <Col>Год проведения</Col>
                    <Col>
                        <input 
                            type="text" 
                            value={ this.state.projectYear } 
                            onChange={ this.handleChangeProjectYear } 
                            name="projectYear" /> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button type="button" 
                                className="btn btn-success"
                                onClick={ this.dispatchData }
                        >
                            Сохранить данные участника
                        </button> 
                    </Col>
                    <Col></Col>
                </Row>
            </DocGrid>
            

        )
    }
}

export default ProgramUMNIK;