
//Задачи на основы работы с DOM в JavaScript//

// function buttonClick(){   //Задача №2//
//     let input = document.getElementById('input');
//     input.value = '!!!'
// } 

//  function buttonClick(){ //Задача №3//
//     let input = document.getElementById('input');
//     alert(input.value)
//  }

// function buttonClick(){ //Задача №4//
//     var input = document.getElementById('input')
//     var num = Number(input.value);
//     var square = num * num;
//     alert(square)
// }

// function buttonClick(){ //Задача №5//
//     var input1 = document.getElementById('input1');
//     var input2 = document.getElementById('input2');
//     var Input1value = input1.value;
//     var Input2value = input2.value;
//     input1.value = Input2value;
//     input2.value = Input1value;
// }

// function buttonClick(){ //Задача №6//
//     let input = document.getElementById('input');
//     input.value = 'Новый текст кнопки';
// }
// function buttonClick(){ 
//     let input = document.getElementById('input');
//     input.value = 'Новый текст кнопки';
// }
// function buttonClick(){ //Задача №7//
//     let input = document.getElementById('input');
//     input.style.color = 'red';
// }

// function buttonClick1(){  //Задача №8//
//     let input = document.getElementById('input');
//     input.disabled  = true;
// }
// function buttonClick2(){
//     let input = document.getElementById('input');
//     input.disabled  = false
// }


//-------ЗАДАЧИ ДЛЯ РЕШЕНИЯ--------//
// function buttonClick(){              //5//
//     let input = document.getElementById('input');
//     alert(input.value)
// }

// function buttonClick(){              //6//
//     let input = document.getElementById('input');
//     input.value =  "Ой, я поменял свой текст!";
// }

// function buttonClick(){              //9//
//     let input = document.getElementById('input');
//     let value =  "Ой, я поменял свой текст!";
//     alert(value) 
// }

// function buttonClick(){               //10//
//     let input = document.getElementById('input');
//     input.value =  "Ой, я поменял свой текст!";
// }
// function buttonUnclick(){      
//     let input = document.getElementById('input');
//     input.value =  "Ой, я опять поменял свой текст!";
// }

// function buttonClick(){ //11//
//     let input = document.getElementById('input');
//     input.innerHTML =   "Ку-ку!";
// }

// function buttonClick(){ //12//
//     let input = document.getElementById('input');
//     input.innerHTML = "О,теперь на меня больше не нажать!"
//     input.disabled = true
// }

// function imgClick(){ //13//
//     let input = document.getElementById('input').src = "./assets/img/2.jpg";
// }
// function unimgClick(){
//     let input = document.getElementById('input').src = "./assets/img/1.jpg";
// }

// function buttonClick(){ //14//
//     let input = document.getElementById('input');
//     input.style.color = "red"
//     input.style.width = "300px"
// }

// function buttonClick(){ //15//
//     let input = document.getElementById('input');
//     input.style.display = "none"
// }
// function buttonClick2(){
//     let input = document.getElementById('input');
//     input.style.display = "inline-block"
// }

// function buttonClick(){ //16//
//     let input = document.getElementById('input');
//     input.style.color = "red";
//     input.style.padding = "20px";
//     input.style.border = "2px black solid";
//     input.style.borderRadius = "20px";
//     input.value = "Ой, я поменял свой текст и css!"
// }

// function buttonClick(){ //17//
//     let input = document.getElementById('input');
//     let input2 = document.getElementById('input2')
//     input.value = "Больше не нажмешь на меня"
//     input.disabled = true;
//     input2.style.display = "flex"
// }
// function buttonClick2(){ 
//     input.disabled = false
//     input.value = "Нажми на меня"
//     input2.style.display = "none"
// }

// function go(elem){  //18//
//     elem.value = parseInt(elem.value) + 1;
// }

// function buttonClick(){ //19//
//     let input = document.getElementById('input');
//     input.style.cssFloat = "right";
//     input.value = "Теперь я плаваю справа!  "   
// }

// function buttonClick(){ //20//
//     let input = document.getElementById('input');
//     input.style.width = "250px"
//     input.value = "Мои css классы:" + input.className
// }

// function buttonClick(){ //21//
//     let input = document.getElementById('input');
//     let input2 = document.getElementById('input2')
//     let input_value = input.value 
//     input.value = input2.value
//     input2.value = input_value
// }

// function buttonClick(){ //22//
//     let input = document.getElementById('input');
//     let input2 = document.getElementById('input2');
//     input2.disabled = true 
//     let unput = input.value
//     input2.value = Number(unput * unput)
// }

// function buttonClick(){ //20//
//     let input = document.getElementById('input');
//     input.style.width = "250px"
//     input.value = "Мои css классы:" + input.className
// }

// function buttonClick(){ //23//
//     let input = document.getElementById('input');
//     let input2 = document.getElementById('input2');
//     input2.disabled = true 
//     let unput = input.value
//     if (isNaN(input.value) == false){
//         input2.value = Number(unput * unput)
//     }
//     else{
//         alert('Введено не число!')
//     }
// }

// function add(text){ //25//
//     let input = document.getElementById('input');
//     input.value = input.value + text
// }

//Задачи на работу с элементами страницы в JavaScript//

//Задача№1//
function buttonClick(){
    let elem = document.getElementById("elem");
    elem.innerHTML = "!!!"
}

//Задача№2//
function buttonClick1(){
    let elem = document.getElementById("elem2");
    elem.outerHTML = "<b>"+elem.innerHTML+"</b>"
}
//Задача№3//
function func() {
	var elems = document.getElementsByTagName('p');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
	}
}
//Задача№4//
function func1() {
	var elems = document.getElementsByClassName('zzz');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;   
	}
}
//Задача№5//
function func2() {
	var elems1 = document.querySelectorsAll('p.zzz');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;   
	}
}
//Задача№6//


//--ЗАДАЧИ ДЛЯ РЕШЕНИЯ--//


//Задача№1//
function go(){
    let elem = document.getElementById("text")
    elem.innerHTML = "Ку-ку! А я<b> жирный</b>!"
}
//Задача№2//
function go1(){
    let elem = document.getElementById("text1")
    elem.outerHTML = "<h3>Абзац превратился в h3!</h3>"
}
//Задача№3//
function go2(){
    let elem = document.getElementById("text2")
    elem.outerHTML = "<h3>При нажатии на кнопку абзац станет h3, но текст останется.</h3>"
}
//Задача№4//
function go3(){
    let input_first = document.getElementById("input_first")
    let input_second = document.getElementById("input_second")
    let result = document.getElementById("result") 
    let input_first_num = input_first.value
    let input_second_num = input_second.value
    result.innerHTML = Number(input_first_num) + Number(input_second.value)
}
//Задача№5//
function go4(){
    let elem = document.getElementsByClassName("text5")
    for ( let i = 0; i < elem.length; i++){
        elem[i].innerHTML = "Ку-ку!"
    }
}
//Задача№6//
function go6(){
    let elem = document.getElementsByClassName("www")
    for ( let i = 0; i < elem.length; i++){
        elem[i].innerHTML = i+1
    }
}
//Задача№7//
function go7(){
    let elem = document.querySelectorAll("p.www1")
    for ( let i = 0; i < elem.length; i++){
        elem[i].innerHTML = i+1
    }
    console.log(elem)
}
//Задача№8//
function go8(){
    let elem = document.querySelector(".my-class1")
    alert(elem.getAttribute('class'))
}   
//Задача№9//
function go9(){
    let elem = document.querySelector(".my-class")
    alert(elem.getAttribute('class'))
}
function del9(){
    let elem = document.querySelector(".my-class")
    elem.removeAttribute('class')
    alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!')
}
//Задача№10//
function go10(){
    let elem = document.querySelector(".my-class")
    alert(elem.getAttribute('class'));
}
function del10(){
    let elem = document.querySelector(".my-class")
    elem.setAttribute('class','new-class')
    alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!')
}
//Задача№11//
function go11(elem){
    let text = document.getElementById('text1');
    text.innerHTML = elem.value;
    console.log(text.innerHTML)
}
//Задача№12//
function go12(){
    urls = document.getElementsByTagName('a')
    for (var i = 0; i < urls.length; i++){
        urls[i].innerHTML = urls[i].innerHTML+' ('+urls[i].getAttribute('href')+')';
    }
}
//Задача№13//
function go13(elem){
    elem.disabled = true
    elem.value  =  'О, на меня нельзя больше нажать!';
    let text = document.getElementById("text13")
    text.innerHTML = "Привет, мир!"
    text.style.color = "red"
}
//Задача№14/
function go14(){
    let elem = document.querySelectorAll('p.text14')
    for ( let i = 0; i < elem.length; i++){
        elem[i].innerHTML = i+1
    }
}
//Задача№15//
function go15(){
    let elem = document.querySelectorAll('p.text15')
    let text = elem.innerHTML
    console.log(text)
    for ( let i = 0; i < elem.length; i++){
        elem[i].innerHTML = i + '. ' + elem[i].innerHTML;
    } 
}







