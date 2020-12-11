import { connect } from "react-redux";
import SearchForm from "../components/searchForm";
import { setFavGameObj, addFav } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    userPassword: state.userPassword,
    favorites: state.favorites,
    favGameObj: state.favGameObj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFavGameObj: (fav) => dispatch(setFavGameObj(fav)),
    addFav: (fav) => dispatch(addFav(fav)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
