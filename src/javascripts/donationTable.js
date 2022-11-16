//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import { Alert } from "bootstrap"

let initial_names = [
    {
        "first": "Tom",
        "last": "Slyder",
        "amount": "5.25"
    }
]



function getNames(){
if(localStorage.getItem('names') && localStorage.getItem('names') != '[]'){
    return JSON.parse(localStorage.getItem('names'))
}
else {
  
    return initial_names
}

}

function addNewName(event){
    var w = window.innerWidth
    event.preventDefault()
    let f = ''
    let l = ''
    let a = ''
    
   
   if (w > 599){
   
    f = document.getElementById('first_name').value
    l = document.getElementById('last_name').value
    a = document.getElementById('amount').value
   }
   else {

    f = document.getElementById('first_name_sm').value
    l = document.getElementById('last_name_sm').value
    a = document.getElementById('amount_sm').value

   }
   if (f && l && a){
   if (confirm("Are you sure you want to donate $" + a + "?")){

   let names = getNames()
    
    let name = {first: f, last: l, amount: a}
    names.push(name)
    localStorage.setItem('names', JSON.stringify(names))
   
        alert("Thank you " + f + " for your donation!")

        //check that donation ammount is the highest
        var greaterThan
        for (let n of names){
            if (n.amount > a){
                greaterThan = false
                break
            }
            else {
                greaterThan = true
            }
        }
        if (greaterThan = true){
            alert("Thank you "+f+"! You are our top donator!")
        }
    }

    
   
}
        
    
   
   document.querySelector("#first_name").value = ""
   document.querySelector("#last_name").value = ""
   displayName()
  }
  
  function displayName(){
    let names = getNames()
    let names_html = ''
    let ndx = 1

    //sort by donations
    names.sort(function (x, y){
        return y.amount - x.amount;
    
        })

    for (let n of names){
   
                names_html += `
                    <tr>
                    
                        <td class="text-light">${ndx}</td>
                        <td class="text-light">${n.first}</td>
                        <td class="text-light">${n.last}</td>
                        <td class="text-light">$${n.amount}</td>
                    </tr>
                `

        
        
        ndx ++
    }

 
    document.getElementById('myTable').innerHTML= names_html
}


    
  document.getElementById('submit').onclick = addNewName
  document.getElementById('submit_sm').onclick = addNewName

  document.getElementById('reset').onclick = function(){
    document.querySelector("#first_name").value = ""
   document.querySelector("#last_name").value = ""
   document.querySelector("#amount").clearValue
  }
  displayName()

  

