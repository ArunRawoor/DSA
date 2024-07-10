/*Selection Sort
Selection Sort is another simple sorting algorithm that divides the input list into two parts: 
the sublist of items already sorted, which is built up from left to right at the front (left) of the list,
| and the sublist of items remaining to be sorted that occupy the rest of the list.
 It works by repeatedly selecting the smallest (or largest, depending on the order) element from the unsorted sublist and swapping it with the leftmost unsorted element, 
 moving the sublist boundary one element to the right.*/

/* => How Selection Sort Works

1. Find the Minimum Element: Start with the first element,
   and scan the entire array to find the smallest element.

2. Swap: Swap the smallest element found with the first element.

3. Repeat: Move to the next position and repeat the process for the remaining part of the array. */


//  function selectionSort(arr) {
//     let n = arr.length;
    
//     for (let i = 0; i < n - 1; i++) {
//         // Find the minimum element in the remaining unsorted array
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
        
//         // Swap the found minimum element with the first element
//         let temp = arr[minIndex];
//         arr[minIndex] = arr[i];
//         arr[i] = temp;
//     }
    
//     return arr;
// }

// let arr = [64, 25, 12, 22, 11];
// console.log("Sorted array:", selectionSort(arr));





function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        //to find oy the minimum element in the unsorted array

        let minIndex = i; 
        for ( let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;

            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    } 
    return arr;
}

let arr = [110, 0.00012, 1.0021, 0, 11.32, 11.00003];

console.log("sorting using the selection sort ", selectionSort(arr));