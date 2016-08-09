var React = require('react')


var Header = React.createClass({
  render: function () {
    var songObj = this.props.currentSong[0]
    console.log(songObj);
    return (
      <header id='header'>
        <div className="media">
          <a className="media-left" href="#">
            <img className="media-object pic" id='small' src={this.props.img} alt="Generic placeholder image" />
          </a>
          <div className="media-body">
            <br />
            <h4 className="media-heading">{!!songObj ? songObj.title : null}</h4>
            <span>{!!songObj ? songObj.album : null}</span><span> {!!songObj ? songObj.artist[0] : null}</span>
            <br />
            <br />
            <label >Volume <input type="range" /></label>
            <div className="arrows">
              <span className="glyphicon glyphicon-backward hoveron" aria-hidden="true" ></span>
              <span className="glyphicon glyphicon-play hoveron" aria-hidden="true"></span>
              <span className="glyphicon glyphicon-pause hoveron" aria-hidden="true"></span>
              <span className="glyphicon glyphicon-forward hoveron" aria-hidden="true"></span>
            </div>
          </div>
          <div className='media-right list'>
            <h6 ><a href="http://nickpmacintyre.firebaseapp.com">By Nick MacIntyre</a></h6>
            <form className="inputs">
                <div className="input-group">
                  <input type="text" className="form-control inputs" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="submit"> channel</button>
                  </span>
                </div>
            </form>

            <a className='inputs' href="#">"vm.room"</a>
            <input type="text" className="form-control inputs"  />

          <h5>
            <span className='hoveron' style={this.props.order == 'title' ? {color: 'yellow'} : null} >Title</span>
            <span className='hoveron' style={this.props.order == 'album' ? {color: 'yellow'} : null} > Album</span>
            <span className='hoveron' style={this.props.order == 'artist' ? {color: 'yellow'} : null} > Artist</span>
            <span className='hoveron' style={this.props.order == 'genre' ? {color: 'yellow'} : null} > Genre</span>
          </h5>
          </div>
          </div>
      </header>
    )
  }
})

module.exports = Header
