var playersNames = [];
var playersPossessionNumber; //player possession number is the number that represents the sum and pairy of the stats.

function fpce(){
	var playerName, accuracyShortPasses, accuracyLongPasses, accuracyTakeOns, helpMove, changeDirection, shieldAndResist, ballHandle, coachName, possessionPorcentageTeam;
	playerName = document.getElementById("playerName").value;
	accuracyShortPasses = document.getElementById("accuracyShortPasses").value;
	accuracyLongPasses = document.getElementById("accuracyLongPasses").value;
	accuracyTakeOns = document.getElementById("accuracyTakeOns").value;
	
	playersNames.push(playerName);
	
	alert(playerName + " " + accuracyShortPasses + " " + accuracyLongPasses + " " + accuracyTakeOns);
	
}