const array = [
    {
        cell1: "Vörösmarty Mihály",
        cell2: "romantikus triász",
        cell3: "Zalán futása",
        cell4: "Szózat"
    },
    {
        cell1: "Móricz Zsigmond",
        cell2: "Nyugat I.",
        cell3: "Hét krajcár",
    },
    {
        cell1: "Illyés Gyula",
        cell2: "Nyugat II.",
        cell3: "Egy mondat a zsarnokságról",
        cell4: "Puszták népe"
    },
    {
        cell1: "Radnóti Miklós",
        cell2: "Nyugat III.",
        cell3: "Pogány köszöntő",
        cell4: "Járkálj csak, halálraítélt"
    }
];

const table = document.createElement('table');
table.id="tableID";
document.body.appendChild(table);

const tbody = document.createElement('tbody'); 
tbody.id="tbodyID";
table.appendChild(tbody);

createHeader(); 
// renderTable(array);
// generateForm();


const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const thisForm = e.currentTarget;
    const errorElements = thisForm.querySelectorAll('.error');
    for (const i of errorElements) {
        i.innerHTML = "";
    }
    let valid = true;

    const cell1HtmlElement = document.getElementById('szerzo_nev');
    const cell2HtmlElement = document.getElementById('group');
    const cell3HtmlElement = document.getElementById('mu1');
    const cell4HtmlElement = document.getElementById('mu2');
    
    const cell1Value = cell1HtmlElement.value;
    const cell2Value = cell2HtmlElement.value;
    const cell3Value = cell3HtmlElement.value;
    const cell4Value = cell4HtmlElement.value === '' ? undefined : cell4HtmlElement.value;

    if (!validateFormInputFields(cell1HtmlElement, "Kötelező megadni a szerző nevét!")) {
        valid = false;
    }

    if (!validateFormInputFields(cell2HtmlElement, "Kötelező megadni a csapat nevét!")) {
        valid = false;
    }

    if (!validateFormInputFields(cell3HtmlElement, "Kötelező megadni az első művet!")) {
        valid = false;
    }

    if (!validateFormInputFieldsExtra(cell4HtmlElement)) {
        valid = false;
    }

    if (valid) {
        const newElement = {
            cell1: cell1Value,
            cell2: cell2Value,
            cell3: cell3Value,
            cell4: cell4Value,
        };

        array.push(newElement);

        tbody.innerHTML = '';
        renderTable(array);

        thisForm.reset();
    }
});
