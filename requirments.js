function pay(){
    var name = document.getElementById("id-name").value;
    var address = document.getElementById("id-address").value;
    var card = document.getElementById("id-card").value;
    var pin = document.getElementById("id-pin").value;
    var email = document.getElementById("id-email").value;
    if (name =="") { window.alert("Name Field Cannot be empty")}
    else if (address =="") { window.alert("Address Field Cannot be empty")}
    else if (email =="") { window.alert("E-Mail Field Cannot be empty")}
    else if (card =="") { window.alert("Card-Number Field Cannot be empty")}
    else if (pin =="") { window.alert("Pin Field Cannot be empty")}
    else{
        window.alert("Thank you "+ name  + ".  We will send your order.")
    }

}  