$(document).ready(function () {
	// Api
  var apibase = "https://lichess.org/api";
  
  
  
  //config
  var mode = "blitz";
  var username = "oyvindmal";
  
  
  
  var apiurl = apibase + "/user/" + username;
  
 	$.getJSON(apiurl, function(data)
  {
  	var elo = data.perfs.blitz.rating;
    var prog = data.perfs.blitz.prog;
      
	$("#currentElo").text(elo);

  $("#currentProgr").text(prog);
  
  })

    $("#currentMode").text(mode);
})