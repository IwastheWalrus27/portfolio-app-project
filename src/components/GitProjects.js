//import React, {useState, useEffect}from "react";

//export default function GitProjects(login=""){
    //const [repos, setRepos] = useState([]);
    
    //useEffect(
        //()=>{
            //fetchRepos(login, setRepos);
        //}, [login]     
    //);
    //const settings = {
        //dots: false,
        //infinite: true,
        //speed: 500,
        //slidesToShow: 5,
        //slidesToScroll: 3
    //};
    //return (

    //);
//}

//async function fetchRepos(user = "", setRepos = (f) => f){
    //if(!user) return console.log("Failed");

    //console.log("Repos Guy")
    //await fetch(`https://api.github.com/users/${user}/repos`)
    //.then((res)=>res.json())
    //.then(data=>{ 
        //console.log(data);
        //setRepos(data);    
    //});
//}



//function ProjectCard(props){
    //return (
            //<div key={props.id} className="card cardProj" style={{width:"13rem"}}>
                //<div className="card-body">
                    //<div className="card-title">
                    //<b>
                        //<a href={props.html_url} target="_blank" className="link-dark" style={{textDecoration: "none"}}>
                            //{props.name}
                        //</a>
                    //</b>
                    //</div>
                    //<div className="card-text">
                        //{props.language}

                    //</div>
                //</div>
            //</div>
    //);
//}