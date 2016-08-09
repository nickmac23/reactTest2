var React = require('react')

var footerStyle = {}

var Footer = React.createClass({
  var url = 'https://fathomless-falls-33454.herokuapp.com/'
  var socket = io.connect(url);
  socket.emit('server', {info: 'client wants data!', room: socketRoom, to: 'electron'})
  socket.on(socketRoom + 'client', function (data){
    console.log(data);
  }
  render: function () {
    return (
      <footer>this is a footer</footer>
    )
  }
})

module.exports = Footer;
