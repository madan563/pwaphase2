 function addData(){

var career=document.querySelector("#career").value;
 var name=document.querySelector("#name").value;
 var email=document.querySelector("#email").value;
 var rollno=document.querySelector("#rollno").value;
 var mobile=document.querySelector("#mobile").value;
//

// //graduation Details
 var college1=document.querySelector("#college1").value;
 var degree=document.querySelector("#degree").value;
 var branch1=document.querySelector("#branch1").value;
 var marks1=document.querySelector("#marks1").value;
//
// //intermediate Details
 var college2=document.querySelector("#college2").value;
//  var branch3=document.querySelector("#branch3").value;
 var degree2=document.querySelector("#degree2").value;
 var marks2=document.querySelector("#marks2").value;
//
// //ssc Details
 var college3=document.querySelector("#college3").value;
 var board=document.querySelector("#board").value;
//  var branch3=document.querySelector("#branch3").value;
 var marks3=document.querySelector("#marks3").value;

var request;






 var idb= window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;

var open=idb.open("StoreData",1);
console.log("IndexedDB is created");

 open.onupgradeneeded=function(event){
  var request=event.target.result;
 request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(error){
  console.log("Object store is not created",+error);
}
open.onsuccess=function(event){
  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var storeDB=transaction.objectStore("Formdata");
  storeDB.put({
    career:career,
    name:name,
    email:email,
    rollno:rollno,
    mobile:mobile,
    education:[{
      college:college1,
      degree:degree,
      branch:branch1,
      marks:marks1

    },
  {
    college:college2,
    degree:degree2,
    branch:"",
    marks:marks2
  },
  {
    college:college3,
    degree:"",
    branch:board,
    marks:marks3

  }]

});
window.open("index.html");
}
}
