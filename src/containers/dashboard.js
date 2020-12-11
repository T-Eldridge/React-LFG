import { connect } from "react-redux";
import Dashboard from "../components/dasboard";
import { setFavGameObj, addFav } from "../redux/actions";
// import add and remove favorites

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
