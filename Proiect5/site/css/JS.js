Array.prototype.bubbleSort = function() {    //The Array.prototype property represents the prototype for the Array constructor.
  var is_sorted = false;  //pleci de la premisa ca nu e sortat, cel putin odata tre sa parcurg ca sa aflu daca e sortat
  
  while (!is_sorted) {  //atata timp cat e true conditia, atata timp cat nu sunt sortate(not is sorted) eu execut codul, i>i+1 
     
    is_sorted = true;  //asta e conditia ca ciclul sa nu fie infinit 
    
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        var x = this[i+1];
        this[i+1] = this[i];
        this[i] = x;
        is_sorted = false;
      }
  
    } 
  }
  return this;
};

console.log([6,4,0, 3,-2,1].bubbleSort());


var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
function bubbleSort(a) {  
    var isSorted,
    i, temp;
    do {
        isSorted = true;
        for (i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                isSorted = false;
            }
        }
    } while (!isSorted); //nu s-a facut nici un swap
}
 
bubbleSort(a);
console.log(a);



  