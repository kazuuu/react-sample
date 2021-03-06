import React from "react";
import { connect } from 'react-redux';
import { 
    Button,
    Container,
    Col,
    Row
} from 'react-bootstrap';
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { UserModel } from "../../../domain/models";
import { setCurrentUser, signIn } from "../../../domain/store/auth/auth.action";
// import { RootState } from "../../../domain/store/store.config";

interface HomeState {
    currentUser: UserModel
}

interface HomeProps extends RouteComponentProps<any> {
    currentUser: UserModel,
    setCurrentUser(username: string, email: string): any,
    signIn(username: string, password: string): any,
}

class HomePage extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
      super(props);
    }

    public render(): JSX.Element {     
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={2}>
                            HomePage
                        </Col>
                        <Col md={2}>
                            <Link to="/about">[AboutPage]</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Button onClick={() => {this.props.setCurrentUser("homeUser", "homeUser@teste.com");}}>setHomeUser</Button>
                            <Button onClick={() => {this.props.signIn("user1", "123");}}>SignIn</Button>
                        </Col>
                        <Col md={2}>
                            { this.props.currentUser.username}<br />
                            { this.props.currentUser.email}
                        </Col>
                    </Row>
                </Container>                
            </>

        )
    }
}

const connectModule = connect(
    (state: any) => ({
        currentUser: state.authReducer.currentUser
    }),
    (dispatch, ownProps) => ({
        setCurrentUser(username: string, email: string) {
            const action = setCurrentUser(username, email);
            dispatch(action);
        },
        signIn(username: string, password: string) {
            signIn(username, password);
            // const action = signIn(username, password);
            // dispatch(action);
        }
    }),
)(HomePage);
  
export default withRouter(connectModule);