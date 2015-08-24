define(function(require) {
  var $ = require("jquery");
  var Q = require("q");

  return function(id) {
    var deferred = Q.defer();
    $.ajax({
      url: "http://deckofcardsapi.com/api/deck/"+id+"/draw/?count=1"
    })
    .done(function(json_data) {
      // Now we can resolve the promise and send the data
      deferred.resolve(json_data);
    })
    // XHR failed for some reason
    .fail(function(xhr, status, error) {
      // Since the call failed, we have to reject the promise
      deferred.reject(error);
    });

    return deferred.promise;
  };
});