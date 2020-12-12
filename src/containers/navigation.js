import { connect } from "react-redux";
import Navigation from "../components/navigation";
import { setUser } from "../redux/actions";
// import add and remove favorites

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    userName: state.userName,
    userPassword: state.userPassword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
