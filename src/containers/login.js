import { connect } from "react-redux";
import App from "../components/login";
import { addUser, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    userPassword: state.userPassword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
