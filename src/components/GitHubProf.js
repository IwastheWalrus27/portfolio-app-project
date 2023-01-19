import React, {useState, useEffect} from "react";
import {GrLocation} from 'react-icons/gr';
import Slider from 'react-slick';

export default function GitHubProf(){
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    useEffect(
        ()=>{
            fetchUser(setUser);
        }

        ,[]
    );
    
    useEffect(
        ()=>{
            if(!user.login) return;
            fetchRepos(user.login, setRepos);
        }, [user.login]     
    );


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };
    return (
        <>
            <img alt="Profile Pic" src={user.avatar_url} style={{height: "10rem", width: "10rem"}} className="rounded-circle border border-dark"></img>
            <h1>
                {user.name}     
            </h1>        
            <h4 className="text-muted font-weight-normal" style={{fontWeight:"normal"}}>
                {user.login}
            </h4>
            <div className="row justify-content-center">
                <div className="col-md-auto">
                    <GrLocation></GrLocation>
                </div>
                <div className="col-md-auto">
                    <h4 className="text-muted">
                        {user.location}
                    </h4>
                </div>
            </div>
         <> 
            {
                repos.length === 0? <h1>Nothing</h1>  : <div>
                    
                        <Slider {...settings}>
                            {

                                repos.map(
                                    (proj, i)=>{
                                        return (
                                            <ProjectCard {...proj} key={i}></ProjectCard>
                                        );
                                    }
                        )
                            }
                        </Slider>
                </div>
            }
        </>        
        </>
    );
}



async function fetchUser(setUser = (f)=> f, user="IWasTheWalrus27"){
    await fetch(`http://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(data => {
        setUser(data);
    });
}


async function fetchRepos(user = "", setRepos = (f) => f){
    if(!user) return console.log("Failed");

    await fetch(`https://api.github.com/users/${user}/repos`)
    .then((res)=>res.json())
    .then(data=>{ 
        setRepos(data);    
    });
}

function ProjectCard(props){
    return (
            <div key={props.id} className="card cardProj" style={{width:"13rem"}}>
                <div className="card-body">
                    <div className="card-title">
                    <b>
                        <a href={props.html_url} target="_blank" rel="noopener noreferrer" className="link-dark" style={{textDecoration: "none"}}>
                            {props.name}
                        </a>
                    </b>
                    </div>
                    <div className="card-text">
                        {props.language}

                    </div>
                </div>
            </div>
    );
}