/* How It Works
The array is virtually split into a sorted and an unsorted part.
Values from the unsorted part are picked and placed in the correct position in the sorted part.  */




function  insertionSort(arr) {

    for ( let i = 1; i < arr.length; i++) {

        let key = arr[i];
         let j = i - 1;

        while (j >=0 && arr[j] > key) {
            arr[j+1] = arr[j]
            j = j - 1;
        }
        arr[j+1] = key;
    }
    return arr;
}

let arr = [0.001,0,11.20,0.01,1.0001,2,6,-0.0000001];

console.log("Sorting the array element using the insetion sort technique :-",insertionSort(arr));
