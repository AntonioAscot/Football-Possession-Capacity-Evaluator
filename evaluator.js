var players = [];
var coachs = [];
var playersPossessionNumber; //player possession number is the number that represents the sum and pairy of the stats.

function addPlayerStats(){
	var playerName, playerPossessionNumber, accuracyShortPasses, accuracyLongPasses, accuracyTakeOns, helpMoveGet, helpMove, changeDirectionGet, changeDirection, shieldAndResistGet, shieldAndResist, ballHandleGet, ballHandle;
	playerName = document.getElementById("playerName").value;
	accuracyShortPasses = document.getElementById("accuracyShortPasses").value;
	accuracyLongPasses = document.getElementById("accuracyLongPasses").value;
	accuracyTakeOns = document.getElementById("accuracyTakeOns").value;
	
	helpMoveGet = document.getElementsByName("helpMove");
    changeDirectionGet = document.getElementsByName("changeDirection");
	shieldAndResistGet = document.getElementsByName("shieldAndResist");
	ballHandleGet = document.getElementsByName("ballHandle");
	
	for(var i = 0; i < helpMoveGet.length; i++){
	if(helpMoveGet[i].checked){
    helpMove = helpMoveGet[i].value;
	}
	}
	for(var i = 0; i < changeDirectionGet.length; i++){
	if(changeDirectionGet[i].checked){
    changeDirection = changeDirectionGet[i].value;
	}
	}
	for(var i = 0; i < shieldAndResistGet.length; i++){
	if(shieldAndResistGet[i].checked){
    shieldAndResist = shieldAndResistGet[i].value;
	}
	}
	for(var i = 0; i < ballHandleGet.length; i++){
	if(ballHandleGet[i].checked){
    
	}
	}
	playerPossessionNumber = 0;
	players.push(playerName);
	
	alert(playerName + " " + accuracyShortPasses + " " + accuracyLongPasses + " " + accuracyTakeOns + " " + helpMove + " " + changeDirection + " " + shieldAndResist + " " + ballHandle);
	
}

function addCoachStats() { 
	var coachName, possessionPorcentageTeam;
	coachName = document.getElementById("coachName").value;
	possessionPorcentageTeam = document.getElementById("possessionPorcentageTeam").value;
	
	alert(coachName + " " + possessionPorcentageTeam);
}

var listElement = document.querySelector('#addList ul');
var buttonElement = document.querySelector('#addList button');
