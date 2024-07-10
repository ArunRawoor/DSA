/*Merge Sort
Merge Sort is an efficient, stable, comparison-based, divide-and-conquer sorting algorithm.
Most implementations produce a stable sort,
meaning that the order of equal elements is the same in the input and output.  */

/* How It Works :-
Divide: Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
Conquer: Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list. */





function merge(left , right) {

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;


    while ( leftIndex < left.length && rightIndex < right.length) {

        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }

        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    //concatination

    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));    
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }


   const middele =  Math.floor(arr.length / 2);

   const left = arr.slice(0 , middele);

   const right = arr.slice(middele)

   return merge(mergeSort(left) , mergeSort(right));
}



let arr = [110, 10.01, 2, 2.22, 21, 78, 31, 1, 0];
console.log("Arranging the elements using the Merge Sort Algo ",mergeSort(arr));