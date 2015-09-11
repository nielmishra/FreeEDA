/*These are the flags which is used to give unique id's to line, horizontal line, vertical line */
var flag = 0;
var lineflag=0; //This is for general line
var hlineflag=0; // This is for horizontal line
var vlineflag=0; //This is for vertical line

/*----------arrays---------*/
var resistors=[];
var variableresistors=[];
var inductors=[];
var variableinductors=[];
var capacitors=[];
var variablecapacitors=[];
var grounds=[];
var batteries=[];
var currentsources=[];
var voltagesources=[];
var diodes=[];
var photodiodes=[];
var zenerdiodes=[];
var fuses=[];
var npntransistors=[];
var pnptransistors=[];
var ammeters=[];
var andgates=[];
var orgates=[];
var norgates=[];
var notgates=[];
var nandgates=[];
var xorgates=[];
var dflipflops=[];

var pot;
var pnumber;
var pstring;

/*--------------------- ARRAYS completed---------------------*/
/*--------count holding flags-----------------*/
var resistorflag=0;
var variableresistorflag=0;
var variableinductorflag=0;
var inductorflag=0;
var capacitorflag=0;
var variablecapacitorflag=0;
var groundflag=0;
var batteryflag=0;
var currentsourceflag=0;
var voltagesourceflag=0;
var diodeflag=0;
var photodiodeflag=0;
var zenerdiodeflag=0;
var fuseflag=0;
var npntransistorflag=0;
var pnptransistorflag=0;
var ammeterflag=0;
var andgateflag=0;
var orgateflag=0;
var norgateflag=0;
var notgateflag=0;
var nandgateflag=0;
var xorgateflag=0;
var dflipflopflag=0;
/*----count holding flags completed----*/

$(document).ready(function () {
    /*-----------------------FOR PROMPT------------------------------*/

$(document).on('dblclick', '.resistor1', function(evt){
//setting selectorVal
if(selectorVal==0)
{	
pstring=this.getAttribute('id'); //The value of the id attribute of the currently double clicked element will be fetched into pstring 
pot=1;//This is used for multiplication in calculating the specific id of a type.	
pnumber=0;// The numerical part of the id will be stored here

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(resistors[pnumber]!=null) //The decision whether which prompt has to be used is taken by looking at whether the resistors[pnumber]= null or not
{
current_resistance=prompt("Resistance in Kohms", resistors[pnumber]);

if(current_resistance!=null)
{
if(isNaN(current_resistance))
alert("Error: Please Enter a valid integer or fp number");
else
resistors[pnumber]=current_resistance;
}


}
else
{
current_resistance=prompt("Resistance in Kohms");
if(current_resistance != null)
{
if(isNaN(current_resistance))
alert("Error: Please Enter a valid integer or fp number");
else
resistors[pnumber]=current_resistance;
}

}
}
}

);	


$(document).on('dblclick', '.variableresistor1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(variableresistors[pnumber]!=null)
{
current_resistance=prompt("Resistance in Kohms", variableresistors[pnumber]);
if(current_resistance!=null)
{
if(isNaN(current_resistance))
alert("Error: Please enter a valid integer or fp number");
else
variableresistors[pnumber]=current_resistance;
}
}
else
{
current_resistance=prompt("Resistance in Kohms");
if(current_resistance!=null)
{
if(isNaN(current_resistance))
alert("Please Enter a valid integer or floating point number");
else
variableresistors[pnumber]=current_resistance;
}

}

}
});	


$(document).on('dblclick', '.inductor1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(inductors[pnumber]!=null)
{
current_value=prompt("Inductance in Henry", inductors[pnumber]);
if(current_value!=null)
{
if(isNaN(current_value))
alert("Error:Please enter a valid integer or floating point number");
else
inductors[pnumber]=current_value;
}

}
else
{
current_value=prompt("Inductance in Henry");
if(current_value!=null)
{
if(isNaN(current_value))
alert("Error:Please enter a valid integer or floating point number");
else
inductors[pnumber]=current_value;
}

}

}
});	

	

$(document).on('dblclick', '.variableinductor1', function(evt){

if(selectorVal==0)
{

pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(variableinductors[pnumber]!=null)
{
current_value=prompt("Inductance in Henry", variableinductors[pnumber]);
if(current_value!=null)
{
if(isNaN(current_value))
alert("Please Enter a valid integer or floating point number");
else
variableinductors[pnumber]=current_value;
}
}
else
{
current_value=prompt("Inductance in Henry");
if(current_value!=null)
{
if(isNaN(current_value))
alert("Please Enter a valid integer or floating point number");
else
variableinductors[pnumber]=current_value;
}

}

}
});	




	
$(document).on('dblclick', '.capacitor1', function(evt){

if(selectorVal==0)
{

pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(capacitors[pnumber]!=null)
{
current_value=prompt("Capacitance", capacitors[pnumber]);
if(current_value!=null)
{
if(isNaN(current_value))
alert("Error: Please Enter a valid integer or floating point number");
else
capacitors[pnumber]=current_value;
}

}
else
{
current_value=prompt("Capacitance");
if(current_value != null)
{
if(isNaN(current_value))
alert("Error: Please Enter a valid integer or floating point number");
else
capacitors[pnumber]=current_value;
}
}

}
});	
	
	
$(document).on('dblclick', '.variablecapacitor1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(variablecapacitors[pnumber]!=null)
{
current_value=prompt("Capacitance", variablecapacitors[pnumber]);
if(current_value!=null)
{
if(isNaN(current_value))
alert("Error: Please enter a valid integer or floating point number");
else
variablecapacitors[pnumber]=current_value;
}
}
else
{
current_value=prompt("Capacitance");
if(current_value != null)
{
if(isNaN(current_value))
alert("Error:Please enter a valid integer or floating point number");
else
variablecapacitors[pnumber]=current_value;
}
}

}
});	
	



$(document).on('dblclick', '.ground1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(grounds[pnumber]!=null)
{
current_value=prompt("Model No", grounds[pnumber]);
if(current_value!=null)
grounds[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
grounds[pnumber]=current_value;
}

}
});	


$(document).on('dblclick', '.battery1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(batteries[pnumber]!=null)
{
current_value=prompt("Voltage in Volts", batteries[pnumber]);
if(current_value!=null)
{
if(isNaN(current_value))
alert("Error: Please enter a valid integer or floating point number");
else 
batteries[pnumber]=current_value;
}
}
else
{
current_value=prompt("Voltage in Volts");
if(current_value !=null)//null=> cancel or close button is pressed
{
if(isNaN(current_value))
alert("Error:Please enter a valid integer or floating point number");
else
batteries[pnumber]=current_value;
}
}

}
});	
	
	

$(document).on('dblclick', '.currentsource1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

pot=1;
input1=0;
input2=0;
inputflag=0;
inputarray=[];
if(currentsources[pnumber]!=null)
{
current_value=prompt("Enter the Amplitude followed by frequency seperated by comma", currentsources[pnumber]);
if(current_value!=null)
{
for(p=current_value.length-1;p>=0;p--)
{
if(current_value[p]!=',')
{
if(inputflag==0)
{
input2=input2+parseInt(current_value[p])*pot;
pot=pot*10;
}
else
{
if(inputflag==1)
{
input1=input1+parseInt(current_value[p])*pot;
pot=pot*10;
}
}
}
else
{
inputflag=inputflag+1;
pot=1;
}
}

//alert(input1);
//alert(input2);
if(isNaN(input1) || isNaN(input2))
alert("Error: Please enter only valid integer numbers as inputs");
else
{
inputarray[0]=input1;
inputarray[1]=input2;
currentsources[pnumber]=inputarray;

}
}
}

else
{
current_value=prompt("Enter the Amplitude followed by frequency seperated by comma");
if(current_value != null)
{

for(p=current_value.length-1;p>=0;p--)
{
     if(current_value[p]!=',')
	 {
	 if(inputflag==0)
	 {
	 input2=input2+parseInt(current_value[p])*pot;
	 pot=pot*10;	 
	 }
	 else
	 {
	 input1=input1+parseInt(current_value[p])*pot;
	 pot=pot*10;
	 }
	 }
	 else
	 {
	 inputflag=1;
	 pot=1;
	 }

}

if(isNaN(input1) || isNaN(input2))
alert("Error: Please Enter only valid integer numbers as Inputs");
else
{
inputarray[0]=input1;
inputarray[1]=input2;
currentsources[pnumber]=inputarray;
}
}
}

}
});

$(document).on('dblclick', '.voltagesource1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

pot=1;
input1=0;
input2=0;
inputflag=0;
inputarray=[];
if(voltagesources[pnumber]!=null)
{
current_value=prompt("Enter the Amplitude followed by frequency seperated by comma", voltagesources[pnumber]);
if(current_value!=null)
{
for(p=current_value.length-1;p>=0;p--)
{
if(current_value[p]!=',')
{
if(inputflag==0)
{
input2=input2+parseInt(current_value[p])*pot;
pot=pot*10;
}
else
{
if(inputflag==1)
{
input1=input1+parseInt(current_value[p])*pot;
pot=pot*10;
}
}
}
else
{
inputflag=inputflag+1;
pot=1;
}
}

//alert(input1);
//alert(input2);
if(isNaN(input1) || isNaN(input2))
alert("Error: Please enter only valid integer numbers as inputs");
else
{
inputarray[0]=input1;
inputarray[1]=input2;
voltagesources[pnumber]=inputarray;

}
}
}

else
{
current_value=prompt("Enter the Amplitude followed by frequency seperated by comma");
if(current_value != null)
{

for(p=current_value.length-1;p>=0;p--)
{
     if(current_value[p]!=',')
	 {
	 if(inputflag==0)
	 {
	 input2=input2+parseInt(current_value[p])*pot;
	 pot=pot*10;	 
	 }
	 else
	 {
	 input1=input1+parseInt(current_value[p])*pot;
	 pot=pot*10;
	 }
	 }
	 else
	 {
	 inputflag=1;
	 pot=1;
	 }

}

if(isNaN(input1) || isNaN(input2))
alert("Error: Please Enter only valid integer numbers as Inputs");
else
{
inputarray[0]=input1;
inputarray[1]=input2;
voltagesources[pnumber]=inputarray;
}
}
}

}
});	

	
$(document).on('dblclick', '.diode1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(diodes[pnumber]!=null)
{
current_value=prompt("Model No", diodes[pnumber]);
if(current_value!=null)
diodes[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
diodes[pnumber]=current_value;
}

}
});	
	
$(document).on('dblclick', '.photodiode1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(photodiodes[pnumber]!=null)
{
current_value=prompt("Model No", photodiodes[pnumber]);
if(current_value!=null)
photodiodes[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
photodiodes[pnumber]=current_value;
}

}
});	
	
	
$(document).on('dblclick', '.fuse1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(fuses[pnumber]!=null)
{
current_value=prompt("Ampere Limit", fuses[pnumber]);
if(current_value!=null)
{
if(isNaN(current_value))
alert("Error: Please enter a valid integer or floating point number");
else
fuses[pnumber]=current_value;
}
}
else
{
current_value=prompt("Ampere Limit");
if(current_value!=null)
{
if(isNaN(current_value))
alert("Error:Please enter a valid integer or floating point number");
else
fuses[pnumber]=current_value;
}
}

}
});	
	
$(document).on('dblclick', '.npntransistor1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(npntransistors[pnumber]!=null)
{
current_value=prompt("Model No", npntransistors[pnumber]);
if(current_value!=null)
npntransistors[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
npntransistors[pnumber]=current_value;
}

}
});	
	
$(document).on('dblclick', '.pnptransistor1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(pnptransistors[pnumber]!=null)
{
current_value=prompt("Model No", pnptransistors[pnumber]);
if(current_value!=null)
pnptransistors[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
pnptransistors[pnumber]=current_value;
}

}
});	
	
$(document).on('dblclick', '.ammeter1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(ammeters[pnumber]!=null)
{
current_value=prompt("Model No", ammeters[pnumber]);
if(current_value!=null)
ammeters[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
ammeters[pnumber]=current_value;
}

}
});	
	
$(document).on('dblclick', '.andgate1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(andgates[pnumber]!=null)
{
current_value=prompt("Model No", andgates[pnumber]);
if(current_value!=null)
andgates[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
andgates[pnumber]=current_value;
}

}
});	
	
$(document).on('dblclick', '.orgate1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(orgates[pnumber]!=null)
{
current_value=prompt("Model No", orgates[pnumber]);
if(current_value!=null)
orgates[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
orgates[pnumber]=current_value;
}

}
});	
	
	
$(document).on('dblclick', '.norgate1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(norgates[pnumber]!=null)
{
current_value=prompt("Model No", norgates[pnumber]);
if(current_value!=null)
norgates[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
norgates[pnumber]=current_value;
}

}
});	
	
$(document).on('dblclick', '.notgate1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(currentsources[pnumber]!=null)
{
current_value=prompt("Model No", notgates[pnumber]);
if(current_value!=null)
notgates[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
notgates[pnumber]=current_value;
}

}
});	


$(document).on('dblclick', '.nandgate1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(nandgates[pnumber]!=null)
{
current_value=prompt("Model No", nandgates[pnumber]);
if(current_value!=null)
nandgates[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
nandgates[pnumber]=current_value;
}

}
});	
	

$(document).on('dblclick', '.xorgate1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(xorgates[pnumber]!=null)
{
current_value=prompt("Model No", xorgates[pnumber]);
if(current_value!=null)
xorgates[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
xorgates[pnumber]=current_value;
}

}
});	

$(document).on('dblclick', '.dflipflop1', function(evt){

if(selectorVal==0)
{
pstring=this.getAttribute('id');
pot=1;	
pnumber=0;

for(i=pstring.length-1;i>=0;i--)
{
	if(pstring[i]!='-')
	{
	pnumber=pnumber+pot*parseInt(pstring[i]);
	pot=pot*10;
	}
	else
	{
	break;
	}
}

if(dflipflops[pnumber]!=null)
{
current_value=prompt("Model No", dflipflops[pnumber]);
if(current_value!=null)
dfipflops[pnumber]=current_value;
}
else
{
current_value=prompt("Model No");
dflipflops[pnumber]=current_value;
}

}
});	


	
	
	
	
	
	var svgns = "http://www.w3.org/2000/svg"
    selectorVal = 0;
    templine= document.createElementNS(svgns, 'line');
	//alert("hello");
	
    document.getElementById("viewport").appendChild(templine);
    
	var delflag=0;
	$('#del').click(function(event){
	if(selectorVal==0 && curelem!=0 && drag1==1)
	{
	document.getElementById("viewport").removeChild(curelem);
	drag1=0;
	}
	}
	);

    var gObj = document.getElementById('viewport');

    function cursor() {
        selectorVal = 0
    }

    function resistor() {
        selectorVal = 1
    }

    function wire() {
        selectorVal = 2
    }
	function hwire() {
        selectorVal = 3
    }
	function vwire() {
        selectorVal = 4
    }

    function inductor() {
        selectorVal = 5
    }

    function ground() {
        selectorVal = 6
    }

    function capacitor() {
        selectorVal = 7
    }
	function battery() {
        selectorVal = 8
    }
	function currentsource() {
        selectorVal = 9
    }
    
    function diode() {
        selectorVal = 10
    }
    
     function fuse() {
        selectorVal = 11
    }
    function voltagesource() {
        selectorVal = 12
    }
    function npntransistor() {
        selectorVal = 13
    }
    function pnptransistor() {
        selectorVal = 14
    }
    function ammeter() {
        selectorVal = 15
    }
    function andgate() {
        selectorVal = 16
    }
    function orgate() {
        selectorVal = 17
    }
    function norgate() {
        selectorVal = 18
    }
    function notgate() {
        selectorVal = 19
    }
    function nandgate() {
        selectorVal = 20
    }
    function xorgate() {
        selectorVal = 21
    }
    function variableresistor() {
        selectorVal = 22
    }
    function variableinductor() {
        selectorVal = 23
    }
    function variablecapacitor() {
        selectorVal = 24
    }
    function photodiode() {
        selectorVal = 25
    }
    function zenerdiode() {
        selectorVal = 26
    }
    function dflipflop() {
        selectorVal = 27
    }

	/*----------------------------------PANNING AND DRAGGING-----------------------------------*/
	
	panflag=0;
	dragflag=0;
    
	$(document).on('mousemove','.svg-main',function genstretch(event) {
        console.log(event)
		
        if(selectorVal == 0 )
		{
			if(drag1==1)
			{
			maindrag(event);
			}
			else
			{
			if(pan==1)
			mainpan(event);
			}
		}
			
		if (selectorVal == 2) mainstretch(event);
        if (selectorVal == 3) mainHorizontalStretch(event);
		if (selectorVal == 4) mainVerticalStretch (event);
    });
	
	$(document).on('click','.svg-main', function addComponent(event) {
        console.log(event)
		//edit here
		//alert("inside svg-main");
		if(selectorVal==0)
		{
		if(drag1==0)
		panfun(event);
		else
		{
		if(drag1==2)
		drag1=0;
		}
		}
		if (selectorVal == 1) addResistor(event);
        else if (selectorVal == 2) addWire(event);
        else if (selectorVal == 3) addHorizontalWire(event);
		else if (selectorVal == 4) addVerticalWire(event);
		else if (selectorVal == 5) addinductor(event);
        else if (selectorVal == 6) addground(event);
        else if (selectorVal == 7) addcapacitor(event);
		else if (selectorVal == 8) addbattery(event);
        else if (selectorVal == 9) addcurrentsource(event);
        else if (selectorVal == 10) adddiode(event);
        else if (selectorVal == 11) addfuse(event);
        else if (selectorVal == 12) addvoltagesource(event);
        else if (selectorVal == 13) addnpntransistor(event);
        else if (selectorVal == 14) addpnptransistor(event);
        else if (selectorVal == 15) addammeter(event);
        else if (selectorVal == 16) addandgate(event);
        else if (selectorVal == 17) addorgate(event);
        else if (selectorVal == 18) addnorgate(event);
        else if (selectorVal == 19) addnotgate(event);
        else if (selectorVal == 20) addnandgate(event);
        else if (selectorVal == 21) addxorgate(event);
        else if (selectorVal == 22) addvariableresistor(event);
        else if (selectorVal == 23) addvariableinductor(event);
        else if (selectorVal == 24) addvariablecapacitor(event);
        else if (selectorVal == 25) addphotodiode(event);
        else if (selectorVal == 26) addzenerdiode(event);
        else if (selectorVal == 27) adddflipflop(event);
    });
	
	
	
	var curelem=0; //storing the element for deleting while dragging itself
	
	$(document).on('click','.resistor1,.resistor2, .swire, .vwire, .hwire,.capacitor1, .variablecapacitor1, .inductor1, .variableinductor1, .ground1, .battery1, .variableresistor1,.currentsource1, .voltagesource1,.diode1, .photodiode1,.zenerdiode1, .fuse1, .npntransistor1,.pnptransistor1, .ammeter1, .andgate1, .norgate1, .notgate1, .orgate1, .nandgate1, .xorgate1, .dflipflop1 ',function (evt) {
	
	if(selectorVal==0 )
	{
	
	if(drag1==1)
	{
	dragx2 = evt.pageX -20; 
    dragy2= evt.pageY -85;
	diffx=dragx2-dragx1;
	diffy=dragy2-dragy1;
	
	imatrix=this.getCTM();
	kmatrix=document.getElementById("viewport").getCTM();
	
	nmatrix="matrix(" + imatrix.a + "," + imatrix.b + "," + imatrix.c + "," + imatrix.d + "," + (imatrix.e+diffx-kmatrix.e) + "," +  (imatrix.f+diffy-kmatrix.f) + ")" ;
	this.setAttribute("transform", nmatrix);
	
	drag1=2;
	curelem=0;//setting the element to be deleted as null or empty
	
	}
	else
	{
    	
	element=this;
	curelem=this;
	
	
	dragx1 = evt.pageX -20; 
    dragy1= evt.pageY -85;
	
	//kmatrix=document.getElementById("viewport").getCTM();
	
	drag1=1;
	
	}
	}
	});
    
	
	
	
	
	
	
	
	
	$('.resistor').click(function (event) {
        resistor()
    });
    $('.wire').click(function (event) {
        wire()
    });
	$('.hwire').click(function (event) {
        hwire()
    });
	$('.vwire').click(function (event) {
        vwire()
    });
    $('.cursor').click(function (event) {
        selectorVal = 0 ;
    });
    $('.capacitor').click(function (event) {
        capacitor()
    });
    $('.inductor').click(function (event) {
        inductor()
    });
	 $('.ground').click(function (event) {
        ground()
    });
     $('.battery').click(function (event) {
        battery()
    });
     $('.currentsource').click(function (event) {
        currentsource()
    });
     $('.diode').click(function (event) {
        diode()
    });
     $('.fuse').click(function (event) {
        fuse()
    });
    $('.voltagesource').click(function (event) {
        voltagesource()
    });
    $('.npntransistor').click(function (event) {
        npntransistor()
    });
    $('.pnptransistor').click(function (event) {
        pnptransistor()
    });
    $('.ammeter').click(function (event) {
        ammeter()
    });
    $('.andgate').click(function (event) {
        andgate()
    });
    $('.orgate').click(function (event) {
        orgate()
    });
    $('.norgate').click(function (event) {
        norgate()
    });
    $('.notgate').click(function (event) {
        notgate()
    });
    $('.nandgate').click(function (event) {
        nandgate()
    });
    $('.xorgate').click(function (event) {
        xorgate()
    });
    $('.variableresistor').click(function (event) {
        variableresistor()
    });
    $('.variableinductor').click(function (event) {
        variableinductor()
    });
    $('.variablecapacitor').click(function (event) {
        variablecapacitor()
    });
    $('.photodiode').click(function (event) {
        photodiode()
    });
    $('.zenerdiode').click(function (event) {
        zenerdiode()
    });
    $('.dflipflop').click(function (event) {
        dflipflop()
    });
	
	
	drag1=0;
	element=0;
	dragx1=0;
	dragx2=0;
	dragy1=0;
	dragy2=0;
    
	
	
	
	
	
	function maindrag(evt)
	{
		
			
			if(drag1==1)
			{
				
				dragx2 = evt.pageX -20; 
				dragy2= evt.pageY -85;
				diffx=dragx2-dragx1;
				diffy=dragy2-dragy1;
	
				imatrix=element.getCTM();
	            kmatrix=document.getElementById("viewport").getCTM();
				nmatrix="matrix(" + imatrix.a + "," + imatrix.b + "," + imatrix.c + "," + imatrix.d + "," + (imatrix.e + diffx-kmatrix.e) + "," + (imatrix.f + diffy-kmatrix.f) + ")" ;
				element.setAttribute("transform", nmatrix);
				
				dragx1 = evt.pageX -20; //Recursively the dragx2, x1 position interchange and dragy2,y1 position interchange for next mouse-move on svg-main
				dragy1= evt.pageY -85;	
			}
			
		
	}
	
	
	
	
	
	
	
	
	
	
	pan=0;
	panx1=0;
	pany1=0;
	panx2=0;
	pany2=0;
	
	function panfun(evt)
	{
	    
	    
			//alert("entered panfun");
		    if(pan==1)
		    {
		     panx2=evt.pageX-20;
		     pany2=evt.pageY-85;
		     pandiffx=panx2-panx1;
		     pandiffy=pany2-pany1;
		     imatrix=document.getElementById("viewport").getCTM();
		     nmatrix="matrix(" + imatrix.a + "," + imatrix.b + "," + imatrix.c + "," + imatrix.d + "," + (imatrix.e+pandiffx) + "," +  (imatrix.f+pandiffy) + ")" ;
		     document.getElementById("viewport").setAttribute('transform',nmatrix);
		     pan=0;
		    }
		    else
		    {
		    
		    
		      panx1=evt.pageX-20;
		      pany1=evt.pageY-85;
		      pan=1;
		    
		    }
		
	}
		 
	function mainpan(evt)
	{
	
	   
	      //alert("entered mainpan");  
	      if(pan==1)
	      {
			panx2=evt.pageX-20;
			pany2=evt.pageY-85;
			pandiffx=panx2-panx1;
			pandiffy=pany2-pany1;
			imatrix=document.getElementById("viewport").getCTM();
			nmatrix="matrix(" + imatrix.a + "," + imatrix.b + "," + imatrix.c + "," + imatrix.d + "," + (imatrix.e+pandiffx) + "," +  (imatrix.f+pandiffy) + ")" ;
			document.getElementById("viewport").setAttribute('transform',nmatrix);
			panx1=evt.pageX-20;
			pany1=evt.pageY-85;
		  }
	  
	}
	
	
	
	
	
	
	
	
	
	
	
	
	var hflag=0;
	var vflag=0;
	var sflag=0;
	
	function mainHorizontalStretch(evt)
	{
	tfm = getTransform();
    X1 = evt.pageX - tfm[0]; 
    Y1 = evt.pageY - tfm[1];
	if(hflag==1)
	{
	templine.setAttributeNS(null, 'x2',X1-20);
	}

    }
	function mainVerticalStretch(evt)
	{
	tfm = getTransform();
    X1 = evt.pageX - tfm[0]; 
    Y1 = evt.pageY - tfm[1];
	if(vflag==1)
	{
	templine.setAttributeNS(null, 'y2',Y1-85);
	}

    }
	
	function mainstretch(evt)
    {
		if(sflag==1)
		{
			tfm = getTransform();
			x= evt.pageX - tfm[0];
			y= evt.pageY - tfm[1];
			document.getElementById("templine").setAttribute("x2",x-20);
			document.getElementById("templine").setAttribute("y2",y-83);
		}
	}
	
    function addHorizontalWire(evt) 		
	{
	    tfm = getTransform();
		X1= evt.pageX - tfm[0];
		Y1= evt.pageY - tfm[1];
		if(hflag==1)
		{
		CX1= document.getElementById("templine").getAttribute('x1');
		CY1= document.getElementById("templine").getAttribute('y1');
		templine.setAttributeNS(null, 'x2',X1-20);
		line1= document.createElementNS(svgns, 'line');
		line1.setAttributeNS(null, 'x1', CX1 );
		line1.setAttributeNS(null,'y1',CY1 ); 
		line1.setAttributeNS(null, 'x2',X1-20);
		line1.setAttributeNS(null,'y2',CY1);
		line1.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
		line1.setAttributeNS(null, 'id',"horizontalline" + hlineflag);
		line1.setAttributeNS(null, 'class',"hwire");
		document.getElementById("viewport").appendChild(line1);
		document.getElementById("templine").setAttribute('x1',X1-20);
		document.getElementById("templine").setAttribute('y1',Y1-83);
		document.getElementById("templine").setAttribute('x2',X1-20);
		document.getElementById("templine").setAttribute('y2',Y1-83);
		hlineflag++;
		hflag=0;
		hcounter=0;
		}
		else
		{
     	if(hflag==0)
		{
		templine.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        templine.setAttributeNS(null, 'id',"templine");
        templine.setAttributeNS(null,'stroke-dasharray',"5,1");
		document.getElementById("templine").setAttribute("x1",X1-20);
        document.getElementById("templine").setAttribute("y1",Y1-83);
        document.getElementById("templine").setAttribute("x2",X1-20);
        document.getElementById("templine").setAttribute("y2",Y1-83);
		
		hflag=1;
		}
		}
	}


		
	
	function addVerticalWire(evt) 		
	{
	    tfm = getTransform();
		X1= evt.pageX - tfm[0];
		Y1= evt.pageY - tfm[1];
		if(vflag==1)
		{
		CX1= document.getElementById("templine").getAttribute('x1');
		CY1= document.getElementById("templine").getAttribute('y1');
		templine.setAttributeNS(null, 'y2',Y1-83);
		line1= document.createElementNS(svgns, 'line');
		line1.setAttributeNS(null, 'x1', CX1 );
		line1.setAttributeNS(null,'y1',CY1 ); 
		line1.setAttributeNS(null, 'x2',CX1);
		line1.setAttributeNS(null,'y2',Y1-83);
		line1.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
		line1.setAttributeNS(null, 'class',"vwire");
		line1.setAttributeNS(null, 'id',"verticalline" + vlineflag);
		document.getElementById("viewport").appendChild(line1);
		document.getElementById("templine").setAttribute('x1',X1-20);
		document.getElementById("templine").setAttribute('y1',Y1-83);
		document.getElementById("templine").setAttribute('x2',X1-20);
		document.getElementById("templine").setAttribute('y2',Y1-83);
		vlineflag++;
		vflag=0;
		
		}
		
		else
		{
     	if(vflag==0)
		{
		templine.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        templine.setAttributeNS(null, 'id',"templine");
        templine.setAttributeNS(null,'stroke-dasharray',"5,1");
		document.getElementById("templine").setAttribute("x1",X1-20);
        document.getElementById("templine").setAttribute("y1",Y1-83);
        document.getElementById("templine").setAttribute("x2",X1-20);
        document.getElementById("templine").setAttribute("y2",Y1-83);
		
		vflag=1;
		}
		}
		
	}
    
    function addWire(evt) {
    if(sflag==1)
  	{	
	        tfm = getTransform();
			X2 = evt.pageX - tfm[0]; 
			Y2 = evt.pageY - tfm[1];
			CX1= document.getElementById("templine").getAttribute('x1');
			CY1= document.getElementById("templine").getAttribute('y1'); 
			document.getElementById("templine").setAttribute('x2',X2);
			document.getElementById("templine").setAttribute('y2',Y2);
			line1= document.createElementNS(svgns, 'line');
			line1.setAttributeNS(null, 'x1', CX1 );
			line1.setAttributeNS(null,'y1',CY1 ); 
			line1.setAttributeNS(null, 'x2',X2-20);
			line1.setAttributeNS(null,'y2',Y2-83);
			line1.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
			line1.setAttributeNS(null, 'id',"slantingline" + lineflag);
			line1.setAttributeNS(null, 'class',"swire");
			document.getElementById("viewport").appendChild(line1);
			lineflag++;
			document.getElementById("templine").setAttribute('x1',X2);
			document.getElementById("templine").setAttribute('y1',Y2);
			document.getElementById("templine").setAttribute('x2',X2);
			document.getElementById("templine").setAttribute('y2',Y2);
			sflag=0;	
	}
	else
	{
		
    if(sflag==0)
    {
		tfm = getTransform();
        X1 = evt.pageX - tfm[0]; 
        Y1 = evt.pageY - tfm[1];
		templine.setAttributeNS(null, 'x1', X1-20);
		templine.setAttributeNS(null,'y1',Y1-83); 
		templine.setAttributeNS(null, 'x2',X1-20);
		templine.setAttributeNS(null,'y2',Y1-83);
		templine.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        templine.setAttributeNS(null, 'id',"templine");
        templine.setAttributeNS(null,'stroke-dasharray',"5,1");
		sflag=1;	
	}		
		
	}	
		
		
		
	}
    
	
   
   
   
	function addResistor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0]-20;
        ctY = event.pageY - tfm[1]-83;
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', "M" + ctX + " " + ctY +  ' l15 0 l2.5 -5 l5 10 l5 -10 l5 10 l5 -10 l5 10 l2.5 -5 l15 0 ');
        testElement.setAttributeNS(null, 'id', "val" + flag);
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");        
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "resistor1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,0,0)");
		ng.setAttributeNS(null, 'id', "resistor-"+resistorflag);
  
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-18);
        rect.setAttributeNS(null, 'y', ctY-15);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '100');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX);
        circle.setAttributeNS(null, 'cy', ctY);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+60);
        circle2.setAttributeNS(null, 'cy', ctY);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
      
		resistorflag=resistorflag+1;
    }

    function addinductor(event) {
        
        tfm = getTransform();
        ctX = event.pageX - tfm[0]-20;
        ctY = event.pageY - tfm[1]-83;
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', "M" + ctX + " " + ctY + " L " + (ctX+11) + "," + ctY + " C  " + (ctX+11) + "," + (ctY) + " " + (ctX+11) + "," + (ctY-5) + " " + (ctX+16) + "," + (ctY-5) + "C " + (ctX+21) + "," + (ctY-5) + " " + (ctX+21) + "," + (ctY) + " " + (ctX+21) + "," + (ctY) + " C " + (ctX+21) + "," + (ctY) + " " + (ctX+21) + "," + (ctY-5) + " " + (ctX+26) + "," + (ctY-5) + " C " + (ctX+31) + "," + (ctY-5) + " " + (ctX+31) + "," + (ctY) + " " + (ctX+31) + "," + (ctY) + " C " + (ctX+31) + "," + (ctY) + " " + (ctX+31) + "," + (ctY-5) + " " + (ctX+36) + "," + (ctY-5) + " C " + (ctX+41) + "," + (ctY-5) + " " + (ctX+41) + "," + (ctY) + " " + (ctX+41) + "," + (ctY) + " C " + (ctX+41) + "," + (ctY) + " " + (ctX+41) + "," + (ctY-5) + " " + (ctX+46) + "," + (ctY-5) + " C " + (ctX+51) + "," + (ctY-5) + " " + (ctX+51) + "," + (ctY) + " " + (ctX+51) + "," + (ctY) + " L " + (ctX+64) + "," + (ctY) + "");
        testElement.setAttributeNS(null, 'id', "val" + flag);
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");        
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "inductor1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,0,0)");
		ng.setAttributeNS(null,'id',"inductor-"+inductorflag);
		
        
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-18);
        rect.setAttributeNS(null, 'y', ctY-15);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '100');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX);
        circle.setAttributeNS(null, 'cy', ctY);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+64);
        circle2.setAttributeNS(null, 'cy', ctY);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
		inductorflag=inductorflag+1;
    
    }

    function addcapacitor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getcapacitor(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "capacitor1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,0,0)");       
	    ng.setAttributeNS(null,'id',"capacitor-"+capacitorflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-40);
        rect.setAttributeNS(null, 'y', ctY-90);
        rect.setAttributeNS(null, 'height', '80');
        rect.setAttributeNS(null, 'width', '40');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
        var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-20);
        circle.setAttributeNS(null, 'cy', ctY-82);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
		
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX-20);
        circle2.setAttributeNS(null, 'cy', ctY-20);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
        
		ng.appendChild(rect);
		ng.appendChild(testElement);
		ng.appendChild(circle);
		ng.appendChild(circle2);
		document.getElementById("viewport").appendChild(ng);
    }
	
	function addground(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getground(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "ground1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-12,-25)");
		ng.setAttributeNS(null, 'id',"ground-"+groundflag);
		
        
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-24);
        rect.setAttributeNS(null, 'y', ctY-70);
        rect.setAttributeNS(null, 'height', '60');
        rect.setAttributeNS(null, 'width', '30');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-8);
        circle.setAttributeNS(null, 'cy', ctY-58);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
		groundflag=groundflag+1;
    }
    
    function addbattery(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getbattery(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-20) + "," + (ctY-83) +")" );
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "battery1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,0,-24)");
		ng.setAttributeNS(null, 'id', "battery-"+batteryflag);
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-34);
        rect.setAttributeNS(null, 'y', ctY-82);
        rect.setAttributeNS(null, 'height', '50');
        rect.setAttributeNS(null, 'width', '100');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-19);
        circle.setAttributeNS(null, 'cy', ctY-58);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+51);
        circle2.setAttributeNS(null, 'cy', ctY-58);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
        batterflag=batteryflag+1;
	}
    function addvariableresistor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getvariableresistor(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-20) + "," + (ctY-83) +")" );
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "variableresistor1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-7,-13)");
		ng.setAttributeNS(null, 'id', "variableresistor-"+variableresistorflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-18);
        rect.setAttributeNS(null, 'y', ctY-82);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '78');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-10);
        circle.setAttributeNS(null, 'cy', ctY-68);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+50);
        circle2.setAttributeNS(null, 'cy', ctY-68);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
        variableresistorflag=variableresistorflag+1;
	}
	
	function addvariableinductor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getvariableinductor(ctX - 20, ctY - 83));
		
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-10) + "," + (ctY-88) +")" );
		//document.getElementById("viewport").appendChild(testElement);
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "variableinductor1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-8,-13)");
		ng.setAttributeNS(null, 'id', "variableinductor-"+variableinductorflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-24);
        rect.setAttributeNS(null, 'y', ctY-88);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '71');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-10);
        circle.setAttributeNS(null, 'cy', ctY-68);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+34);
        circle2.setAttributeNS(null, 'cy', ctY-68);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
		variableinductorflag=variableinductorflag+1;
	}
    function addcurrentsource(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getcurrentsource(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-10) + "," + (ctY-88) +")" );
		//document.getElementById("viewport").appendChild(testElement);
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "currentsource1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-8,-20)");
		ng.setAttributeNS(null, 'id', "currentsource-"+currentsourceflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-20);
        rect.setAttributeNS(null, 'y', ctY-83);
        rect.setAttributeNS(null, 'height', '40');
        rect.setAttributeNS(null, 'width', '71');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-10);
        circle.setAttributeNS(null, 'cy', ctY-63);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+43);
        circle2.setAttributeNS(null, 'cy', ctY-63);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		
	
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
        currentsourceflag=currentsourceflag+1;
	}
	
	function addvoltagesource(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getvoltagesource(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-12) + "," + (ctY-83) +")" );
		
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "voltagesource1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-8,-20)");
		ng.setAttributeNS(null, 'id', "voltagesource-"+voltagesourceflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-20);
        rect.setAttributeNS(null, 'y', ctY-83);
        rect.setAttributeNS(null, 'height', '40');
        rect.setAttributeNS(null, 'width', '75');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-10);
        circle.setAttributeNS(null, 'cy', ctY-63);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+46);
        circle2.setAttributeNS(null, 'cy', ctY-63);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
        voltagesourceflag=voltagesourceflag+1;
	}
    
	function addphotodiode(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getphotodiode(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-10) + "," + (ctY-93) +")" );
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "photodiode1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-7,-13)");
		ng.setAttributeNS(null, 'id', "photodiode-"+photodiodeflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-18);
        rect.setAttributeNS(null, 'y', ctY-87);
        rect.setAttributeNS(null, 'height', '32');
        rect.setAttributeNS(null, 'width', '82');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-10);
        circle.setAttributeNS(null, 'cy', ctY-68);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+57);
        circle2.setAttributeNS(null, 'cy', ctY-68);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
        photodiodeflag=photodiodeflag+1;
	}
	function addnpntransistor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getnpntransistor(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-10) + "," + (ctY-104) +")" );
		
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "npntransistor1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-17,-20)");
		ng.setAttributeNS(null, 'id', "npntransistor-"+npntransistorflag);
		
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-14);
        rect.setAttributeNS(null, 'y', ctY-103);
        rect.setAttributeNS(null, 'height', '76');
        rect.setAttributeNS(null, 'width', '87');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-2);
        circle.setAttributeNS(null, 'cy', ctY-64);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+54);
        circle2.setAttributeNS(null, 'cy', ctY-92);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		var circle3 = document.createElementNS(svgns, 'circle');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'cx', ctX+54);
        circle3.setAttributeNS(null, 'cy', ctY-37);
        circle3.setAttributeNS(null, 'r', '5');
        circle3.setAttributeNS(null, 'width', '100');
        circle3.setAttributeNS(null, 'stroke', 'black');
        circle3.setAttributeNS(null, 'stroke-width', '1');
		circle3.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		ng.appendChild(circle3);
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
        npntransistorflag=npntransistorflag+1;
	}
	function addpnptransistor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getpnptransistor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-10) + "," + (ctY-104) +")" );
		
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "pnptransistor1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-17,-20)");
		ng.setAttributeNS(null, 'id', 'pnptransistor-'+pnptransistorflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-14);
        rect.setAttributeNS(null, 'y', ctY-103);
        rect.setAttributeNS(null, 'height', '76');
        rect.setAttributeNS(null, 'width', '87');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-2);
        circle.setAttributeNS(null, 'cy', ctY-64);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+54);
        circle2.setAttributeNS(null, 'cy', ctY-92);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		var circle3 = document.createElementNS(svgns, 'circle');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'cx', ctX+54);
        circle3.setAttributeNS(null, 'cy', ctY-37);
        circle3.setAttributeNS(null, 'r', '5');
        circle3.setAttributeNS(null, 'width', '100');
        circle3.setAttributeNS(null, 'stroke', 'black');
        circle3.setAttributeNS(null, 'stroke-width', '1');
		circle3.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		ng.appendChild(circle3);
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
        pnptransistorflag=pnptransistorflag+1;
	}
	
    function adddiode(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getdiode(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "diode1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,0,0)");
		ng.setAttributeNS(null, 'id', "diode-"+diodeflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-28);
        rect.setAttributeNS(null, 'y', ctY-100);
        rect.setAttributeNS(null, 'height', '32');
        rect.setAttributeNS(null, 'width', '82');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-19);
        circle.setAttributeNS(null, 'cy', ctY-83);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+46);
        circle2.setAttributeNS(null, 'cy', ctY-83);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		document.getElementById("viewport").appendChild(ng);
		diodeflag++;
		
        
    }
    
    function addfuse(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getfuse(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "fuse1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,0,0)");
		ng.setAttributeNS(null, 'id', "fuse-"+fuseflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-28);
        rect.setAttributeNS(null, 'y', ctY-99);
        rect.setAttributeNS(null, 'height', '32');
        rect.setAttributeNS(null, 'width', '76');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-19);
        circle.setAttributeNS(null, 'cy', ctY-83);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+40);
        circle2.setAttributeNS(null, 'cy', ctY-83);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		document.getElementById("viewport").appendChild(ng);
		fuseflag++;
		
    }
    
    
    
      
    
    function addammeter(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getammeter(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-12) + "," + (ctY-88) +")" );
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "ammeter1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-9,-14)");
		ng.setAttributeNS(null, 'id', 'ammeter-'+ammeterflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-18);
        rect.setAttributeNS(null, 'y', ctY-88);
        rect.setAttributeNS(null, 'height', '39');
        rect.setAttributeNS(null, 'width', '73');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-10);
        circle.setAttributeNS(null, 'cy', ctY-68);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+46);
        circle2.setAttributeNS(null, 'cy', ctY-68);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
        
        
        ammeterflag=ammeterflag+1;
	}
    
     function addandgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
		//alert("hello");
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getandgate(ctX - 20, ctY - 73));
        testElement.setAttributeNS(null, 'style', "stroke:red ; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-10) + "," + (ctY-88) +")" );
		
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "andgate1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-14,-10)");
		ng.setAttributeNS(null, 'id', 'andgate-'+andgateflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-20);
        rect.setAttributeNS(null, 'y', ctY-82);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '71');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle1 = document.createElementNS(svgns, 'circle');
        circle1.setAttributeNS(null, 'class', 'terminal');
        circle1.setAttributeNS(null, 'cx', ctX-7);
        circle1.setAttributeNS(null, 'cy', ctY-73);
        circle1.setAttributeNS(null, 'r', '4');
        circle1.setAttributeNS(null, 'width', '100');
        circle1.setAttributeNS(null, 'stroke', 'black');
        circle1.setAttributeNS(null, 'stroke-width', '1');
		circle1.setAttributeNS(null, 'fill', 'none');
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX-7);
        circle2.setAttributeNS(null, 'cy', ctY-63);
        circle2.setAttributeNS(null, 'r', '4');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
        
		var circle3 = document.createElementNS(svgns, 'circle');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'cx', ctX+42);
        circle3.setAttributeNS(null, 'cy', ctY-68);
        circle3.setAttributeNS(null, 'r', '4');
        circle3.setAttributeNS(null, 'width', '100');
        circle3.setAttributeNS(null, 'stroke', 'black');
        circle3.setAttributeNS(null, 'stroke-width', '1');
		circle3.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle1);
		ng.appendChild(circle2);
		ng.appendChild(circle3);
		
	
        
        
        document.getElementById("viewport").appendChild(ng);
		
        andgateflag=andgateflag+1;
	}
    function addorgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getorgate(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "orgate1");
        //ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-1,-10)");
		ng.setAttributeNS(null, 'id', 'orgate-'+orgateflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-28);
        rect.setAttributeNS(null, 'y', ctY-93);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '68');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle1 = document.createElementNS(svgns, 'circle');
        circle1.setAttributeNS(null, 'class', 'terminal');
        circle1.setAttributeNS(null, 'cx', ctX-18);
        circle1.setAttributeNS(null, 'cy', ctY-83);
        circle1.setAttributeNS(null, 'r', '4');
        circle1.setAttributeNS(null, 'width', '100');
        circle1.setAttributeNS(null, 'stroke', 'black');
        circle1.setAttributeNS(null, 'stroke-width', '1');
		circle1.setAttributeNS(null, 'fill', 'none');
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX-18);
        circle2.setAttributeNS(null, 'cy', ctY-73);
        circle2.setAttributeNS(null, 'r', '4');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
        
		var circle3 = document.createElementNS(svgns, 'circle');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'cx', ctX+30);
        circle3.setAttributeNS(null, 'cy', ctY-78);
        circle3.setAttributeNS(null, 'r', '4');
        circle3.setAttributeNS(null, 'width', '100');
        circle3.setAttributeNS(null, 'stroke', 'black');
        circle3.setAttributeNS(null, 'stroke-width', '1');
		circle3.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle1);
		ng.appendChild(circle2);
		ng.appendChild(circle3);
		
		
        
        
        document.getElementById("viewport").appendChild(ng);
		
        orgateflag=orgateflag+1;
        
		
		
		
		
		
		
    }
    function addnorgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getnorgate(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-10) + "," + (ctY-88) +")" );
		
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "norgate1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-14,-10)");
        ng.setAttributeNS(null, 'id', 'norgate-'+norgateflag);	
	
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-14);
        rect.setAttributeNS(null, 'y', ctY-82);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '69');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle1 = document.createElementNS(svgns, 'circle');
        circle1.setAttributeNS(null, 'class', 'terminal');
        circle1.setAttributeNS(null, 'cx', ctX-7);
        circle1.setAttributeNS(null, 'cy', ctY-73);
        circle1.setAttributeNS(null, 'r', '4');
        circle1.setAttributeNS(null, 'width', '100');
        circle1.setAttributeNS(null, 'stroke', 'black');
        circle1.setAttributeNS(null, 'stroke-width', '1');
		circle1.setAttributeNS(null, 'fill', 'none');
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX-7);
        circle2.setAttributeNS(null, 'cy', ctY-63);
        circle2.setAttributeNS(null, 'r', '4');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
        
		var circle3 = document.createElementNS(svgns, 'circle');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'cx', ctX+46);
        circle3.setAttributeNS(null, 'cy', ctY-68);
        circle3.setAttributeNS(null, 'r', '4');
        circle3.setAttributeNS(null, 'width', '100');
        circle3.setAttributeNS(null, 'stroke', 'black');
        circle3.setAttributeNS(null, 'stroke-width', '1');
		circle3.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle1);
		ng.appendChild(circle2);
		ng.appendChild(circle3);
	
        document.getElementById("viewport").appendChild(ng);
		
        norgateflag=norgateflag+1;
	}
    function addnotgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getnotgate(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-10) + "," + (ctY-88) +")" );
		
        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "notgate1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-14,-14)");
		ng.setAttributeNS(null, 'id','notgate-'+notgateflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-14);
        rect.setAttributeNS(null, 'y', ctY-82);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '65');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle1 = document.createElementNS(svgns, 'circle');
        circle1.setAttributeNS(null, 'class', 'terminal');
        circle1.setAttributeNS(null, 'cx', ctX-7);
        circle1.setAttributeNS(null, 'cy', ctY-68);
        circle1.setAttributeNS(null, 'r', '4');
        circle1.setAttributeNS(null, 'width', '100');
        circle1.setAttributeNS(null, 'stroke', 'black');
        circle1.setAttributeNS(null, 'stroke-width', '1');
		circle1.setAttributeNS(null, 'fill', 'none');
		
        
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+42);
        circle2.setAttributeNS(null, 'cy', ctY-68);
        circle2.setAttributeNS(null, 'r', '4');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle1);
		ng.appendChild(circle2);
		
        document.getElementById("viewport").appendChild(ng);
		
		notgateflag=notgateflag+1;
    }
    function addnandgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getnandgate(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-21) + "," + (ctY-98) +")" );
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "nandgate1");
        //ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-1,-10)");
		ng.setAttributeNS(null, 'id', 'nandgate-'+nandgateflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-28);
        rect.setAttributeNS(null, 'y', ctY-92);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '71');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle1 = document.createElementNS(svgns, 'circle');
        circle1.setAttributeNS(null, 'class', 'terminal');
        circle1.setAttributeNS(null, 'cx', ctX-18);
        circle1.setAttributeNS(null, 'cy', ctY-83);
        circle1.setAttributeNS(null, 'r', '4');
        circle1.setAttributeNS(null, 'width', '100');
        circle1.setAttributeNS(null, 'stroke', 'black');
        circle1.setAttributeNS(null, 'stroke-width', '1');
		circle1.setAttributeNS(null, 'fill', 'none');
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX-18);
        circle2.setAttributeNS(null, 'cy', ctY-73);
        circle2.setAttributeNS(null, 'r', '4');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
        
		var circle3 = document.createElementNS(svgns, 'circle');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'cx', ctX+35);
        circle3.setAttributeNS(null, 'cy', ctY-78);
        circle3.setAttributeNS(null, 'r', '4');
        circle3.setAttributeNS(null, 'width', '100');
        circle3.setAttributeNS(null, 'stroke', 'black');
        circle3.setAttributeNS(null, 'stroke-width', '1');
		circle3.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle1);
		ng.appendChild(circle2);
		ng.appendChild(circle3);
		
        
        
        document.getElementById("viewport").appendChild(ng);
		
        nandgateflag=nandgateflag+1;
				
		
    }
    function addxorgate(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getxorgate(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-21) + "," + (ctY-98) +")" );
		
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "xorgate1");
        //ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,-1,-10)");
		ng.setAttributeNS(null, 'id', 'xorgate-'+xorgateflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-28);
        rect.setAttributeNS(null, 'y', ctY-93);
        rect.setAttributeNS(null, 'height', '30');
        rect.setAttributeNS(null, 'width', '68');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle1 = document.createElementNS(svgns, 'circle');
        circle1.setAttributeNS(null, 'class', 'terminal');
        circle1.setAttributeNS(null, 'cx', ctX-18);
        circle1.setAttributeNS(null, 'cy', ctY-83);
        circle1.setAttributeNS(null, 'r', '4');
        circle1.setAttributeNS(null, 'width', '100');
        circle1.setAttributeNS(null, 'stroke', 'black');
        circle1.setAttributeNS(null, 'stroke-width', '1');
		circle1.setAttributeNS(null, 'fill', 'none');
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX-18);
        circle2.setAttributeNS(null, 'cy', ctY-73);
        circle2.setAttributeNS(null, 'r', '4');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
        
		var circle3 = document.createElementNS(svgns, 'circle');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'cx', ctX+30);
        circle3.setAttributeNS(null, 'cy', ctY-78);
        circle3.setAttributeNS(null, 'r', '4');
        circle3.setAttributeNS(null, 'width', '100');
        circle3.setAttributeNS(null, 'stroke', 'black');
        circle3.setAttributeNS(null, 'stroke-width', '1');
		circle3.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle1);
		ng.appendChild(circle2);
		ng.appendChild(circle3);
		
	
        
        
        document.getElementById("viewport").appendChild(ng);
		
		++xorgateflag;
		
	
    }
    
    
    function addvariablecapacitor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getvariablecapacitor(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-40) + "," + (ctY-83) +")" );
		testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "capacitor1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,0,0)");       
	    ng.setAttributeNS(null,'id',"variablecapacitor-"+variablecapacitorflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-40);
        rect.setAttributeNS(null, 'y', ctY-90);
        rect.setAttributeNS(null, 'height', '80');
        rect.setAttributeNS(null, 'width', '40');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
        var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-20);
        circle.setAttributeNS(null, 'cy', ctY-82);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
		
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX-20);
        circle2.setAttributeNS(null, 'cy', ctY-20);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
        
		ng.appendChild(rect);
		ng.appendChild(testElement);
		ng.appendChild(circle);
		ng.appendChild(circle2);
		document.getElementById("viewport").appendChild(ng);
		
		variablecapacitorflag++;
		
    }
    
    function addzenerdiode(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getzenerdiode(ctX - 20, ctY - 83));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        
		var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "zenerdiode1");
        ng.setAttributeNS(null, 'transform', "matrix(1,0,0,1,0,0)");
		ng.setAttributeNS(null, 'id', "zenerdiode-"+zenerdiodeflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-28);
        rect.setAttributeNS(null, 'y', ctY-100);
        rect.setAttributeNS(null, 'height', '32');
        rect.setAttributeNS(null, 'width', '82');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'class', 'terminal');
        circle.setAttributeNS(null, 'cx', ctX-19);
        circle.setAttributeNS(null, 'cy', ctY-83);
        circle.setAttributeNS(null, 'r', '5');
        circle.setAttributeNS(null, 'width', '100');
        circle.setAttributeNS(null, 'stroke', 'black');
        circle.setAttributeNS(null, 'stroke-width', '1');
		circle.setAttributeNS(null, 'fill', 'none');
        var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX+46);
        circle2.setAttributeNS(null, 'cy', ctY-83);
        circle2.setAttributeNS(null, 'r', '5');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle);
		ng.appendChild(circle2);
		document.getElementById("viewport").appendChild(ng);
		zenerdiodeflag++;
    }
    function adddflipflop(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getdflipflop(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: red; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        
		testElement.setAttributeNS(null, 'transform', "matrix(1,0,0,1,"+ (ctX-21) + "," + (ctY-100) +")" );
        

        var ng = document.createElementNS (svgns, "g");
		ng.setAttributeNS(null, 'class', "dflipflop1");
        
		ng.setAttributeNS(null, 'id', 'dflipflop-'+dflipflopflag);
		
		var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'class', 'box');
        rect.setAttributeNS(null, 'x', ctX-24);
        rect.setAttributeNS(null, 'y', ctY-95);
        rect.setAttributeNS(null, 'height', '44');
        rect.setAttributeNS(null, 'width', '55');
        rect.setAttributeNS(null, 'stroke', 'none');
        rect.setAttributeNS(null, 'stroke-width', '1');
        rect.setAttributeNS(null, 'fill', 'none');
        
		var circle1 = document.createElementNS(svgns, 'circle');
        circle1.setAttributeNS(null, 'class', 'terminal');
        circle1.setAttributeNS(null, 'cx', ctX-18);
        circle1.setAttributeNS(null, 'cy', ctY-83);
        circle1.setAttributeNS(null, 'r', '4');
        circle1.setAttributeNS(null, 'width', '100');
        circle1.setAttributeNS(null, 'stroke', 'black');
        circle1.setAttributeNS(null, 'stroke-width', '1');
		circle1.setAttributeNS(null, 'fill', 'none');
		
		var circle2 = document.createElementNS(svgns, 'circle');
        circle2.setAttributeNS(null, 'class', 'terminal');
        circle2.setAttributeNS(null, 'cx', ctX-18);
        circle2.setAttributeNS(null, 'cy', ctY-68);
        circle2.setAttributeNS(null, 'r', '4');
        circle2.setAttributeNS(null, 'width', '100');
        circle2.setAttributeNS(null, 'stroke', 'black');
        circle2.setAttributeNS(null, 'stroke-width', '1');
		circle2.setAttributeNS(null, 'fill', 'none');
        
		var circle3 = document.createElementNS(svgns, 'circle');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'class', 'terminal');
        circle3.setAttributeNS(null, 'cx', ctX+25);
        circle3.setAttributeNS(null, 'cy', ctY-83);
        circle3.setAttributeNS(null, 'r', '4');
        circle3.setAttributeNS(null, 'width', '100');
        circle3.setAttributeNS(null, 'stroke', 'black');
        circle3.setAttributeNS(null, 'stroke-width', '1');
		circle3.setAttributeNS(null, 'fill', 'none');
		
		var circle4 = document.createElementNS(svgns, 'circle');
        circle4.setAttributeNS(null, 'class', 'terminal');
        circle4.setAttributeNS(null, 'class', 'terminal');
        circle4.setAttributeNS(null, 'cx', ctX+25);
        circle4.setAttributeNS(null, 'cy', ctY-68);
        circle4.setAttributeNS(null, 'r', '4');
        circle4.setAttributeNS(null, 'width', '100');
        circle4.setAttributeNS(null, 'stroke', 'black');
        circle4.setAttributeNS(null, 'stroke-width', '1');
		circle4.setAttributeNS(null, 'fill', 'none');
		
		
		ng.appendChild(rect);
		ng.appendChild(testElement);
		
		ng.appendChild(circle1);
		ng.appendChild(circle2);
		ng.appendChild(circle3);
		ng.appendChild(circle4);
		
        
        
        document.getElementById("viewport").appendChild(ng);
		
		dflipflopflag++;
		
		
    }
	


   function getresistor(ctX, ctY) {
        return "M" + ctX + " " + ctY + " l15 0 l2.5 -5 l5 10 l5 -10 l5 10 l5 -10 l5 10 l2.5 -5 l15 0";
    }

    function getwire(ctX1, ctY1, ctX2, ctY2) {
    return "M" + ctX1 + " " + ctY1 + "L" + ctX2 + " " + ctY2;
	}

    function getinductor(ctX, ctY) {
        return "M" + ctX + " " + ctY + " L " + (ctX+11) + "," + ctY + " C  " + (ctX+11) + "," + (ctY) + " " + (ctX+11) + "," + (ctY-5) + " " + (ctX+16) + "," + (ctY-5) + "C " + (ctX+21) + "," + (ctY-5) + " " + (ctX+21) + "," + (ctY) + " " + (ctX+21) + "," + (ctY) + " C " + (ctX+21) + "," + (ctY) + " " + (ctX+21) + "," + (ctY-5) + " " + (ctX+26) + "," + (ctY-5) + " C " + (ctX+31) + "," + (ctY-5) + " " + (ctX+31) + "," + (ctY) + " " + (ctX+31) + "," + (ctY) + " C " + (ctX+31) + "," + (ctY) + " " + (ctX+31) + "," + (ctY-5) + " " + (ctX+36) + "," + (ctY-5) + " C " + (ctX+41) + "," + (ctY-5) + " " + (ctX+41) + "," + (ctY) + " " + (ctX+41) + "," + (ctY) + " C " + (ctX+41) + "," + (ctY) + " " + (ctX+41) + "," + (ctY-5) + " " + (ctX+46) + "," + (ctY-5) + " C " + (ctX+51) + "," + (ctY-5) + " " + (ctX+51) + "," + (ctY) + " " + (ctX+51) + "," + (ctY) + " L " + (ctX+64) + "," + (ctY) + "";
        }

    function getcapacitor(ctX, ctY) {
        return "M" + ctX + " " + ctY + " L "+ctX+","+(ctY+28)+" M "+(ctX-12)+","+(ctY+28)+" L "+(ctX+12)+","+(ctY+28)+" M "+(ctX-12)+","+(ctY+38)+" C "+(ctX-12)+","+(ctY+38)+" "+ctX+","+(ctY+32)+" "+(ctX+12)+","+(ctY+38)+" M "+ctX+","+(ctY+36)+" L "+ctX+","+(ctY+64)+"";
    }
    
    function getground(ctX, ctY) {
        return "M" + ctX + " " + ctY + " L "+ctX+","+(ctY+28)+" M "+(ctX-15)+","+(ctY+28)+" H "+(ctX+15)+"  M "+(ctX-11)+","+(ctY+32)+"H "+(ctX+11)+"M "+(ctX-5)+","+(ctY+36)+"H "+(ctX+5)+"";
    }

     function getbattery(ctX, ctY) {
        return "M 0,25 H 25 M46,25 h 25 M 25,5 V 45 M32,15 V 33 M39,5 V 45 M46,15 V 33M16,10 l 0,6 M13,13 l 6,0 M50,13 l6,0";
    }
    
    function getcurrentsource(ctX, ctY) {
        return "M15,25A5,5 0 1,1 25,25  M25,25A5,5 0 1,0 35,25 M0,25H 9 M43,25 H 53 M8,25 A7,7 0 1,1 43,25 M8,25A7,7 0 1,0 43,25";
    }
    
     function getdiode(ctX, ctY) {
        return "M" + ctX + " " + ctY + "H" +(ctX+25)+ "M" +(ctX+42)+","+(ctY)+ "H" +(ctX+67)+ "M" +(ctX+25)+","+(ctY-10)+ "V" +(ctY+9)+ "M" +(ctX+42)+","+(ctY-10)+ "V" +(ctY+9)+  "M" +(ctX+43)+","+(ctY)+ "L" +(ctX+25)+","+(ctY-9)+ "M" +(ctX+43)+","+(ctY)+ "L" +(ctX+25)+","+(ctY+8)+ "";
		}



    
    function getfuse(ctX, ctY) {
        return "M" + ctX + " " + ctY + " H " +(ctX+10)+ " M " +(ctX+10)+ "," +(ctY-10)+ " V " +(ctY+10)+ " H " +(ctX+50)+ " V " +(ctY-10)+ "H" +(ctX+10)+ " M " +(ctX+50)+ "," +(ctY+0)+ " H " +(ctX+10)+ " M " +(ctX+10)+ "," +(ctY)+ "H" +(ctX+60)+"";
    }


     function getvoltagesource(ctX, ctY) {
        return "M 2,20 H12  M 48,20 H58  M13,20 A 7,7 0 1,1 48,20 M13,20 A 7,7 0 1,0 48,20  M23,14 l 7,14 l 7,-14";
    }
     function getnpntransistor(ctX, ctY) {
        return "M20,40 A 10,10 0 1,1 70,40 M20,40 A 10,10 0 1,0 70,40 M8,40 h28 M36,26 v28 M36,34 l28,-12 l0,-10 M36,46 l28,12 l0,10 M10,10 v10 M10,10 A 4,2.5 0 1,1 10,15   M10,15 A 4,2.5 0 1,1 10,20 M75,5 A 2.5,2.5 0 1,0 75,15 m0,45 v11 l6,0 M75,61 l6,0 M75,66 l3.9,0 M62,56 l-3,-6 M62,56 l-7,2.5";
    }
    
    function getpnptransistor(ctX, ctY) {
        return " M20,40 A 10,10 0 1,1 70,40 M20,40 A 10,10 0 1,0 70,40 M8,40 h28 M36,26 v28 M36,34 l28,-12 l0,-10 M36,46 l28,12 l0,10 M10,10 v10 M10,10 A 4,2.5 0 1,1 10,15   M10,15 A 4,2.5 0 1,1 10,20 M78,65 A 2.5,2.5 0 1,0 78,75 M75,5 v11 M74,5 h6 M74,10 h5 M74,16 h6  M36,32 l5,-4 M36,34 l8,1";
    }
    
    function getammeter(ctX, ctY) {
        return "M 2,20 H12  M 48,20 H58 M13,20 A 7,7 0 1,1 48,20 M13,20 A 7,7 0 1,0 48,20 M22,29 l 6,-15 l6,15 M25,22 l6,0";
    }
    
    function getandgate(ctX, ctY) {
        return "M2,15 h10 M2,25 h10 M12,10 v20 h20 A10,10 0 1,0 32,10 h-20 M42,20 h10";
    }
    function getorgate(ctX, ctY) {
         return "M" + ctX + " " + ctY + "H" +(ctX+10)+ "M" +(ctX)+","+(ctY+10)+ "H" +(ctX+10)+ "M" +(ctX+10)+","+(ctY-6)+ "Q" +(ctX+16)+","+(ctY+5)+ " "+(ctX+10)+","+(ctY+15)+ "M" +(ctX+10)+","+(ctY-6)+ "Q" +(ctX+70)+","+(ctY+5)+ " "+(ctX+10)+","+(ctY+15)+  "M" +(ctX+40)+","+(ctY+5)+ "H" +(ctX+50)+ "";
    }

    function getnorgate(ctX, ctY) {
        return "M2,15 h12 M2,25 h12  M12,9 Q18,20  12,30  M12,9 Q72,20  12,30  M42,20 A2,2 0 1,0 46,20 M42,20 A2,2 0 1,1 46,20M46,20 h10";
    }
    function getnotgate(ctX, ctY) {
        return "M2,20 h10 M12,10 v20 l25,-10 l-25,-9.1 M43,20 h10 M39,20 A2,2 0 1,1 43,20 M39,20 A2,2 0 1,0 43,20";
    }
    function getnandgate(ctX, ctY) {
        return "M2,15 h10 M2,25 h10 M12,9 v21 h20 A10,10 0 1,0 32,10 h-20 M42,20 A2,2 0 1,0 46,20 M42,20 A2,2 0 1,1 46,20M46,20 h10";
    }
    function getxorgate(ctX, ctY) {
        return "M2,15 h9 M2,25 h9 M8,9 Q14,20  8,30  M12,9 Q18,20  12,30  M12,9 Q72,20  12,30  M42,20 h10";
    }
    function getvariableresistor(ctX, ctY) {
        return "M10 15 l 15 0 l2.5 -5 l5 10 l5 -10 l5 10 l5 -10 l5 10 l2.5 -5 l15 0 M 28,28 l 21,-24 M 48.5,4 l -5,0 M 48.5,4 l 1.5,5";
    }
    function getvariableinductor(ctX, ctY) {
        return "M0,20 H10 M10,20 A5,6 0 1,1 18,20 M18,20 A5,6 0 1,1 26,20 M26,20 A5,6 0 1,1 34,20 M34,20 l 10,0 M14,26 l 20,-21 l-7,0 l7,0 l0,5.9";
    }
    function getvariablecapacitor(ctX, ctY) {
        return "M 20,0 L 20,28  M 8,28 L 32,28 M 8,34 l24,0 M 20,34 L 20,64 M 6,48 l25,-30 M31,18.5 l-7,0 M31,18.5 l0,7";
    }
    function getphotodiode(ctX, ctY) {
        return "M 0,25 H 25 M42,25 h 25 M 25,15 V 34 M42,15 V 34 M25,15 l17,11 M25,34 l17,-10 M35,6 l-5,8 M42,6 l-5,8 M30,14 l5,0  M30,14 l-2,-5 M37,14  l5,0  M37,14 l-1.8,-5";
    }
    function getzenerdiode(ctX, ctY) {
        return "M" +ctX+ " " +ctY+ "H" +(ctX+25)+ "M" +(ctX+42)+","+(ctY)+ "H" +(ctX+67)+ "M" +(ctX+25)+","+(ctY-10)+ "V" +(ctY+9)+ "M" +(ctX+42)+","+(ctY-10)+ "V" +(ctY+9)+ "M" +(ctX+25)+","+(ctY-10)+ "L" +(ctX+42)+","+(ctY)+ "M" +(ctX+25)+","+(ctY+9)+ "L" +(ctX+42)+","+(ctY-1)+ "M" +(ctX+42)+","+(ctY-9)+ "H" +(ctX+47)+ "M" +(ctX+42)+","+(ctY+8)+ "H" +(ctX+37)+ "";
    }

    function getdflipflop(ctX, ctY) {
        return "M2,17 h9 M2,32 h9  M12,9 v35 h25 v-35 z  m25,23 h9 m-9,-15 h9 M16,13 v7 M16,14 A3,2.5 0 1,1 16,19 M12,28 l5,3 l-5,3 M29,31 A1.5,3 0 1,1 32,31 M29,31 A1.5,3 0 1,0 32,31 M30.8,32.5 l3,4  M28,25.8 h5 M29,17 A1.5,3 0 1,1 32,17 M29,17 A1.5,3 0 1,0 32,17 M30.8,18.5 l3,4";
    }

    function getTransform() {
        var t = [0, 0];
        try {
            tStr = gObj.getAttributeNS(null, "transform").slice(7, -1).split(',');
			//alert(tStr);
            t[0] = parseInt(tStr[4]);
            t[1] = parseInt(tStr[5]);
        } catch (err) {
            console.log(err);
        }
        return t;
    }
});
