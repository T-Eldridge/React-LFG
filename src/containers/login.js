import { connect } from "react-redux";
import App from "../components/login";
import { loginUser, addUser, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    userPassword: state.userPassword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    addUser: (user) => dispatch(addUser(user)),
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
