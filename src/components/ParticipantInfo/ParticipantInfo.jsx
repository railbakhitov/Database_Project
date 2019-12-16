import '../PersonData/Person.scss';
import React from 'react';
import Select from 'react-select';
import { DocGrid, Row, Col } from '../../partials/DocGrid';
import { connect } from 'react-redux';

class ParticipantInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        const { currentID, data } = this.props;

        // TODD: менять значение isDisabled по нажатию кнопки, изменить данные
        const isDisabled = true;

        // TODO: упросить запись снизу
        let personData = data.filter(person => Object.keys(person).join() === currentID);
            personData = personData.slice().shift();
            personData = Object.values(personData).slice().shift();

            
        let { projects = [] } = personData;
              projects = projects.slice().shift() || {};

        return (
            <form className="person" onSubmit={ this.handleSubmit }>
                <DocGrid cols={3}>
                    <Row>
                        <Col style={{ paddingLeft: "30px" }}>
                            <label>Фамилия</label> 
                            <input type="text" disabled={isDisabled} value={ personData.lastName } name="lastName" />    
                        </Col>
                        <Col style={{ paddingLeft: "30px" }}>
                            <label>Имя</label>
                            <input type="text" disabled={isDisabled} value={ personData.firstName } name="firstName" /> 
                        </Col>
                        <Col style={{ paddingLeft: "30px" }}>
                            <label>Отчество</label>
                            <input type="text" disabled={isDisabled} value={ personData.middleName } name="middleName" /> 
                        </Col>
                    </Row>
                </DocGrid> 

                <DocGrid cols={2}>
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Контактный телефон</label>
                        </Col>
                        <Col>
                            <input type="text" disabled={isDisabled} value={ personData.telephone } name="telephone" /> 
                        </Col>      
                    </Row>
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Должность</label>
                        </Col>
                        <Col>
                            <input type="text" disabled={isDisabled} value={ personData.position } name="position" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Электронная почта</label>
                        </Col>
                        <Col>
                            <input type="text" disabled={isDisabled} value={ personData.email } name="email" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Университет</label>
                        </Col>
                        <Col>
                            <input type="text" disabled={isDisabled} value={ personData.university } name="university" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Кафедра</label>
                        </Col>
                        <Col>
                            <input type="text" disabled={isDisabled} value={ personData.department } name="department" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Статус</label>
                        </Col>
                        <Col>
                            <input type="text" disabled={isDisabled} value={ personData.status } name="status" /> 
                        </Col>
                    </Row>  
                </DocGrid>

                <DocGrid cols={1}>
                    <Row>
                        <Col>
                            <Select 
                                name="select-direction"
                                isDisabled={isDisabled}
                                /* options={options}  */
                                className="person__select"
                                value={ projects.directionName }
                            />
                        </Col>
                    </Row>
                </DocGrid>

                <DocGrid cols={2}>
                <Row>
                    <Col>Название проекта</Col>
                    <Col>
                        <textarea 
                            type="text" 
                            cols="60"
                            rows="4"
                            disabled={isDisabled}
                            value={ projects.projectName } 
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
                            disabled={isDisabled}
                            value={ projects.projectDirection } 
                            name="projectDirection" /> 
                    </Col>
                </Row>
                <Row>
                    <Col>Финансы</Col>
                    <Col>
                        <input 
                            type="text" 
                            disabled={isDisabled}
                            value={ projects.projectFinance } 
                            name="projectFinance" /> 
                    </Col>
                </Row>
                <Row>
                    <Col>Результат</Col>
                    <Col>
                        <input 
                            type="text" 
                            disabled={isDisabled}
                            value={ projects.projectResult } 
                            name="projectResult" /> 
                    </Col>
                </Row>
                <Row>
                    <Col>Год проведения</Col>
                    <Col>
                        <input 
                            type="text" 
                            disabled={isDisabled}
                            value={ projects.projectYear } 
                            name="projectYear" /> 
                    </Col>
                </Row>
            </DocGrid>

            </form>
        )
    }
};

function msp(state) {
    const {personData, currentParticipant} = state;
    return {
        'data': personData,
        'currentID': currentParticipant
    }
}

export default connect(msp, null)(ParticipantInfo);
