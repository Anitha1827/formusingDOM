const form = document.getElementById("form");
const table = document.getElementById("table");
const clearBtn = document.getElementById("clearbtn");

clearBtn.addEventListener("click",function(){
    form.reset();
})

form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const fname = document.getElementById("first-name").value;
    const lname = document.getElementById("last-name").value;
    const address = document.getElementById("address").value;
    const Pincode = document.getElementById("pincode").value;
    const male = document.getElementById("male").value;
    const female = document.getElementById("female").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
  
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    const cell8 = row.insertCell(7);
  
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = address;
    cell4.innerHTML = Pincode;
    cell5.innerHTML = male;
    cell6.innerHTML = female;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

   

    var getSelectedValue = document.querySelector( 'input[name="gender"]:checked');   
    if(getSelectedValue != null) {   
       
    }else {  
         alert("Please select Gender");  

    } 
  });

  