require("../../stylesheets/my-app/main.css");

var $ = require('jquery');
var keymaster = require('keymaster');
var _ = require('lodash');
// var data = preload_data;

var React = require('react');

module.exports =
  React.createClass({

    displayName: 'MyApp',

    render:function(){
      return (
        <div className="app">
          My App
        </div>
      )
    }
  });
