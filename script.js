
function maxLen(){
  var inputField = document.querySelector("input");

  if(inputField.value.length >=30){

    const notyf = new Notyf({
      duration: 3000,
      position: {
        x: 'right',
        y: 'top',
      },
      types: [
        {
          type: 'error',
          background: 'rgb(255, 165, 9)',
          dismissible: true,
          icon: {
            className: 'material-icons',
            tagName: 'i',
            text: 'warning'
          }
        },
        {
          type: 'success',
          background: '#1ad25e',
          duration: 2000,
          dismissible: true
        }
      ]
    });

    notyf.open({
      type: 'error',
      message: 'Input Limit exceeds'
    });

  }

}



function errorFun(){
    var inputField = document.querySelector("input");
      
    const notyf = new Notyf({
      duration: 3000,
      position: {
        x: 'right',
        y: 'top',
      },
      types: [
        {
          type: 'error',
          background: 'rgb(255, 165, 9)',
          dismissible: true,
          icon: {
            className: 'material-icons',
            tagName: 'i',
            text: 'warning'
          }
        },
        {
          type: 'success',
          background: '#1ad25e',
          duration: 2000,
          dismissible: true
        }
      ]
    });

    
      if(inputField.value ==""){
            
        notyf.open({
            type: 'error',
            message: 'Enter a valid Task'
          });
        

      }else{

        document.querySelector("#task").innerHTML += 
        `<div class="taskmain" style="height: auto;width: 300px;padding: 2px 10px;display:inline-block;align-items: center;justify-content: space-between;">
        <span id="taskname"> ${document.querySelector(".input").value}
        <span  onclick="doneFun()" id="done" class="material-symbols-outlined" style="float:right;margin-right:-60px">check_circle</span>
        </span><hr id="break">
        </div>`;

        notyf.open({
          type: 'success',
          message: 'Task added'
        });

        document.querySelector("input").value = "";

        
      }

      
}



function doneFun(){

  const notyf = new Notyf({
    duration: 3000,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'error',
        background: 'rgb(255, 165, 9)',
        dismissible: true,
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      },
      {
        type: 'success',
        background: '#1ad25e',
        duration: 2000,
        dismissible: true
      }
    ]
  });


  notyf.open({
    type: 'success',
    message: 'Task Completed'
  });

  var currentTask = document.querySelectorAll("#taskname");
  for(var i=0; i<currentTask.length; i++){
    currentTask[i].onclick = function(){
      this.parentNode.remove();
    }
  }
}




// show colour

function colorFun(){
  var colourElement  = document.querySelector(".colours");
  colourElement.style.display = "grid";
}

function closeFun(){
  var closeElement  = document.querySelector("#close");
  var colourElement  = document.querySelector(".colours");
  colourElement.style.display = "none";
}




function pFun(){
  document.body.style.backgroundColor = "#ef2c60";
  var colourElement  = document.querySelector(".colours");
  colourElement.style.display = "none";
}

function gFun(){
  document.body.style.backgroundColor = "#08c554";
  var colourElement  = document.querySelector(".colours");
  colourElement.style.display = "none";
}

function bFun(){
  document.body.style.backgroundColor = "#0284c5";
  var colourElement  = document.querySelector(".colours");
  colourElement.style.display = "none";
}


function blackFun(){
  document.body.style.backgroundColor = "#000000";
  var colourElement  = document.querySelector(".colours");
  colourElement.style.display = "none";
}

function orangeFun(){
  document.body.style.backgroundColor = "#edc00e";
 var colourElement  = document.querySelector(".colours");
  colourElement.style.display = "none";
}



