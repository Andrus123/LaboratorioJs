//Generar las siguientes series, para ello Utilizar Formularios y Javascript
//1.- Fibonacci
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active')
}
function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
}



function fibo(){
    var numero = document.getElementById("fibonacci"); 
    var num = parseInt(numero.value);
    var num1=1;
    var num2=0;
    var sum;
    var i=0;
    var imprimir;
    for (i = 0; i < num; i++) 
    {
        console.log(num2);
        imprimir = document.createTextNode(num2+",");
        document.getElementById("modal-body").appendChild(imprimir);
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
}

