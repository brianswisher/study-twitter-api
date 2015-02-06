require("../../stylesheets/study-twitter-api/main.css");

var $ = require('jquery');
var keymaster = require('keymaster');
var _ = require('lodash');
// var data = preload_data;

var React = require('react');

module.exports =
  React.createClass({

    displayName: 'StudyTwitterApi',

    render:function(){
      return (
        <div className="app">
          study twitter api
        </div>
      )
    }
  });
