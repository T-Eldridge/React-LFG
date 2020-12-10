import { connect } from "react-redux";
import searchForm from "../components/searchForm";

// import add and remove favorites

const mapStateToProps = (state) => {
  console.log("muh state", state);
  return {
    userName: state.userName,
    favorites: state.favorites,
    userPassword: state.userPassword,
  };
};

export default connect(mapStateToProps)(searchForm);
