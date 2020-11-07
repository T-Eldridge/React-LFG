import { connect } from 'react-redux';
import Login from "../components/login";
import { login, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (bool) => dispatch(login(bool)),
        setUser: (username) => dispatch(setUser(username)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)