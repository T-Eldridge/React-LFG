import { connect } from "react-redux";
import SearchForm from "../components/searchForm";

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    userPassword: state.userPassword,
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(SearchForm);
