require("../stylesheets/study-twitter-api.css");
require("../stylesheets/fonts.css");

var React = require('react');
var StudyTwitterApi = require('./study-twitter-api/StudyTwitterApi.jsx');

React.render(
  <StudyTwitterApi />,
  document.getElementById('viewport')
);
