#pragma strict

import System.Collections.Generic;

static function ObjectPooling (objPrefab : GameObject, pool : List.<GameObject>, amount : int, name : String, parent : Transform) { // try remove parent
	var obj : GameObject;
	for(var i=0;i<amount;i++) {
		obj = Instantiate(objPrefab);
		obj.name = name+" "+i;
		obj.transform.parent = parent;
		obj.SetActive(false);
		pool.Add(obj);
	}
}

static function ObjectPlacing (pool : List.<GameObject>, position : Vector3, rotation : Quaternion, parent : Transform) {
	var obj : GameObject;
	for(var k=0;k<pool.Count;k++) {
		obj = pool[k];
		if(!obj.activeInHierarchy) {
			obj.transform.position = position;
			obj.transform.rotation = rotation;
			obj.transform.parent = parent;
			obj.SetActive(true);
			return obj;
			break;
		}
	}
}

static function ObjectPlacing2 (pool : List.<GameObject>, name : String) {
	var obj : GameObject;
	for(var k=0;k<pool.Count;k++) {
		obj = pool[k];
		if(!obj.activeInHierarchy) {
			obj.SetActive(true);
			obj.name = name;
			return obj;
			break;
		}
	}
}