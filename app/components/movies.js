var React = require('react')

var Movies = React.createClass({
  render: function () {
    var moviesTab = []
    for (var i = 0; i < this.props.poster.length; i++) {
      moviesTab.push(
        <div className="row" key={i}>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={this.props.poster[i]} alt="..." />
              <div className="caption">
                <h3>{this.props.title[i]}</h3>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>
    )
    }
    return (
      <div>
        {moviesTab}
      </div>
    )
  }
})

module.exports = Movies
