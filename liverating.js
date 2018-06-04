var apibase = "https://lichess.org/api";

$(document).ready(function () {
	// Api
 
  
  
  //config
  var mode = "blitz";
  var username = "oyvindmal";
  getLiveRating(username);
  setInterval(function() {
    getLiveRating(username)
  }, 30000);
  
 
    $("#currentMode").text(mode);
})

function getLiveRating(user)
{
    var apiurl = apibase + "/user/" + user;
    
    console.log("Getting data");
       $.getJSON(apiurl, function(data)
    {
        var elo = data.perfs.blitz.rating;
      var prog = data.perfs.blitz.prog;

        
      $("#currentElo").text(elo);
        var icon = $("#icon");
    $("#currentProgr").text(prog);
    if(prog === 0)
        {
            icon.attr('class', 'iconEqual');
        }

        if(prog > 0)
            {
                icon.attr('class', 'iconPositive');
            }
            if(prog < 0)
                {
                    icon.attr('class', 'iconNegative');
                }
    })
  
}