/*Heap Sort
Heap Sort is a comparison-based sorting technique based on Binary Heap data structure.
 It is similar to selection sort where we first find the maximum element and place it at the end. 
 We repeat the same process for the remaining elements.  */

/*. How It Works
=> Build a Max Heap: The first step is to build a max heap from the input data.

=> Swap and Heapify: The largest element (root of the max heap) is swapped with the last element of the heap. Then, the heap size is reduced by one, and the heap is heapified again to restore the heap property.

=> Repeat: Repeat the process until all elements are sorted. */

//   function heapSort(arr) {
//     let n = arr.length;

//     // Build max heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     // Extract elements from heap one by one
//     for (let i = n - 1; i > 0; i--) {
//         // Move current root to end
//         [arr[0], arr[i]] = [arr[i], arr[0]];

//         // Call max heapify on the reduced heap
//         heapify(arr, i, 0);
//     }

//     return arr;
// }

// function heapify(arr, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }

//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }

//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//     }
// }

// // Example usage:
// let arr = [110, 10.01, 2, 2.22, 21, 78, 31, 1, 0];
// console.log(heapSort(arr)); // [0, 1, 2, 2.22, 10.01, 21, 31, 78, 110]





function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {

        [arr[0], arr[i]] = [arr[i], arr[0]];

        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr,n ,i) {
    let largest = i;
    let left =  2 * i + 1;
    let right =  2 * i + 2;

    if (left < n && arr[left] > arr[largest] ) {
        largest = left;
    }
       
     if (right < n && arr[right] > arr[largest]) {
        largest = right;
     }

     if ( largest !== i) {

        [arr[i],arr[largest]] = [arr[largest],arr[i]];
         heapify(arr, i , largest);
     }

}

let arr = [0.0001,1.00001,6.121215, 1.00010,-0.000001,0,5];
 console.log("Using the Heap sort techniquse " , heapSort(arr));


