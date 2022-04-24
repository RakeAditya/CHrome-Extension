// function draw(){
//   console.log("hello world");
// }
//  yaha p ek to onclick function html me use krke call krskte h aur doosrA addEventListener("event",function({uska kaam}))
// krke kr skte h

let varA=document.getElementById("input-btn");

// addeventlistener ka example
// let boxxing=document.getElementById("box");
// boxxing.addEventListener("click",function(){
//   console.log("Box opened")
// })

let myLeads=[];//empty array
let inputEl=document.getElementById("input-el");
//delete btn fetch fr working db click p
let deleEl= document.getElementById("delete-btn");
deleEl.addEventListener("dblclick",()=>{
  console.log("deleted item");
  // deleEl.style.padding=9px;
  localStorage.clear();  //localstr ko clear
  myLeads=[];     //myLeads array ko clear
  render(myLeads);      //renderList ko call krnege to dom bhi clear
});

//inputEl.value s element ki value pick krenge
//value=" "s wapas null string kr denge4

let ule=document.getElementById("ul-el");
console.log(ule);


//local storage m jo input kr rhe h element usko store krenge
// leadlocal var s display kre h JSON.parse s t=string ko wapas // array banae h
// localStorage.clear();
let leadLocalstr= JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadLocalstr);

//store the previous stored data
//agr leadlocal truthy h to renderlist ko call kr degaa
if(leadLocalstr){
  myLeads=leadLocalstr;
  render(myLeads);
}

// for(let i=0;i<myLeads.length;i++)
//   {
//    ule.innerHTML+= "<li>" + myLeads[i]+ "</li> "
//   }

// innerHtml property use krke btn add kia gaya h
// const bton=document.getElementById("cont");
// bton.innerHTML="<input type=\"button\" id=\"input-btn\" value=\"del button\" />"
// create
//set
// append


//renderlist ek function h
// jisme liItem ka empty variable h
// jo list element ko poora store krega myleads k sath
//  fr isko innerHtml m daal k use krenege
 function render(leads)
{
  let liItem="";
   for(let i=0;i <leads.length;i++)
   {
     liItem+= `
            <li>
            <a href="${leads[i]}">
              ${leads[i]}
              </a>
            </li>
            `
    }
  ule.innerHTML= liItem
 }


varA.addEventListener("click",function(){
  myLeads.push(inputEl.value)
  console.log(myLeads);
  //store myleads to local storage converting into string
  localStorage.setItem("myLeads",JSON.stringify(myLeads));

  render(myLeads);
  inputEl.value="";
  console.log(localStorage.getItem("myLeads"));
})


//example of local storage
// localStorage.setItem("myname","aditya");
// let name =localStorage.getItem("myname");
// console.log(name);
// localStorage.clear();
// console.log(name);

//save btn jo ki direct chrome link save krega
const webLink=[
  {url: "www.aditya.com"}
];
let saveLnk= document.getElementById("save-btn");
//onlick function add krenge usme
saveLnk.addEventListener("click",()=>{
  //chrome api fetch krne k lie'

  chrome.tabs.query({active: true, currentWindow: true},(tabs)=>{
    //active current tab ko show krega
    //currentwindow multiple windows m s current ko
    //console.log(tabs) jo h fetched wale chrome url ko
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
  });



  //
  // // console.log(webLink[0].url);
  // myLeads.push(webLink[0].url);
  // //myleads m push kie elemnt ko
  // localStorage.setItem("myLeads",JSON.stringify(myLeads));
  // //local storage m save kie
  // render(myLeads);
  // //list ko render kra die screen p
})
