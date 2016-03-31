var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <News news="{news}"/>
            </div>
        );
    }
});

module.exports = Home;
