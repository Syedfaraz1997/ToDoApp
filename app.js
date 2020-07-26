
var list = document.getElementById("list");

var todoitem = document.getElementById('todo-item');
var target = todoitem.innerHTML;
console.log(target)



function Addtodo(){
    var todoitem = document.getElementById('todo-item');
    var target = todoitem.value;
    
    if(target == ""){
        alert("Please Insert an Value its Compulsory");
    }else{

        var todoitem = document.getElementById('todo-item');

        //list Tage
        var li = document.createElement('li');
        var litext = document.createTextNode(todoitem.value);
        li.setAttribute("class", "liees")
        li.appendChild(litext);
        list.appendChild(li);

        //liinput

        // var li_int = document.createElement("input");
        // li_int.setAttribute("type" , "text")
        // var li_int_text = document.createTextNode(todoitem.value);
        // li_int.appendChild(li_int_text);
        // li.appendChild(li_int)

        // console.log(li)


        //Button Tag Deleted

        var delbtn = document.createElement('button');
        var deltext = document.createTextNode('Deleted')
        delbtn.setAttribute("class","deelbtn");
        delbtn.setAttribute("onclick" , "Deleteditem(this)")
        delbtn.appendChild(deltext)
        li.appendChild(delbtn)

        // console.log(parentNode.firstChild)

        // Edit Btn


        var editbtn = document.createElement('button');
        var edittext = document.createTextNode('Edit item');
        editbtn.setAttribute("class", "deelbtn");
        editbtn.setAttribute("onclick" , "Edititem(this)")
        editbtn.appendChild(edittext);

        li.appendChild(editbtn)



        todoitem.value = "";


       var intedit = document.createElement("input");
       intedit.setAttribute("id" , "editintp");

    }


        // console.log(target)



}

function Deleteditem(e){
    e.parentNode.remove();

}


function Edititem(e){
    var val = e.parentNode.firstChild.nodeValue;

    document.getElementById("editintp");

    // var li_int = document.createElement("input");
    // li_int.setAttribute("type" , "text")
    // var li_int_text = document.createTextNode(todoitem.value);
    // li_int.appendChild(li_int_text);
    // li.appendChild(li_int)
    editvalue = prompt("Please Edit Your New Work" , val)
    e.parentNode.firstChild.nodeValue = editvalue;



}
function DeletedAll(){
    list.innerHTML = "";

}