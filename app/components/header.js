var React = require('react')

var headerStyle = {
  textAlign: 'center'
}

var Header = React.createClass({
  getInitialState: function () {
    return {text: ''}
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handelSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text)
    this.setState({text: ''})
  },
  render: function () {
    return (
      <div className='jumbotron' style={headerStyle}>
        <h1>Enter a Movie!</h1>
        <form className="col-lg-6 col-lg-offset-3 input-group" onSubmit={this.handelSubmit}>
          <input type="text" className="form-control" placeholder="Search movie"
          value={this.state.text} aria-describedby="basic-addon2" onChange={this.handleTextChange} />
          <submit className="input-group-addon" id="basic-addon2">Search</submit>
        </form>
      </div>
    )
  }
});

module.exports = Header;
