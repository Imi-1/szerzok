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


function renderTable(array){
    for (const i in array) {
        const row1 = document.createElement('tr');
        const tbodyID=document.getElementById("tbodyID");
        tbodyID.appendChild(row1);
    
        const cell1 = document.createElement('td');
        cell1.innerHTML = array[i].cell1;
        row1.appendChild(cell1);

        const cell2 = document.createElement('td');
        cell2.innerHTML = array[i].cell2;
        row1.appendChild(cell2); 
    
        const cell3 = document.createElement('td');
        cell3.innerHTML = array[i].cell3;
        row1.appendChild(cell3); 

        cell3.colSpan = "2";

        if(array[i].cell4!==undefined){
            cell3.colSpan = "1"
             
            const cell4 = document.createElement('td'); 
            cell4.innerHTML = array[i].cell4; 
            row1.appendChild(cell4);
        }
    }
  
}


function createLabel(labelText, htmlFor) {
    const label = document.createElement('label'); 
    label.textContent = labelText;
    label.htmlFor = htmlFor;
    return label;
}
function createInput(inputType, inputId, inputName) {
    const input = document.createElement('input');
    input.type = inputType;
    input.id = inputId;
    input.name = inputName;
    return input;
}
function createErrorDiv() {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    return errorDiv;
}


function generateForm() {
    const form = document.createElement('form');
    form.id = 'form';
    form.action = '#';
    const fields = [
        {
            label: 'Szerző neve:',
            id: 'szerzo_nev',
            name: 'szerzo_nev',
            type: 'text'
        },
        {
            label: 'Csapat:',
            id: 'group',
            name: 'group',
            type: 'text'
        },
        {
            label: 'Első mű:',
            id: 'mu1',
            name: 'mu1',
            type: 'text'
        },
        {
            label: 'Szeretnél megadni második művet is?',
            id: 'masodik',
            name: 'masodik',
            type: 'checkbox'
        },
        {
            label: 'Második mű:',
            id: 'mu2',
            name: 'mu2',
            type: 'text'
        }
    ];
    
    
    for (const i of fields) {
        //field div
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'field';
        //lable
        const label = createLabel(i.label, i.id);
        fieldDiv.appendChild(label);
        fieldDiv.appendChild(document.createElement('br'));
        //input
        const input = createInput(i.type, i.id, i.name);
        fieldDiv.appendChild(input); 
        fieldDiv.appendChild(document.createElement('br'));
        //error div
        const errorDiv = createErrorDiv();
        fieldDiv.appendChild(errorDiv);
        fieldDiv.appendChild(document.createElement('br'));
        form.appendChild(fieldDiv);
    }
    //button
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Hozzáadás'; 
    form.appendChild(button);
    document.body.appendChild(form);
}