
//var c=300
let a=300
if(true){
    let a=10
    const b=20
    //console.log("INNer:",a);
}
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username="hemant"
     
    function two(){
        const website="youtube"
       // console.log(username);

    }
  //  console.log(website);

  //two()
}
//one()

if(true){
    const username="hemant";
    if(username==="hemant"){
        const website="youtube";
       // console.log(username+website);
    }
    // console.log(website);
}
//console.log(username);

// +++++++++++++++++++++++++++ interesting +++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1
}

console.log(addTwo(5));
const addTwo=function(num){
    return num+2
}


