#pragma strict

var score : int;

function Start () {
	score = 0;
}

function Add (amt : int) {
	score += amt;
	if(score >= CountDown.origin)score = CountDown.origin;
}

function Get () {
	return score;
}

function Update () {
	guiText.text = score + "";
}