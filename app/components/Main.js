var React = require('react');
var News = require('./News');
var newses = require('json!./../newses.json');

var Main = React.createClass({
    render: function () {
        var newsesDOM = newses.map(function(news){
          return (
            <News news={news}/>
          );
        });
        return (
            <div>
                {newsesDOM}
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
