import { connect } from "react-redux";
import Navigation from "../components/navigation";

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        user: state.user,
    };
};

export default connect(mapStateToProps)(Navigation);