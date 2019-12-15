import React from 'react';
import { DocGrid, Row, Col } from '../../../partials/DocGrid';
import Select from 'react-select';

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

const persons = [
    { value: 'КНИТУ-КХТИ', label: 'КНИТУ-КХТИ' }
  ];

class FiftyIdeas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectYear: '',
            projectName: '',
            projectDirection: '',   
            requestNumber: '',
            projectResult: '',
            projectNote: '',
            whoHoldEvent: '',
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
        const projectResult = e.target.value;
        this.setState({ projectResult });
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
                            options={persons} 
                            className="select"
                            onChange={this.handleChangeWhoHoldEvent}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <small>*Заполняется, если в списке "Провел мероприятие"
                        <br />не найдено нужное значение</small>
                    </Col>
                    <Col>
                        <input 
                            type="text" 
                            value={ this.state.whoHoldEventDifferent } 
                            onChange={ this.handleChangeWhoHoldEventDifferent } 
                            name="whoHoldEventDifferent" /> 
                    </Col>
                </Row>

            </DocGrid>
        )
    }
}

export default FiftyIdeas;