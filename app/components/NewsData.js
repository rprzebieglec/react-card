var React = require('react');
var NewsTitle = require('./NewsTitle');
var NewsSource = require('./NewsSource');

var NewsData = React.createClass({
    render: function () {
        return (
            <div style={{padding:40, border: 'solid 1px #ddd', borderTop: '0'}}>
                <NewsTitle title={this.props.news.title}/>
                <NewsSource name={this.props.news.source_id.name}/>
            </div>
        )
    }
});

module.exports = NewsData;