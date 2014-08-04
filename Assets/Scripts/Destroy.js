#pragma strict

function OnTriggerEnter2D (other : Collider2D) {
	other.gameObject.SetActive(false);
}