requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'q': '../lib/bower_components/q/q',
    'moment': '../lib/bower_components/moment/min/moment.min',
    'fullpage': '../lib/bower_components/fullpage.js/jquery.fullPage.min'
  },
  shim: {
    'bootstrap': ['jquery'],
  }
});

requirejs(["dependencies", "get-deck", "start-game", "get-card", "scroll-to-draw"], function(dependencies, getDeck, startGame, getCard, scrollDraw) {
  
});