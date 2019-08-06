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
	
<<<<<<< HEAD
	players.playerName[countingPlayer] = document.getElementById("playerName").value;
	players.accuracyShortPasses[countingPlayer] = document.getElementById("accuracyShortPasses").value;
	players.accuracyLongPasses[countingPlayer] = document.getElementById("accuracyLongPasses").value;
	players.accuracyTakeOns[countingPlayer] = document.getElementById("accuracyTakeOns").value;
	players.playerId[countingPlayer] = countingPlayer;
	

	counting++;
=======
	players.playerName[counting] = document.getElementById("playerName").value;
	players.accuracyShortPasses[counting] = document.getElementById("accuracyShortPasses").value;
	players.accuracyLongPasses[counting] = document.getElementById("accuracyLongPasses").value;
	players.accuracyTakeOns[counting] = document.getElementById("accuracyTakeOns").value;
	counting++;
	
>>>>>>> 0e5d1dc1e742de860c7ce050315aa19096575476
}

function addPlayerRadioStats()
{
	for (var i = 0; i < 4; i++)
	{
		if (i == 0)
		{
			
		} 
		if (i == 1)
		{
			
		}
		if (i == 2)
		{
			
		}
		if (i == 4)
		{
			
		}
	}
}

function addCoachStats()
{
	coachs.coachName[countingCoach] = document.getElementById("coachName").value;
	coachs.possessionPorcentageTeam[countingCoach] = document.getElementById("possessionPorcentageTeam").value;
	coachs.coachId[countingCoach] = countingCoach;

	countingCoach++;
}
