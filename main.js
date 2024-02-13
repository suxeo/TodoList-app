//유저가 값을 입력한다  => html에 input을 가져오기
//+버튼을 클릭하면, 할일이 추가된다 => html에 button 
//delete버튼을 누르면 할일이 삭제된다
//Check버튼을 누르면 할일이 끝나면서 밑줄이 간다
    //1.check 버튼을 클릭하는 순간 false => true
    //2.true이면 끝나는 걸로 간주하고 밑줄 보여주기
    //3.false이면 안끝난걸로 간주하고 그대로
//Not Done Done 탭을 누르면, 언더바가 이동한다
//Done은, 끝난 item만, Not Done은 진행중인 item만
//전체탭을 누르면 다시 전체 item으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];
//event 생성
addButton.addEventListener("click",addTask) //이벤트,이벤트기능(함수-function)
//할일을 배열에 추가하는 함수
function addTask(){  
    //task(객체) 만들기
    let task = {
        id: randomIDGenerate(), //task 완료 클릭을 하여 구별하기 위힌 unique한 id 
        taskContent: taskInput.value, //user가 적은 값이 객체의 content
        isComplete: false  //task가 미완료
    }
    taskList.push(task); //다양한 객체인 task를 모아 놓은 taskList
    console.log(taskList); //확인용
    render();
}
 //할일task을 user가 보이는 보더에 추가하는 함수(user가 볼 수 있는 UI)
function render(){ 
    let resultHTML = ''; //render 함수에선 이전에 코드가 없어지고 다시 적어준다 (모든 task)
    for(let i=0;i<taskList.length;i++){  //넣어야 하는 것(task)들을 담을 수 있는 보더에 넣기 
        if(taskList[i].isComplete==true){  //taskList의 taskContent 줄을 그어주기 
            resultHTML += `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>  
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                <button>Delete</button>
            </div>
        </div>`
        }
        else{
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>  
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                <button>Delete</button>
            </div>
        </div>`;
        }
        
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}
//task check를 한 task id를 반복문으로 선별해 false=>true, true=>false로 바꾸는 함수 
function toggleComplete(id){ //check버튼을 누른 후 실행되는 코드
    console.log("id:",id); //확인용
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id==id){
            taskList[i].isComplete=!taskList[i].isComplete //false=>true 변경
            break;  //for문을 종료
        }
    }
    render(); //render함수 호출!
    console.log(taskList); //확인용
}
//unique한 ID생성 함수
function randomIDGenerate(){
    return "_" + Math.random().toString(36).substr(2, 9);
}