// Crie uma função que receba dois arrays e os concatene em um único array.
const arrayNum1 = ['João', 'Maria'];
const arrayNum2 = [18, 29];


function juntaArray(array1,array2){
    return array1.concat(array2);
}

const arrayJunto = juntaArray(arrayNum1, arrayNum2);
console.log(arrayJunto);