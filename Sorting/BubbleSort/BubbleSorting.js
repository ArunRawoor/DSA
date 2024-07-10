/* Objective:
 To sort an array of numbers in ascending order. */

/* 
Key Idea:
Repeatedly compare adjacent elements and swap them if they are in the wrong order.
This process continues until the array is sorted.
*/

/* Okay Lets start the Bubble Sort tecnique */


function bubbleSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {

            if (arr[j] < arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [100, 21, 111, 1.001, 0.00001, 15, 1.55];

console.log("these elements are sorted by asc or dsc order using  the bubble sort tecnique :-", bubbleSort(arr));