function age_calc()
{
var birthyear= prompt("What year were you born?");;
var t=new Date();
var current_year= t.getFullYear();
var res=(current_year-birthyear)*365;
//window.alert(res);
var h1= document.createElement('h1');
var textAnswer=document.createTextNode("You are "+res+" days old.");
h1.setAttribute('id','hid');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);





}
function reset()
{
	document.getElementById('hid').remove();
}