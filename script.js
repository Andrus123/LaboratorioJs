//Generar las siguientes series, para ello Utilizar Formularios y Javascript
//1.- Fibonacci
function Fibonacci()
{
    let form = document.getElementById("formulario");
    let num = form.elements['fibonacci'];
    let a=0, b=1,c,s=1;
    alert(a, b);
    for (let index = 3; index <= num; index++) {
        c=a+b;
        alert(c);
        s = s+c;
        a = b;
        b = c;
    }
}