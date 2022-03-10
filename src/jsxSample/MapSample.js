import React  from "react";
function IfElseSample() {
    //backendini burada yazıyoruz.
    let Groups=["Gizem","Cengiz","Serap"];
    return (
       <div>
           <ul>
               {
                   Groups.map((item,key)=>{
                      return  (<li key={key}>{item}</li>)
                   })
               }
           </ul>
       </div>
    );
  }
  export default MapSample