require('./../scss/main.scss');
const React = require('react');
const ReactDOM = require('react-dom');


class setLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount }
  }

addToCount (num) {
  this.setState({count: this.state.count + num});
}

  render() {
    return (
  <div className="LikesContainer"></div>
    <h3>Likes: {this.state.count}</h3>
    <div className="ActionButtons"></div>
      <ActionButton text="Like! (+1)"
                    onAction={this.addToCount.bind(this,1)} />
      <ActionButton text="Dislike! (-1)"
                    onAction={this.addToCount.bind(this,-1)}
    )
  }
}

ReactDOM.render(<LocationButton initialCount={0} />, document.getElementById('application'))
