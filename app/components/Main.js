var React = require('react');
var News = require('./News');

var news = {
    "_id": "56fbeba95792e2022370fd56",
    "title": "Wisła Kraków trenuje (prawie) w komplecie. Brakuje tylko Donalda Guerriera",
    "image": "http://bi.gazeta.pl/im/54/c0/12/z19664468D.jpg",
    "link": "http://www.krakow.sport.pl/sport-krakow/1,115698,19839562,wisla-krakow-trenuje-prawie-w-komplecie-brakuje-tylko-donalda.html",
    "source_id": {
        "_id": "555b72732466592902353a0c",
        "name": "Sport.PL",
        "url": "http://www.krakow.sport.pl/sport-krakow/0,115698.html"
    },
    "__v": 0,
    "updated_at": "2016-03-30T15:07:21.916Z"
};

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <News news={news}/>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
