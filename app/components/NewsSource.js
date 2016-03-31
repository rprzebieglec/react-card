var React = require('react');
var PropTypes = React.PropTypes;

function NewsSource(props) {
    return (
        <p style={{'fontSize': '16px', 'fontFamily': 'PT Serif', 'fontWeight': '400', color: 'rgba(34,34,34,0.8)'}}>{props.name}</p>
    );
}

NewsSource.PropTypes = {
    name: PropTypes.string.isRequired
};

module.exports = NewsSource;