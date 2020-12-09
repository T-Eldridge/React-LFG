import { connect } from "react-redux";
import Navigation from "../components/navigation";

// import add and remove favorites

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    userName: state.userName,
    userPassword: state.userPassword,
  };
};

export default connect(mapStateToProps)(Navigation);
