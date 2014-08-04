#pragma strict

var min : int;
var max : int;
var damage : int;
var defly : int;
var photo : Sprite [];
private var anim : Animator;

function OnEnable () {
	GetComponent(SpriteRenderer).sprite = photo[Random.Range(0, photo.Length)];
}

function Start () {
	anim = GetComponent(Animator);
}

function Update () {
	rigidbody2D.AddForce(Vector2(Random.Range(min, max), Random.Range(min-defly, max-defly)));
}

function OnTriggerEnter2D (other : Collider2D) {
	if(other.tag == "brick") {
		anim.SetTrigger("Crash");
		var dmg : int = Random.Range(1000, damage);
		CountDown.total -= dmg;
		GameObject.Find("A").SendMessage("Add", dmg);
	}
}

function Clear () {
	gameObject.SetActive(false);
	GetComponent(SpriteRenderer).sprite = photo[Random.Range(0, photo.Length)];
}