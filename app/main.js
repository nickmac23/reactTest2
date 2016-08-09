// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var MusicList = require('./components/musicList.js')
var Header = require('./components/header.js')

var Main = React.createClass({
  getInitialState: function () {
    return {
      socket: io.connect('https://fathomless-falls-33454.herokuapp.com/'),
      musicList: [],
      currentSong: [],
      img: '',
      order: '',
    }
  },
  componentDidMount: function () {
    var self = this
    this.state.socket.emit('server', {to: 'electron', room: 'nick', info: 'client wants data!'})
    this.state.socket.on('nick' + 'client', function (data) {
      self.setState({musicList: data.list, currentSong: [data.music], img: data.image, order: data.order})
      console.log(data);
    })
  },
  render: function () {
    return (
      <div>
      <Header currentSong={this.state.currentSong} img={this.state.img} order={this.state.order}/>
      <MusicList musicList={this.state.musicList}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Main />,
  document.getElementById('example')
);
