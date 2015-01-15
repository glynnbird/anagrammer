var generateDigest = function(str) {
  str = str.toLowerCase().replace(/[\-',\./%\? ]/g,"");
  return str.split("").sort().join("");
}; 

var solve = function(letters, callback) {
  var url = "https://reader.cloudant.com/anagrammer/_design/fetch/_view/byDigest?key=%22"+generateDigest(letters)+"%22";
  $.ajax({url: url,
          method: "GET",
          dataType: "json",
          success: function(data) {
            // store the id + rev so we can update the stats at the end of the quiz
            callback(null,data);
          }           
        });  
};

var getAnagram = function() {
  
  var letters = $('#letters').val();
  solve(letters, function(err, data) {
    var html = "";
    if(data.rows && data.rows.length>0) {
      html += "Solutions for '" + letters + "':";
      html += "<ul>"
      for(var i in data.rows) {
        html += "<li>" + data.rows[i].id + "</li>";
      }
      html += "</ul>";
    } else {
      html = "sorry, no solution found for '" + letters + "'";
    }
    $('#solution').html(html);
  });  
  return false;
}