import React, {useState, useEffect} from 'react';



export default function Bored(){
    const [act, setAct]  = useState({
        activity : "",
        type : "",
        participants : "",
        price : 0,
        link: "",
        key : "",
        accessibility : 0
    });   
    useEffect(
        ()=>{
            fetchActivity(setAct);
            
            

        }, []
    )


    
    return (
        <div>

        <div className='card'>
            <div className='card-body'>
                <div className='card-title'>
                    <h3>
                        {act.activity}
                    </h3>
                </div>
                <div className='card-text'>
                    {act.type}
                </div>

            </div>
        </div>
        </div>
    );
}



async function fetchActivity(setData = (f)=>f){
    await fetch('https://www.boredapi.com/api/activity')
            .then(res => res.json())
            .then((data)=>{
                setData(data);
            });
            
}


// function translateText(text = ""){
//     const encodedParams = new URLSearchParams();
//     encodedParams.append("q", "Hello, world!");
//     encodedParams.append("target", "es");
//     encodedParams.append("source", "en");
    
//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'Accept-Encoding': 'application/gzip',
//             'X-RapidAPI-Key': 'a9d74689c5msh5657453e71394e8p160a51jsnf6bfcd009c1c',
//             'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//         },
//         body: encodedParams
//     };
    
//     fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
//         .then(response => response.json())
//         .then()
//         .catch(err => console.error(err));
// }


// async function translateObj(setFun = (f)=>f, obj={}){
//     var newObj = {...obj};
//     Object.keys(newObj).forEach((key)=>{

//         newObj[key] = translateText(newObj[key]);
//     }
    
//     );

//     setFun(newObj);

// }