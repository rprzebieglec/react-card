var React = require('react');
var PropTypes = React.PropTypes;

var styles = {background: '#ABB7B7', height: 280, overflow: 'hidden'};
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
            this.setState({imageSrc: image.src});
        }.bind(this);
        return (
            <div style={styles}>
                <img src={this.state.imageSrc} alt={this.props.title}/>
            </div>
        );
    }
});


module.exports = NewsPic;