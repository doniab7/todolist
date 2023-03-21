var i = 0;
var list = document.querySelector("#add");

document.querySelector("#Button").addEventListener("click",function(){
   
  var name = document.querySelector("#Name").value.trim();
  var content = document.querySelector("#Content").value.trim();
  
  if ((name != "")  &&(content != "") ){
    
      i++;

      var todo = name + " " + content;
      var newtodo = document.createElement("li");
      newtodo.id = "todo"+i;
      newtodo.innerText = todo;
      newtodo.className = "alert alert-warning alert-dismissible fade show"
      list.appendChild(newtodo);


      var del = document.createElement("button");
      del.className = "btn-close";
      newtodo.appendChild(del);

      del.addEventListener("click", (e)=>{
         e.preventDefault();
         newtodo.remove();
      });

      newtodo.addEventListener("click", ()=>{
        let n1 = Math.floor(Math.random() * 256);
        let n2 = Math.floor(Math.random() * 256);
        let n3 = Math.floor(Math.random() * 256);
        let v = 'rgb(' + n1 + ',' + n2 + ',' + n3  + ')' ;
        newtodo.style.backgroundColor =  v;
      })
  }
})

