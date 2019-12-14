import '../PersonData/Person.scss';
import React from 'react';
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
        const personData = data[currentID];

        return (
            <form className="person" onSubmit={ this.handleSubmit }>
                <DocGrid cols={3}>
                    <Row>
                        <Col style={{ paddingLeft: "30px" }}>
                            <label>Фамилия</label> 
                            <input type="text" value={ personData.lastName } name="lastName" />    
                        </Col>
                        <Col style={{ paddingLeft: "30px" }}>
                            <label>Имя</label>
                            <input type="text" value={ personData.firstName } name="firstName" /> 
                        </Col>
                        <Col style={{ paddingLeft: "30px" }}>
                            <label>Отчество</label>
                            <input type="text" value={ personData.middleName } name="middleName" /> 
                        </Col>
                    </Row>
                </DocGrid> 

                <DocGrid cols={2}>
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Контактный телефон</label>
                        </Col>
                        <Col>
                            <input type="text" value={ personData.telephone } name="telephone" /> 
                        </Col>      
                    </Row>
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Должность</label>
                        </Col>
                        <Col>
                            <input type="text" value={ personData.position } name="position" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Электронная почта</label>
                        </Col>
                        <Col>
                            <input type="text" value={ personData.email } name="email" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Университет</label>
                        </Col>
                        <Col>
                            <input type="text" value={ personData.university } name="university" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Кафедра</label>
                        </Col>
                        <Col>
                            <input type="text" value={ personData.department } name="department" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Статус</label>
                        </Col>
                        <Col>
                            <input type="text" value={ personData.status } name="status" /> 
                        </Col>
                    </Row>  
                </DocGrid>

            </form>
        )
    }
};

function msp(state) {
    return {
        'data': state.personData,
        'currentID': state.currentPatricipant
    }
}

export default connect(msp, null)(ParticipantInfo);
