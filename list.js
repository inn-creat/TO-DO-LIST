const inputbox = document.getElementById('input-box');
const inputlist = document.getElementById('list');
function addtask(){
    if(inputbox.value === ''){
        alert('you must write something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        inputlist.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}
inputlist.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem('data',inputlist.innerHTML);
}
function showtask(){
    inputlist.innerHTML = localStorage.getItem('data');
}
showtask();