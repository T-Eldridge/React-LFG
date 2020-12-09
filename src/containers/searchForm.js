import { connect } from "react-redux";
import searchForm from "../components/searchForm";

// import add and remove favorites

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    userName: state.userName,
    userPassword: state.userPassword,
  };
};

export default connect(mapStateToProps)(searchForm);
