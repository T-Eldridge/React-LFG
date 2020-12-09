import { connect } from "react-redux";
import HandleLogin from "../components/handlelogin";
import { setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleLogin);
