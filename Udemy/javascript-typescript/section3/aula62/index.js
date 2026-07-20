function number(num){
    if(typeof num === 'string'){
        return console.log('Elemento inserido não e um número!');
    }if(num < 0 || num > 100){
        return console.log('O número inserido deve ser entre 0 a 100.');
    }if(num % 3 === 0 && num % 5 === 0){
        return console.log('FizzBuzz');
    }if(num % 3 === 0){
        return console.log('Fizz');
    }if(num % 5 === 0){
        return console.log('Buzz');
    }else{
        console.log(num);
    }
}

number(15);