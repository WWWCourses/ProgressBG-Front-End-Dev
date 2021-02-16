/* -------------------------------------------------------------------------- */
/*                                    task                                    */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от
// четните елементи на подаден й двумерен масив.

let arr = [
    [1,2,3],
    [4,5,6]
];

function SumEven2DimArrayElements(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i];
        for (let j = 0; j < row.length; j++) {
            const number = row[j];
            if(number%2===0){
                sum+=number;
            }
        }
    }

    return sum;
}
// Примерно извикване на функцията:
let sum = SumEven2DimArrayElements(arr);
console.log(sum);
// expected output: 12