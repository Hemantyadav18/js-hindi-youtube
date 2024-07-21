//Immediately Invoked function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name)=>{
    //unamed IIFE
   console.log(`db connected two ${name}`);
})('hemant')