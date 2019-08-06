var players = {
	playerName: [],
	accuracyShortPasses: [],
	accuracyLongPasses: [],
	accuracyTakeOns: [],
	helpMove: [],
	changeDirection: [], 
	shieldAndResis: [],
	ballHandle: [],
	playerId: []
};

var coachs = {
	coachName: [],
	possessionPorcentageTeam: [],
	coachId: []
	
};

var listElement = document.querySelector('#playerList ul');
var countingCoach = 0;
var countingPlayer = 0;
function addPlayerPercentageStats()
{//also add the name info
	
	players.playerName[countingPlayer] = document.getElementById("playerName").value;
	players.accuracyShortPasses[countingPlayer] = document.getElementById("accuracyShortPasses").value;
	players.accuracyLongPasses[countingPlayer] = document.getElementById("accuracyLongPasses").value;
	players.accuracyTakeOns[countingPlayer] = document.getElementById("accuracyTakeOns").value;
	players.playerId[countingPlayer] = countingPlayer;
	countingPlayer++;
}

function addPlayerSelectStats()
{
	var cbHelpMove = document.getElementById("helpMove");
	players.helpMove[countingPlayer] = cbHelpMove.options[cbHelpMove.selectedIndex].text;
	var cbchangeDirection = document.getElementById("changeDirection");
	players.changeDirection[countingPlayer] = cbchangeDirection.options[cbchangeDirection.selectedIndex].text;	
	var cbshieldAndResist = document.getElementById("shieldAndResist");
	players.shieldAndResis[countingPlayer] = cbshieldAndResist.options[cbshieldAndResist.selectedIndex].text;
	var cbballHandle = document.getElementById("ballHandle");
	players.ballHandle[countingPlayer] = cbballHandle.options[cbballHandle.selectedIndex].text;
}

function addCoachStats()
{
	coachs.coachName[countingCoach] = document.getElementById("coachName").value;
	coachs.possessionPorcentageTeam[countingCoach] = document.getElementById("possessionPorcentageTeam").value;
	coachs.coachId[countingCoach] = countingCoach;
	countingCoach++;
}
