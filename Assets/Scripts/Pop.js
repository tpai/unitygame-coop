#pragma strict

import ObjectPool;
import System.Collections.Generic;

var memberPrefab : GameObject;
var memberPool : List.<GameObject>;
var memberAmount : int;
var memberParent : Transform;

function Start () {
	ObjectPooling (memberPrefab, memberPool, memberAmount, "Member", memberParent);
}

private var obja : GameObject;
private var objb : GameObject;

function Update () {
	if(!CountDown.win) {
		if(Input.GetButtonDown("Fire1") && transform.name == "PopA") {
			obja = ObjectPlacing (memberPool, transform.localPosition, transform.localRotation, memberParent);
		}
		
		if(Input.GetButtonDown("Jump") && transform.name == "PopB") {
			objb = ObjectPlacing (memberPool, transform.localPosition, transform.localRotation, memberParent);
		}
	}
}