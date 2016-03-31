var React = require('react');
var PropTypes = React.PropTypes;

var NewsPic = require('./NewsPic');
var NewsData = require('./NewsData');

var News = React.createClass({
    propTypes: {
        news: PropTypes.object.isRequired
    },
    render: function () {
        return (
            <div style={{width:570 + 'px', overflow: 'hidden', background: '#fff', boxShadow: '#ccc 5px 10px 20px'}}>
                <NewsPic imageUrl={this.props.news.image} imageAlt={this.props.news.title}/>
                <NewsData news={this.props.news}/>
            </div>
        )
    }
});

module.exports = News;