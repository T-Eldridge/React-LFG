import { connect } from "react-redux";
import Dashboard from "../components/dasboard";
import { getUserFavorites } from "../redux/actions";
// import add and remove favorites

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(Dashboard);
