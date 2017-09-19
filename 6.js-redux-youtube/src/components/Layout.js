import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";


class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets())
    }

    render() {
        const { user, tweets } = this.props;

        if (!tweets.length) {
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
        }

        const mappedTweets = tweets.map((tweet) => <li key={tweet.id}>{tweet.text}</li>);
        console.log(mappedTweets);
        return <div>
            <h1>{user.name}</h1>
            <ul>{mappedTweets}</ul>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user,
        userFetched: state.user.fetched,
        tweets: state.tweets.tweets,
    }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps)(Layout);