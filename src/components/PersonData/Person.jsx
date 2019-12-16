import './Person.scss';
import React from 'react';
import formatDate from '../../utils/formatDate';
import { DocGrid, Row, Col } from '../../partials/DocGrid';
import Select from 'react-select';
import ProgramUMNIK from './Directions/ProgramUMNIK';
import FiftyIdeas from './Directions/FiftyIdeas';

class PersonalData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            middleName: '',
            telephone: '',
            position: '',
            email: '',
            university: '',
            department: '',
            status: '',
            dateRegistration: formatDate(new Date()),
            direction: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.middleNameChange = this.middleNameChange.bind(this);
        this.telephoneChange = this.telephoneChange.bind(this);
        this.positionChange = this.positionChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.universityChange = this.universityChange.bind(this);
        this.departmentChange = this.departmentChange.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.handleChangeOnSelect = this.handleChangeOnSelect.bind(this);

    };

    handleSubmit(e) {
        e.preventDefault();
    }

    firstNameChange(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    lastNameChange(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    middleNameChange(e) {
        this.setState({
            middleName: e.target.value
        })
    }

    telephoneChange(e) {
        this.setState({
            telephone: e.target.value
        })
    }

    positionChange(e) {
        this.setState({
            position: e.target.value
        })
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    universityChange(e) {
        this.setState({
            university: e.target.value
        })
    }

    departmentChange(e) {
        this.setState({
            department: e.target.value
        })
    }

    statusChange(e) {
        this.setState({
            status: e.target.value
        })
    }

    handleChangeOnSelect( selectedOption ) {
        if ( selectedOption ) {
            this.setState({ direction: selectedOption.value })
        }
    }
  

    render() {

        const options = [
            { value: '50 идей', label: '50 идей' },,
            { value: `Программа "УМНИК"`, label: 'Программа "УМНИК"' }
          ];

        // TODO: const { lastName, firstName, ... } = this.state;
        const { direction } = this.state;

        return (
            <form className="person" onSubmit={ this.handleSubmit }>
                <DocGrid cols={3}>
                    <Row>
                        <Col style={{ paddingLeft: "30px" }}>
                            <label>Фамилия</label> 
                            <input type="text" value={ this.state.lastName } onChange={ this.lastNameChange } name="lastName" />    
                        </Col>
                        <Col style={{ paddingLeft: "30px" }}>
                            <label>Имя</label>
                            <input type="text" value={ this.state.firstName } onChange={ this.firstNameChange } name="firstName" /> 
                        </Col>
                        <Col style={{ paddingLeft: "30px" }}>
                            <label>Отчество</label>
                            <input type="text" value={ this.state.middleName } onChange={ this.middleNameChange } name="middleName" /> 
                        </Col>
                    </Row>
                </DocGrid> 

                <DocGrid cols={2}>
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Контактный телефон</label>
                        </Col>
                        <Col>
                            <input type="text" value={ this.state.telephone } onChange={ this.telephoneChange } name="telephone" /> 
                        </Col>      
                    </Row>
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Должность</label>
                        </Col>
                        <Col>
                            <input type="text" value={ this.state.position } onChange={ this.positionChange } name="position" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Электронная почта</label>
                        </Col>
                        <Col>
                            <input type="text" value={ this.state.email } onChange={ this.emailChange } name="email" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Университет</label>
                        </Col>
                        <Col>
                            <input type="text" value={ this.state.university } onChange={ this.universityChange } name="university" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Кафедра</label>
                        </Col>
                        <Col>
                            <input type="text" value={ this.state.department } onChange={ this.departmentChange } name="department" /> 
                        </Col>
                    </Row>    
                    <Row>
                        <Col style={{ paddingLeft: "30px"}}>
                            <label>Статус</label>
                        </Col>
                        <Col>
                            <input type="text" value={ this.state.status } onChange={ this.statusChange } name="status" /> 
                        </Col>
                    </Row>  
                </DocGrid>

                <DocGrid cols={1}>
                    <Row>
                        <Col>
                            <Select 
                                name="select-direction"
                                options={options} 
                                className="person__select"
                                onChange={this.handleChangeOnSelect}
                            />
                        </Col>
                    </Row>
                </DocGrid>

                { direction === 'Программа "УМНИК"' && <ProgramUMNIK personData={ this.state } /> }
                { direction === '50 идей' && <FiftyIdeas personData={ this.state }/> }

            </form>
        )
    }
};

export default PersonalData;
