import { connect } from 'react-redux';
import ImportGames from '../components/importGame'
import { fetchGames, removeEntry} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        games: state.games,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: () => dispatch(fetchGames()),
        removeEntry: (index) => dispatch(removeEntry(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportGames)