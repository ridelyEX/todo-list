/*ejemplo*/
function handlerAgregar(){
    var input = document.getElementById("inputTarea");
    const listaToDo = document.getElementById("listaToDo");
    const tarea = input.value;

    var arrayTareas= localStorage.setItem("listaTareas");
    if (tarea !==""){
        arrayTareas.push(tarea);
        const li = document.createElement("li");
        li.className= "list-group";
    /*Contenedor interno */
    const divInterno=document.createElement("div");
    divInterno.className="d-flex justify-content-between";
    //texto de tarea
    const span=document.createElement("span");
    span.innerText = tarea;
    //creación botón done
    const botondone = document.createElement("button");
    botondone.type="button";
    botondone.className="btn btn-success";
    botondone.innerText="Done";
    botondone.onclick=handlerDone;

    //agrupacion de elementos
        divBotonesappaendChild(botondne);
        divInterno.appendChild(span);
        divInterno.appendChild(divBotones);
        li.appendChild(divInterno);
        listaToDo.appendChild(li);
    }
}

function handlerDone(event){
const li=event.target.parentElement.parentElement.parentElement;
const listDone=document.getElementById("listDone");
listDone.appendChild(li);
}

function handlerDelete(event){
    const li=event.target.parentElement.parentElement.parentElement;
    l

}