function Scoot(string,float,property){
    document.querySelector(string).style[property] = parseFloat(document.querySelector(string).style[property]) + float + "px";
}

function fechar(string){
    document.querySelector(string).style.visibility = "hidden";
}

function show(string,string2){

    document.querySelector(string).style.visibility = "visible";
    

    if(string2 != ""){
    var ids = string2.split(',').map(id => id.trim());

    ids.forEach(function(id) {
     var elements = document.querySelectorAll(id);
    elements.forEach(function(element) {
    element.disabled = true;
         });
    });

    document.querySelectorAll(string2).disabled = true;
}
}