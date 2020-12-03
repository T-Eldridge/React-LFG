import { connect } from 'react-redux'
import Dashboard from '../components/dasboard'
// import add and remove favorites 

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Dashboard)