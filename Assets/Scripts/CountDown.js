#pragma strict

static var origin : int;
static var total : int;
static var win : boolean;

function Start () {
	win = false;
	total = 100000;
	origin = total;
}

function Update () {
	if(!win) {
		guiText.text = total+"";
		
		if(total <= 0) {
			total = 0;
			GameObject.Find("Block_4").SetActive(false);
			guiText.text = "";
			win = true;
			var scoreA : int = GameObject.Find("A").GetComponent(Score).Get ();
			var scoreB : int = GameObject.Find("B").GetComponent(Score).Get ();
			if(scoreA >= scoreB) {
				Winner.winner = "A";
			}
			else  {
				Winner.winner = "B";
			}
			Application.LoadLevel(2);
		}
		else if(total <= origin * 1 / 4 && GameObject.Find("Block_3"))GameObject.Find("Block_3").SetActive(false);
		else if(total <= origin * 2 / 4 && GameObject.Find("Block_2"))GameObject.Find("Block_2").SetActive(false);
		else if(total <= origin * 3 / 4 && GameObject.Find("Block_1"))GameObject.Find("Block_1").SetActive(false);
	}
}