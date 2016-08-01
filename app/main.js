// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header')
var Footer = require('./components/Footer')
var Movies = require('./components/movies.js')
var BackboneModule = require('./controller/mods.js')
var frog = new BackboneModule({id: 'harvey'})


var Test = React.createClass({
  getInitialState: function () {
    return {
    poster: [],
    title: []  }
  },
  getData: function (text){
    frog.id = text
    posterArray = this.state.poster
    titleArray = this.state.title
    frog.fetch().then(data => {
      posterArray.push(data.Poster)
      titleArray.push(data.Title)
      this.setState({poster: posterArray, title: titleArray})
    })
  },
  handleUserInput: function (e) {
    this.setState({userInput: 'hello', movie: 'Nick Is Cool'})
  },
  render: function () {
    return (
      <div>
        <Header onSubmit={this.getData}/>
        <Movies poster={this.state.poster} title={this.state.title}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Test />,
  document.getElementById('example')
);
