const n1 = [1,2,1];
const n2 = [1,3,3,3,1,3];
const n3 = [1,3,2,2,1,1,1];

function elementoMajoritatio(nums){
    const contagem = {};
    const metade = nums.length / 2;

    for(const num of nums){
        contagem[num] = (contagem[num] || 0) + 1;

        if(contagem[num] > metade){
            return num;
        }
    }
}

console.log(elementoMajoritatio(n2));