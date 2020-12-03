import { connect } from 'react-redux';
import Game from '../components/games'

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(Game)