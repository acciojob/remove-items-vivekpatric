//your JS code here. If required.
let button=document.getElementsByTagName("input")[0];
button.addEventListener('click',removee);

function removee() {
	const option=document.getElementById("colorSelect").value;
	document.getElementById(option).remove();
	//return false;
}
// const submit = document.getElementsByTagName("input")[0];
// submit.addEventListener('click', ()=>{
// 	const value = document.getElementById("colorSelect").value;
// 	document.getElementById(value).remove();
// })