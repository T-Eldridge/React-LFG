import { connect } from 'react-redux'
import DisplayResults from '../components/displayResults'

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(DisplayResults)