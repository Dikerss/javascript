// let todoInput, errorInfo, addBtn, ulList, newTodo
// let popup, popup_screen
// let popupInfo
// let todoEdit, close_id, change_id
// let popupInput
// let popupAddBtn
// let popupCloseBtn

// const main = () => {
//     prepareDOMElements()
//     prepareDOMEvents()
// }

// const prepareDOMElements = () => {
//     todoInput = document.querySelector('.todo-input')
//     errorInfo = document.querySelector('.error-info')
//     addBtn = document.querySelector('.btn-add')
//     ulList = document.querySelector('.todolist ul')

//     popup_screen = document.querySelector('.popup-screen')
//     popup = document.querySelector('.popup')
//     popupInfo = document.querySelector('.popup-info')
//     popupInput = document.querySelector('.popup-input')
//     popupAddBtn = document.querySelector('.accept')
//     popupCloseBtn = document.querySelector('.cancel')
// }

// const prepareDOMEvents = () => {
//     addBtn.addEventListener('click', addNewTodo)
//     ulList.addEventListener('click', checkClick)
//     popupCloseBtn.addEventListener('click', closePopup)
//     popupAddBtn.addEventListener('click', changeTodoText)
//     todoInput.addEventListener('keyup', enterCheckKey)
// }

// const addNewTodo = () => {
//     if(todoInput.value !== ''){
//         var text = todoInput.value
//         var date = new Date();
//         setCookie('obj'+date.getTime(),encodeURIComponent(text))
// 		addListItem('obj'+date.getTime(),text)
//         todoInput.value = ''
//         errorInfo.textContent = ''
//     }
//     else {
//         errorInfo.textContent = 'Wpisz treść zadania!'
//     }
// }

// const setCookie = (sName, sValue) => {
//     document.cookie = sName + '=' + escape(sValue);
//     var date = new Date();
//     date.setMonth(date.getYear()+1);
//     document.cookie += ('; expires=' + date.toUTCString()); 
// }

// const unsetCookie = (sName) => {
//     document.cookie = sName + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
// }

// const pageOnload = () => {
//     checkForObjectives()
//     checkForObjectives2()
// }

// const checkForObjectives = () => {
//     var cookies = document.cookie.split('; ');
//     cookies.sort();
//     for (var i=0; i < cookies.length; i++){
//         var part = cookies[i].split('=');
//         if(part[0].indexOf('obj')===0){
//         try{
//             addListItem(part[0],decodeURI(decodeURI(part[1])));
//             console.log(part)
//             }
//             catch(error){
//                 console.log(error.message+' '+part[1]);
//             }
//         }
//     }
// }

// const checkForObjectives2 = () => {
//     const allTodos = ulList.querySelectorAll('li')
//     if(allTodos.length === 0) {
//         errorInfo.textContent = 'Brak zadań na liście.'
//     }
// }

// const addListItem = (id,text) => {
//     newTodo = document.createElement('li')
//     newTodo.setAttribute("id", id)
//     newTodo.setAttribute("class", "")
//     newTodo.textContent = text
//     ulList.appendChild(newTodo)
//     createToolsArea(newTodo)
// }

// const createToolsArea = (li) => {
//     let newDiv = document.createElement('div')
//     newDiv.classList.add('tools')
//     for (let i = 0; i < 3; i++) {
//         let newButton = document.createElement('button')
//         if(i === 0) {
//             newButton.classList.add('complete')
//             newButton.innerHTML = '<i class="fas fa-check"></i>'
//             newDiv.appendChild(newButton)
//         }
//         else if(i === 1) {
//             newButton.classList.add('edit')
//             newButton.innerHTML = '<i class="fas fa-edit"></i>'
//             newDiv.appendChild(newButton)
//         }
//         else {
//             newButton.classList.add('delete')
//             newButton.innerHTML = '<i class="fas fa-times"></i>'
//             newDiv.appendChild(newButton)
//         }
//     }
//     li.appendChild(newDiv)
// }

// const checkClick = (e) => {
//     if(e.target.matches('.complete')) {
//         e.target.closest('li').classList.toggle('completed')
//         e.target.classList.toggle('completed')
//     }
//     else if (e.target.matches('.edit')){
//         editTodo(e)
//     }
//     else if (e.target.matches('.delete')) {
//         deleteTodo(e)
//     }   
// }

// const editTodo = (e) => {
//     todoEdit = e.target.closest('li')
//     change_id = e.target.closest('li').getAttribute('id')
//     popupInput.value = todoEdit.firstChild.textContent
//     popup_screen.classList.add("popup-animation");
// }

// const closePopup = () => {
//     popup_screen.classList.remove("popup-animation");
//     popupInfo.textContent = ''
// }

// const changeTodoText = () => {
//     if(popupInput.value !== '') {
//         todoEdit.firstChild.textContent = popupInput.value
//         popup_screen.classList.remove("popup-animation");
//         popupInfo.textContent = ''
//         console.log(change_id)
//         setCookie(change_id,encodeURIComponent(popupInput.value))
//     }
//     else {
//         popupInfo.textContent = 'Musisz podać treść!'
//     }
// }

// const deleteTodo = (e) => {
//     e.target.closest('li').remove()
//     close_id = e.target.closest('li').getAttribute('id')
//     unsetCookie(close_id);

//     const allTodos = ulList.querySelectorAll('li')
//     if(allTodos.length === 0) {
//         errorInfo.textContent = 'Brak zadań na liście.'
//     }
// }

// const enterCheckKey = (e) => {
//     if(e.key === 'Enter') {
//         addNewTodo()
//     }
// }

// document.addEventListener('DOMContentLoaded', main)



let todoInput, errorInfo, addBtn, ulList, newTodo
let popup, popup_screen
let popupInfo
let todoEdit, close_id, change_id, change_class, li_value
let popupInput
let popupAddBtn
let popupCloseBtn
let cookieBtn, cookieScreen

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup_screen = document.querySelector('.popup-screen')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
    cookieBtn = document.querySelector('.cookies_button_btn')
    cookieScreen = document.querySelector('.cookies_screen')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup', enterCheckKey)
    cookieBtn.addEventListener('click', cookieButtonBtn)
}

const cookieButtonBtn = () => {
    var date = new Date();
    var accepted = 'accepted'
    setCookie('cookie'+date.getTime(),encodeURIComponent(accepted))
    cookieScreen.classList.remove("popup-animation");
}

const addNewTodo = () => {
    if(todoInput.value !== ''){
        var text = todoInput.value
        var date = new Date();
        var clas = 'empty'
        setCookie('obj'+date.getTime(),encodeURIComponent(text),encodeURIComponent(clas))
		addListItem('obj'+date.getTime(),text,clas)
        todoInput.value = ''
        errorInfo.textContent = ''
    }
    else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const setCookie = (sName, sValue, sClass) => {
    if(sClass){
        document.cookie = sName + '=' + escape(sValue) + '=' + escape(sClass);
        var date = new Date();
        date.setMonth(date.getYear()+1);
        document.cookie += ('; max-age=31536000; SameSite=None; Secure; expires=' + date.toUTCString()); 
        console.log(document.cookie)
    }else{
        document.cookie = sName + '=' + escape(sValue);
        var date = new Date();
        date.setMonth(date.getYear()+1);
        document.cookie += ('; max-age=31536000; SameSite=None; Secure; expires=' + date.toUTCString()); 
        console.log(document.cookie)
    }
}

const unsetCookie = (sName) => {
    document.cookie = sName + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
}

const pageOnload = () => {
    checkForObjectives()
    checkForObjectives2()
}

const checkForObjectives = () => {
    var cookies = document.cookie.split('; ');
    console.log(document.cookie)
    cookies.sort();
    for (var i=0; i < cookies.length; i++){
        var part = cookies[i].split('=');
        if(part[0].indexOf('obj')===0){
        try{
            addListItem(part[0],decodeURI(decodeURI(part[1])),decodeURI(part[2]));
            console.log(part)
            }
            catch(error){
                console.log(error.message+' '+part[1]);
            }
        }else if(part[0].indexOf('cookie')===0){
            cookieScreen.classList.remove("popup-animation");
        }
    }
}

const checkForObjectives2 = () => {
    const allTodos = ulList.querySelectorAll('li')
    if(allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
}

const addListItem = (id,text,clas) => {
    newTodo = document.createElement('li')
    newTodo.setAttribute("id", id)
    newTodo.setAttribute("class", clas)
    newTodo.textContent = text
    ulList.appendChild(newTodo)
    createToolsArea(newTodo)
}

const createToolsArea = (li) => {
    let newDiv = document.createElement('div')
    newDiv.classList.add('tools')

    change_class = li.getAttribute('class')
    for (let i = 0; i < 3; i++) {
        let newButton = document.createElement('button')
        if(i === 0) {
            if(change_class === "empty"){
                newButton.classList.add('complete')
                newButton.innerHTML = '<i class="fas fa-check"></i>'
                newDiv.appendChild(newButton)
            }else{
                newButton.classList.add('complete')
                newButton.classList.add('completed')
                newButton.innerHTML = '<i class="fas fa-check"></i>'
                newDiv.appendChild(newButton)
            }
        }
        else if(i === 1) {
            newButton.classList.add('edit')
            newButton.innerHTML = '<i class="fas fa-edit"></i>'
            newDiv.appendChild(newButton)
        }
        else {
            newButton.classList.add('delete')
            newButton.innerHTML = '<i class="fas fa-times"></i>'
            newDiv.appendChild(newButton)
        }
    }
    li.appendChild(newDiv)
}

const checkClick = (e) => {
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('empty')
        e.target.closest('li').classList.toggle('completed')

        change_id = e.target.closest('li').getAttribute('id')
        change_class = e.target.closest('li').getAttribute('class')
        li_value = e.target.closest('li').firstChild.textContent

        setCookie(change_id,encodeURIComponent(li_value),encodeURIComponent(change_class))


        e.target.classList.toggle('completed')
    }
    else if (e.target.matches('.edit')){
        editTodo(e)
    }
    else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }   
}

const editTodo = (e) => {
    todoEdit = e.target.closest('li')
    change_id = e.target.closest('li').getAttribute('id')
    change_class = e.target.closest('li').getAttribute('class')
    popupInput.value = todoEdit.firstChild.textContent
    popup_screen.classList.add("popup-animation");
}

const closePopup = () => {
    popup_screen.classList.remove("popup-animation");
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if(popupInput.value !== '') {
        todoEdit.firstChild.textContent = popupInput.value
        popup_screen.classList.remove("popup-animation");
        popupInfo.textContent = ''
        setCookie(change_id,encodeURIComponent(popupInput.value),encodeURIComponent(change_class))
    }
    else {
        popupInfo.textContent = 'Musisz podać treść!'
    }
}

const deleteTodo = (e) => {
    e.target.closest('li').remove()
    close_id = e.target.closest('li').getAttribute('id')
    unsetCookie(close_id);

    const allTodos = ulList.querySelectorAll('li')
    if(allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
}

const enterCheckKey = (e) => {
    if(e.key === 'Enter') {
        addNewTodo()
    }
}

document.addEventListener('DOMContentLoaded', main)
document.addEventListener('DOMContentLoaded', pageOnload)
