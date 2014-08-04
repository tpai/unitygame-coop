#pragma strict

static var winner : String;
private var showed : boolean;
private var done : boolean;
var teamA_photo : GameObject;
var teamB_photo : GameObject;

function Awake () {
	DontDestroyOnLoad (transform.gameObject);
}

function Start () {
	showed = true;
	done = false;
}

function Update () {
	
	if(Application.loadedLevel == 2) {
		showed = false;
	}
	else {
		guiText.text = "";
	}
	
	if(!showed && !done) {
		WinnerShow ();
	}
}

function WinnerShow () {
	done = true;
	guiText.text = "Winner is";
	yield WaitForSeconds(1);
	switch(winner) {
		case "A":
			Instantiate(teamA_photo, Vector3(0, 4, 0), transform.rotation);
			break;
		case "B":
			Instantiate(teamB_photo, Vector3(0, 4, 0), transform.rotation);
			break;
	}
}