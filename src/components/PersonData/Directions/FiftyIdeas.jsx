import React from 'react';
import { DocGrid, Row, Col } from '../../../partials/DocGrid';
import { whoHoldEvent } from '../../../dictionaries/whoHoldEvent'
import Select from 'react-select';
import axios from 'axios';
import store from '../../../redux/store';
import addPersonData from '../../../redux/actions/addPersonData';

/* 
TODO: 1. Год проведения
      2. Название проекта - textarea
      3. Направление проекта - textarea
      4. Номер заявки
      5. Результат
      6. Примечание - textarea
      7. Провел мероприятие
            // Реализовать выпадающий список со значение КНИТУ-КХТИ
            // Ниже будет поле "другое"
            // Если пользователь ввел значение в это поле, то оно сравнивается со значениями выпадающего списка
            // и если его нет в нем, то добавить введеное значение в выпадающий список

*/

class FiftyIdeas extends React.Component {
    constructor(props) {
        super(props);

        const { personData } = this.props;
        const data = Object.keys(personData).filter( name => name !== 'direction')
                                            .reduce((acc, name) => ({ 
                                                ...acc, [name]: personData[name]
                                            }),{});

        this.state = {
            data: data,
            projects: [],

            direction: personData.direction,
            projectYear: '',
            projectName: '',
            projectDirection: '',   
            requestNumber: '',
            projectResult: '',
            projectNote: '',
            whoHoldEvent: '',
            // если whoHoldEventDifferent !== '', 
            // то whoHoldEvent.push({ value: `${whoHoldEventDifferent}`, label: `${whoHoldEventDifferent}` })
            whoHoldEventDifferent: '', 
        }

        this.handleChangeProjectYear = this.handleChangeProjectYear.bind(this);
        this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
        this.handleChangeProjectDirection = this.handleChangeProjectDirection.bind(this);
        this.handleChangeRequestNumber = this.handleChangeRequestNumber.bind(this);
        this.handleChangeProjectResult = this.handleChangeProjectResult.bind(this);
        this.handleChangeProjectNote = this.handleChangeProjectNote.bind(this);

        this.handleChangeWhoHoldEvent = this.handleChangeWhoHoldEvent.bind(this);
        this.handleChangeWhoHoldEventDifferent = this.handleChangeWhoHoldEventDifferent.bind(this);

        this.dispatchData = this.dispatchData.bind(this);
        
    }

    handleChangeProjectYear(e) {
        const projectYear = e.target.value;
        this.setState({ projectYear });
    }

    handleChangeProjectName(e) {
        const projectName = e.target.value;
        this.setState({ projectName });
    }

    handleChangeProjectDirection(e) {
        const projectDirection = e.target.value;
        this.setState({ projectDirection });
    }

    handleChangeRequestNumber(e) {
        const requestNumber = e.target.value;
        this.setState({ requestNumber });
    }

    handleChangeProjectResult(e) {
        const projectResult = e.target.value;
        this.setState({ projectResult });
    }

    handleChangeProjectNote(e) {
        const projectNote = e.target.value;
        this.setState({ projectNote });
    }

    handleChangeWhoHoldEvent( selectedOptions ) {
        if ( selectedOptions ) {
            this.setState({ whoHoldEvent: selectedOptions.value });
        }
    }

    handleChangeWhoHoldEventDifferent(e) {
        const whoHoldEventDifferent = e.target.value;
        this.setState({ whoHoldEventDifferent });
    }

    dispatchData() {
        const { projectYear, projectName, projectDirection, requestNumber, projectResult, projectNote, whoHoldEvent, whoHoldEventDifferent, data, projects, direction } = this.state;
        const newState = {
            ...data,
            projects: [ 
                ...projects, 
                {
                    direction,
                    projectYear,
                    projectName,
                    projectDirection,
                    requestNumber,
                    projectResult,
                    projectNote,
                    whoHoldEvent,
                    whoHoldEventDifferent
                }
            ]
        };
        axios.post('https://database-knrtu.firebaseio.com/data.json', newState );
        store.dispatch(addPersonData( newState ));
        window.location.reload();
    }  

    render() {

        return (
            <DocGrid cols={2}>
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
                    <Col>Номер заявки</Col>
                    <Col>
                        <input 
                            type="text" 
                            value={ this.state.requestNumber } 
                            onChange={ this.handleChangeRequestNumber } 
                            name="requestNumber" /> 
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
                    <Col>Примечание</Col>
                    <Col>
                        <textarea 
                            type="text" 
                            cols="60"
                            rows="4"
                            value={ this.state.projectNote } 
                            onChange={ this.handleChangeProjectNote } 
                            name="projectNote" /> 
                    </Col>
                </Row>
                <Row>
                    <Col>Провел мероприятие</Col>
                    <Col>
                        <Select 
                            name="select-person"
                            options={whoHoldEvent} 
                            className="select"
                            onChange={this.handleChangeWhoHoldEvent}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <small className="font-italic">
                            *Заполняется, если в списке "Провел мероприятие"
                            <br />не найдено нужное значение
                        </small>
                    </Col>
                    <Col>
                        <input 
                            type="text" 
                            value={ this.state.whoHoldEventDifferent } 
                            onChange={ this.handleChangeWhoHoldEventDifferent } 
                            name="whoHoldEventDifferent" /> 
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

export default FiftyIdeas;