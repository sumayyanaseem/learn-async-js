const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function SumOfARow(arr,rowIndex){
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length>rowIndex) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr[rowIndex].length; i++) {
                        sum += arr[rowIndex][i];
                    }

                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('index out of bounds');
        }
        console.log('returning from sum');

})
}

async function CalculateSum(){
    promises=[];

for(let x=0;x<array2D.length;x++){
    promises.push(SumOfARow(array2D,x))
}
const rowSums = await Promise.all(promises);
try{
        let sum=0;
        rowSums.forEach(rowsum =>{
            sum+=rowsum;
        });
        console.log(sum);
        return 'done'
    }catch(error){
       console.log(error);
        return 'failed';
    }
}

CalculateSum().then((status)=>console.log(status));