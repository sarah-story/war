requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'q': '../lib/bower_components/q/q',
    'moment': '../lib/bower_components/moment/min/moment.min',
    'fullpage': '../lib/bower_components/fullpage.js/jquery.fullPage.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["jquery", "fullpage", "dependencies", "get-deck", "start-game", "get-card", "draw-card", "scroll-to-draw"], function($, fullpage, dependencies, getDeck, startGame, getCard, drawCard, scrollDraw) {
  
});