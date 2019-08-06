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

var counting = 0;
function addPlayerPercentageStats()
{//also add the name info
	
	players.playerName[counting] = document.getElementById("playerName").value;
	players.accuracyShortPasses[counting] = document.getElementById("accuracyShortPasses").value;
	players.accuracyLongPasses[counting] = document.getElementById("accuracyLongPasses").value;
	players.accuracyTakeOns[counting] = document.getElementById("accuracyTakeOns").value;
	counting++;
	
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
