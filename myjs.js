var checks;
var count=0;
var dels;


function additem()
{
count+=1;
var upperText =document.getElementById("main-txt");
var brk = document.createElement("br");
var ipNo = document.createElement("input");
var delNo=document.createElement("input");
var editNo=document.createElement("input");
var cont2 = document.getElementById("container2");
var mainDiv = document.getElementById("container2");
var div2 = document.createElement("div");



div2.setAttribute("id","subDiv"+count);
dels="subDiv"+count;
cont2.appendChild(div2);


ipNo.setAttribute("type","text");
ipNo.setAttribute("id","txt"+count);
ipNo.setAttribute("value",upperText.value);


delNo.setAttribute("type","button");
delNo.setAttribute("id","del"+count);
delNo.setAttribute("value","Del");
delNo.setAttribute("onclick","delNode("+ div2 +")");



editNo.setAttribute("type","button");
editNo.setAttribute("id","edit"+count);
editNo.setAttribute("value","Edit");



div2.appendChild(ipNo);
div2.appendChild(delNo);
div2.appendChild(editNo);
div2.appendChild(brk);




mainDiv.insertBefore(div2 , mainDiv.firstChild);

}





function  delNode(nodeNo)

{
console.log(nodeNo);
var delItem = document.getElementById(nodeNo);
var containerTwo = document.getElementById("container2");

containerTwo.removeChild(nodeNo);

}


