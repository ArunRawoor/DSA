/*Quick Sort
Quick Sort is an efficient, in-place, divide-and-conquer sorting algorithm. It works by selecting a 
'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
 The sub-arrays are then sorted recursively. */



 /* How It Works
 > Choose a Pivot: Select a pivot element from the array. The choice of pivot can affect the efficiency of the algorithm, with common choices being the first element,
 the last element, the middle element, or a random element.
 > Partitioning: Rearrange the elements in the array so that all elements less than the pivot come before it and all elements greater than the pivot come after it.
> Recursively Apply: Apply the above steps recursively to the sub-arrays of elements with smaller values and those with greater values. */


function quickSort(arr , low = 0, high = arr.length - 1 ){
        if (low < high) {
            let pi = partition(arr,low,high)
            quickSort(arr,low , pi - 1 );
            quickSort(arr, pi + 1, high)
        }

        return arr;

}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high ; j++) {

        if ( arr[j] < pivot) {    // here by default it is in the asc order we can make arr[j] > piviot  for the dsc order.
            i++;
            [arr[i] ,arr[j]] = [arr[j] , arr[i]]
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i +1;

}


let arr = [0.001,3.021,3.00001,0,0.00001,9];
console.log("Using the Quick Sort technique ",quickSort(arr));