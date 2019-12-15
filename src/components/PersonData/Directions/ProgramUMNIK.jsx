import React from 'react';
import { DocGrid, Row, Col } from '../../../partials/DocGrid';

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

        this.state = {
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
            </DocGrid>
        )
    }
}

export default ProgramUMNIK;