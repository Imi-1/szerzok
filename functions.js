function validateFormInputFields(inputElement, errormessage){
    let validation = true; 
    if(inputElement.value === ""){ 
        const parentElement = inputElement.parentElement; 
        const error = parentElement.querySelector('.error'); 
        error.innerHTML = errormessage; 
        validation = false;
    }
    return validation;  
}

function validateFormInputFieldsExtra(inputElement){
    let validation = true; 
    const checkbox = document.getElementById('masodik');

    if (checkbox.checked){
        if(inputElement.value === ""){ 
            const parentElement = inputElement.parentElement; 
            const error = parentElement.querySelector('.error'); 
            error.innerHTML = "Kötelező megadni a második művet!" ; 
            validation = false;
        }
    } 
    else {
        if (inputElement.value !== "") {
            const parentElement = checkbox.parentElement;
            const error = parentElement.querySelector('.error');
            error.innerHTML = "Ki kell pipálni a checkboxot, ha második művet adsz meg!"; 
            validation = false;
        }
    }
    
   
    return validation;  
   
}


function createHeader(){
    const headerObj = {
        cell1: "Szerző neve",
        cell2: "Csapat",  
        cell3: "Művei"    
    };
    
    const tableID=document.getElementById("tableID")

    const thead = document.createElement('thead');
    tableID.appendChild(thead); 

    const headerRow = document.createElement('tr');
    thead.appendChild(headerRow);

    for(const i in (headerObj)){ 
        const headerCell = document.createElement('th'); 
        headerCell.innerHTML = headerObj[i]; 
        headerRow.appendChild(headerCell); 

        if(i==="cell3"){
            headerCell.colSpan = "2"
        }
    }
}