var React = require('react')


var MusicList = React.createClass({
  getInitialState: function () {
    return {
      socket: io.connect('https://fathomless-falls-33454.herokuapp.com/')
    }
  },
  handleClick: function (music) {
    var data = {command:'play',path:music.path,index:music.index,from:'socket'}
    this.state.socket.emit('server', {to: 'electron', room: 'nick', info: data})
  },
  render: function () {
    var self = this
    var musicItems = self.props.musicList.map(function (music) {
      var artists = music.artist.map(function (artist){
        return (
          <span key={music.index}>{artist}</span>
        )
      })
      var genres = music.genre.map(function (genre){
        return (
          <span key={music.index}>{genre}</span>
        )
      })
      return (
        <tr onClick={self.handleClick.bind(null, music)}
        key={music.index}>
          <td>{music.title}</td>
          <td>{music.album}</td>
          <td>{artists}</td>
          <td>{genres}</td>
        </tr>
      )
    })
    return (
      <table>
        <tbody >
          {musicItems}
        </tbody>
      </table>
    )
  }
})


module.exports = MusicList;
