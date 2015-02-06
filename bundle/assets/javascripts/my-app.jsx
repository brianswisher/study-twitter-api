require("../stylesheets/my-app.css");
require("../stylesheets/fonts.css");

var MyApp = require('./my-app/MyApp.jsx');
var React = require('react');

React.render(
  <MyApp />,
  document.getElementById('viewport')
);
