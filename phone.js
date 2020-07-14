var contactList = [];

function Conatct(name, phoneNo, email){

    this.name = name;
    this.phoneNo = phoneNo;
    this.email = email;

    this.display = function(){
        alert(this);
    }
}

var contact1 = new Conatct("John Smith", "5546546546", "adsa@gmail.com");
var contact2 = new Conatct("Alan Smith", "2454656545", "asdsa@gmail.com");
var contactList = [contact1, contact2];

$(document).ready(function() { // do this when the document is loaded
	$(".tabContentDialar").show(); // show the element with ID "element"
    $(".tabContentContactList").hide(); 
    $(".tabContentAddContact").hide();// hide the element with ID "otherElement"

    for(var i = 0; i < contactList.length; i++) {
      var newNodeContainer = "<div class='contactObject'><b>" + contactList[i].name + 
                            "</b><br>" + contactList[i].phoneNo + "<br>" + contactList[i].email + "<br><br>";
      var divClose = "</div>";
      $('.contactList').append(newNodeContainer + divClose);
    }
});


$("#tabButtonDialar").click(function(){
    $(".tabContentDialar").show(); // show the element with ID "element"
    $(".tabContentContactList").hide(); 
    $(".tabContentAddContact").hide();// hide the element with ID "otherElement"
});

$("#tabButtonContactList").click(function(){
    $(".tabContentDialar").hide(); // show the element with ID "element"
    $(".tabContentContactList").show(); 
    $(".tabContentAddContact").hide();// hide the element with ID "otherElement"
});

$("#tabButtonAddContact").click(function(){
    $(".tabContentDialar").hide(); // show the element with ID "element"
    $(".tabContentContactList").hide(); 
    $(".tabContentAddContact").show();// hide the element with ID "otherElement"
});


$(".dialarButton").click(function() {
    var text = $(this).val();
    //console.log(this);

    var length = $("#phoneNumber").val().length;

    console.log(text);
    if (length == 12){
        alert("Maximum no of input is reached");
    } else {
        $("#phoneNumber").val($("#phoneNumber").val()+text);
        //console.log("Clicked");
    }
    
});

$("#clearButton").click(function() {
    $("#phoneNumber").val("");
});

$("#dialButton").click(function() {
    var phoneNumber = $("#phoneNumber").val();
});

$("#deleteButton").click(function() {
    var text = $("#phoneNumber").val();
	$("#phoneNumber").val(text.substring(0,text.length -1));
});

$("#contactClear").click(function() {
    $("#contactName").val("");
    $("#contactNo").val("");
    $("#contactEmail").val("");
});

$("#addContact").click(function (e) {

    //e.preventDefault();
    if(contactForm.checkValidity()) {

        var newContact = new Conatct($("#contactName").val(), $("#contactNo").val(), $("#contactEmail").val());
        contactList.push(newContact);

        console.log(contactList.length);
        console.log(newContact);

        var newNodeContainer = "<div class='contactObject'><b>" + newContact.name + 
                            "</b><br>" + newContact.phoneNo + "<br>" + newContact.email + "<br><br>";
        var divClose = "</div>";
        $('.contactList').append(newNodeContainer + divClose);

        
        alert("Contact added successfully. You can see new contact in the contact list");
        
    } 

    return false;
});