
//@Name: Weldensie Embaye (109391)

Array.prototype.even = function () {
    return this.filter((x)=>x%2==0)
     
   }


   let array = [1,2,3,4,5,6,7,8];
   console.log(array.even());


   Array.prototype.odd = function () {
    return this.filter((x)=>x%2!==0)
     
   }


   console.log(array.odd());


   

