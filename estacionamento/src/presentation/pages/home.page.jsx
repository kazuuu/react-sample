import { alterarNumeroMinimo } from "domain/store/actions/numeros.action";
import React from "react";
import { connect } from 'react-redux';

import AboutPage from "./about.page"
import { 
    Button,
    Container,
    Col,
    Row
} from 'react-bootstrap';

const HomePage = props => {

    const { min, max } = props;

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2}>1 of 1</Col>
                    <Col md={5}>1 of 1</Col>
                    <Col md={5}>1 of 1</Col>
                </Row>
            </Container>
            <aside className="HomePage">
                Home Page ss { min }
                <button onClick={ () => {
                    console.log("btnNumeroMinimo");
                    props.alterarMinimo(min + 1) 
                    console.log(min);
                }}>Add</button>

                <AboutPage />

            </aside>    
            <Button>Show Toast</Button>
        </>
    )}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(HomePage);