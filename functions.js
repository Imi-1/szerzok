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