
import "bootstrap"


function send(event){
 
    event.preventDefault()
    
    let email = document.getElementById("email").value
    let body = document.getElementById("body").value

    if (email != "" && body != ""){
        if (confirm("Are you sure you want to send this email?")){
            document.getElementById("email").value = ""
            document.getElementById("subject").value = ""
            document.getElementById("body").value = ""
            document.getElementById("file").value = null
            alert("Email Sent!");
        }
    }
    else {
        alert("No email/body entered")
    }
}


document.getElementById('send').onclick = send
document.getElementById('cancel').onclick = function(){
    if (confirm ("Are you sure you wish to cancel and discard?")){
 
        document.getElementById("email").value = ""
        document.getElementById("subject").value = ""
        document.getElementById("body").value = ""
        document.getElementById("file").value = null
        }
}

