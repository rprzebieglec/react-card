var React = require('react');
var PropTypes = React.PropTypes;

function NewsTitle(props) {
    return (
        <h1 style={{'fontSize': '28px', 'fontFamily': 'Josefin Sans', 'fontWeight': '600', color: '#222222'}}>{props.title}</h1>
    );
}

NewsTitle.PropTypes = {
    title: PropTypes.string.isRequired
};

module.exports = NewsTitle;