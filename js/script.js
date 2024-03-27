//alert("Olá, Mundo");

document.write("<h1>Olá, <i><s>M</s> Mundo</h1>");

// 2ª Aula de JS 

document.write("<hr>");

// DECLARAÇÃO DE VARIAVEIS

var a, b, c, d;

a = 5;
b = 12+13+(5*5);
c = 17+13;
d = 2+2+8/2+6;
document.write("<br>",a);

document.write("<br>",c);

document.write("<br>",b);

document.write("<br>",d);

//document.write ("Identificar o tipo da variavel");

document.write("</br></br>", typeof (a));

//Operadores de atribição

var num1, num2, soma, sub, mul, div;
num1 = 12; 
num2 = 10;
num1 += 20;
document.write("</br>",num1);

soma = (a+b*c)/num1;


document.write ("</br>",soma);

//Incremento e Decremento

var num3;
num3 = 1;
document.write("<br>",num3++);
document.write("<br>",num3);

var a = 1;
var b, res = 3;
document.write(++a);
document.write(a++);
document.write(a);
b = a + 2;
document.write("<br> b:", b);
res += 3;
document.write("<br> res:", res);
document.write("<hr>");

//Condicionais

a = "4";
b = 4;

document.write(a==b, "</br>");

// Operadores Logicos

document.write(!(!a == b),"<br>");
document.write((b !=10)&&(a<=b),"</br>");

// Estrutura condicional
document.write("<hr>");

a = 20;
b = 30;
nota1 = 9;
nota2 = 5;
nota3 = 6;
media = ((nota1 + nota2 + nota3)/3);

if(media >= 7){
    document.write("Aprovado")
     
     } else { 
        if (media >=5 ) {
            document.write("Recuperação")
                  
        } 
        else
        document.write("Reprovado")
        
        
     }
     document.write("<hr>");
        var a = 0;  
          while (a < 20) {
        a++;
       document.writeln(a,);
      }
      document.write("<hr>");

      var x;

      for (x=0;x<=10;x++){
         document.writeln(x,"-");
      }
      document.write("<hr>");

/*
     VAR  -> Pode ser atualizada e declarada novamente. 
     LET  -> Pode ser atualizada mas não pode ser declarada novamente.
     CONST-> Não pode ser atualizada e declarada novamente.
     */

const bi = 30;
//bi=20;

document.write (bi);
document.write("<hr>");

function alerta(){
     alert("SEU PC FOI HACKEADO!")
     }

     /*CRIAR UMA FUNÇÃO QUE SERÁ ATIVADA ATRAVÉZ DE UM BOTÃO
     ONDE SERÁ EXIBIDO O NOME E SOBRENOME DO CIDADÃO
     */ 

     document.write("<hr>");     

function MeuNome(nome,sobrenome){
   alert("meu nome é:" + nome +" " +sobrenome)
}  

function confirma(){
   var r = confirm("confirma");
   if (r == true){
      alert("voce confirmou");


   }else{
      alert("voce não confirmou");
   }


}

/*function createButton()
{
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode("MEU NOME");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
        window.history.go(0);
     }
     document.body.appendChild(btn);    
}

createButton();
*/

function estrada(){
   var y = prompt("qual item deseja incluir", "Digite o item");
   document.write(y, "inserir na lista");
}



