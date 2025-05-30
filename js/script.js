function click(){
    let num = Number.document.getElementById('impar').value;

    par = num % 2===0;
    impar =  num % 1 ===0;

    switch(acao){
        case par > 0:
            document.getElementById('mensagem').innerHTML= `O seu numero é par e positivo ${par}`;
        break; 

        case par < 0:
            document.getElementById('mensagem').innerHTML= `O seu numero ${par}`;
        break; 

        case par == 0:
            document.getElementById('mensagem').innerHTML= `O seu numero par é  ${par}`;
        break;     

        case impar > 0:
            document.getElementById('mensagem').innerHTML= `O seu numero impar é positivo  ${impar}`;
        break; 
    
        case impar < 0:
        document.getElementById('mensagem').innerHTML= `O seu numero impar é negativo  ${impar}`;
    break;         




    }


   
   
}