var React = require('react');
var PropTypes = React.PropTypes;

//function NewsPic(props) {
//    return (
//        <div style={styles}>
//            <img src="assets/svg/puff.svg" width="80" alt="" style={{marginTop: 100}}/>
//        </div>
//    );
//}
//function NewsPic(props) {
//    return (
//        <div style={styles}>
//            <img src={props.imageUrl} alt={props.title} style={{maxHeight:400}}/>
//        </div>
//    );
//}

var styles = {background: '#ABB7B7', height: 280, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'};
var imageStyles = {};
var NewsPic = React.createClass({
    propTypes: {
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {
            imageSrc: 'assets/svg/puff.svg'
        }
    },
    render: function () {
        var image = new Image();
        image.src = this.props.imageUrl;
        image.onload = function () {
          var ratio = 2.035714285714286;
          var ratio2 = image.width / image.height;
          if(ratio2 > ratio){
            imageStyles.minHeight = '100%';
              imageStyles.minWidth = 'auto';
          }else{
            imageStyles.minWidth = '100%';
              imageStyles.minHeight = 'auto';
          }
            this.setState({imageSrc: image.src});
        }.bind(this);
        return (
            <div style={styles}>
                <img src={this.state.imageSrc} alt={this.props.title} style={imageStyles}/>
            </div>
        );
    }
});


module.exports = NewsPic;
