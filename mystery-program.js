/* 

Mystery program
Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the runtime of this algorithm?

function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

*/

// Removes all duplicates from the list.
// O(n^2)
