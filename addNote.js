
var Save=function(name,value){
  this.name=name;
  this.value=value;
}
var saved=[];
function addNote(){
           var State=function(bold,italic){
           	 this.bold=bold;
           	 this.italic=italic;
             
            };
    var state=new State(false,false);  //to retain state of each and every note
  

	var textArea=document.createElement("TEXTAREA");
    var deletebtn=document.createElement("BUTTON");
    var savebtn=document.createElement("BUTTON");
    var boldbtn=document.createElement("BUTTON");
    var italicbtn=document.createElement("BUTTON");
    var colorchng = document.createElement("INPUT");
    var colorchngbtn=document.createElement("BUTTON");
    var openfile=document.createElement("BUTTON");

    



    //Text Area Properties
	//textArea.style.backgroundColor = "yellow";
	textArea.style.fontSize="40";
	textArea.setAttribute("rows","5");
	textArea.setAttribute("cols","15");
	textArea.style.cssText="font-size:30px;  background-color: yellow;";

	
    //Button properties
    deletebtn.innerHTML="Close";
    deletebtn.style.backgroundColor="yellow";
    deletebtn.style.color="black";
    deletebtn.setAttribute("onclick","deleteNote(this);");

    savebtn.innerHTML="Save";
    savebtn.style.backgroundColor="yellow";
    savebtn.style.color="black";
    savebtn.setAttribute("onclick","saveNote(this);");
    

   // colorchng.innerHTML="Color";
   // colorchng.style.backgroundColor="yellow";
   // colorchng.style.color="black";
    colorchng.setAttribute("type", "color");
    colorchng.setAttribute("value","#ffff00");
    colorchngbtn.innerHTML="Change color";
    colorchngbtn.style.backgroundColor="yellow";
    colorchngbtn.style.color="black";
    colorchngbtn.setAttribute("onclick","changeColor(this)");
    

    boldbtn.innerHTML="B";
    boldbtn.style.backgroundColor="yellow";
    boldbtn.style.color="black";
    boldbtn.onclick = function() {makeBold(this,state);};

    italicbtn.innerHTML="I";
    italicbtn.style.backgroundColor="yellow";
    italicbtn.style.color="black";
    italicbtn.onclick = function() {makeItalic(this,state);};

    openfile.innerHTML="Open";
    openfile.style.backgroundColor="yellow";
    openfile.style.color="black";
    openfile.onclick = function(){ openSavedFile(this);};



    //Insert rows and columns in table
	var table=document.getElementById("notes");
	var row1 = table.insertRow(table.rows.length);
	var row2 = table.insertRow(table.rows.length);
	var row3 = table.insertRow(table.rows.length);
    var cell1 = row1.insertCell(0);
	var cell2 = row2.insertCell(0);
	var cell3 = row3.insertCell(0);


    //Append items in rows and columns of table    
    cell1.appendChild(deletebtn);
    cell1.appendChild(savebtn);
    cell1.appendChild(colorchng);
    cell1.appendChild(colorchngbtn);
    cell2.appendChild(textArea);
    cell3.appendChild(boldbtn);
    cell3.appendChild(italicbtn);
    cell3.appendChild(openfile);


	


}
function deleteNote(cellItem){
	var index=cellItem.parentNode.parentNode.rowIndex;
    document.getElementById("notes").deleteRow(index);
    document.getElementById("notes").deleteRow(index);
    document.getElementById("notes").deleteRow(index);
}

function saveNote(savebtn){
	var name=prompt("Please enter name of the file:","");
	if(name==null || name==""){
       alert("Please enter name of the file to be saved");
	}else{
	   var index=savebtn.parentNode.parentNode.rowIndex;
       var table=document.getElementById("notes");
       var text=table.rows[index+1].cells[0].childNodes[0].value;
       var save=new Save(name,text);
       saved.push(save);
       //console.log(saved);
       

	}
}
function openSavedFile(openbtn){
	
	var name=prompt("Enter filename to open:","");
	if(name==null || name==""){
       alert("Please type something");
	}else {
          var flag="";
          
          for(note of saved)
          {
          	 //console.log(note.name);	
          	if(note.name==name){
          		flag=note.value;
          		break;
          	}
          }

          if(flag!="")
          {
          	var index=openbtn.parentNode.parentNode.rowIndex;
            var table=document.getElementById("notes");
            table.rows[index-1].cells[0].childNodes[0].value=flag;
          }else{
          	alert("no file with this name exists");
          }

	   
   
       

	}
}

function makeBold(boldbtn,state){
		
	var index=boldbtn.parentNode.parentNode.rowIndex;
	var table=document.getElementById("notes");
	var color=table.rows[index-2].cells[0].childNodes[2].value;
	let bold=state.bold;
	let italic=state.italic;
	if(bold){
		if(italic){

        table.rows[index-1].cells[0].childNodes[0].style.cssText = " font-size:30px; font-style:italic; background-color: "+color+";";
		state.bold=false;

		}else{

        table.rows[index-1].cells[0].childNodes[0].style.cssText = " font-size:30px;  background-color: "+color+";";
		state.bold=false;

		}

	}
	else{

		if(italic){

        table.rows[index-1].cells[0].childNodes[0].style.cssText = "font-weight: bold ; font-style:italic; font-size:30px;  background-color: "+color+";";
		state.bold=true;

		}else{

        table.rows[index-1].cells[0].childNodes[0].style.cssText = "font-weight: bold ; font-size:30px;  background-color: "+color+";";
		state.bold=true;

		}
		

	  }
	

}
function makeItalic(italicbtn,state)
{
    var index=italicbtn.parentNode.parentNode.rowIndex;
	var table=document.getElementById("notes");
	var color=table.rows[index-2].cells[0].childNodes[2].value;
	let bold=state.bold,
    italic=state.italic;
	if(italic){
		if(bold){

        table.rows[index-1].cells[0].childNodes[0].style.cssText = " font-size:30px; font-weight:bold; background-color: "+color+";";
		state.italic=false;

		}else{

        table.rows[index-1].cells[0].childNodes[0].style.cssText = " font-size:30px;  background-color: "+color+";";
		state.italic=false;

		}
		
	}
	else{
		if(bold){

        table.rows[index-1].cells[0].childNodes[0].style.cssText = " font-size:30px; font-weight:bold; font-style:italic; background-color: "+color+";";
		state.italic=true;

		}else{

        table.rows[index-1].cells[0].childNodes[0].style.cssText = " font-size:30px; font-style:italic;  background-color: "+color+";";
		state.italic=true;

		}

	}

	
}		

function changeColor(erow){
	var index=erow.parentNode.parentNode.rowIndex;
	var table=document.getElementById("notes");
	var color=table.rows[index].cells[0].childNodes[2].value;
	
	for(let i=0;i<4;i++){
		if(i==2) continue;
		table.rows[index].cells[0].childNodes[i].style.cssText="background-color: "+color;
	}
	table.rows[index+1].cells[0].childNodes[0].style.backgroundColor=color;
	table.rows[index+2].cells[0].childNodes[0].style.backgroundColor=color;
	table.rows[index+2].cells[0].childNodes[1].style.backgroundColor=color;
	table.rows[index+2].cells[0].childNodes[2].style.backgroundColor=color;




}