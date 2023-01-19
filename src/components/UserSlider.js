import React, { useState, useEffect } from "react";
import faker from "faker";
import Slider from "react-slick";

//function RandomUserGen() {
    //const [userData, setUserData] = useState("");

    //useEffect(
        //() => {
            //fetch('https://randomuser.me/api')
                //.then(res => res.json())
                //.then(setUserData)

        //},
        //[]
    //);

    //if (userData) {

        //return (
            //<pre>
                //{JSON.stringify(userData, null, 2)}
            //</pre>
        //);
    //}
    //return null;

//}

//function UserList() {
    //const fakerUsersList = [...Array(50)].map(
        //() =>
        //(
            //{
                //name: faker.name.findName(),
                //email: faker.internet.email(),
                //pic: faker.image.animals(100, 100, true)
            //}
        //)

    //)
    //const settings = {
        //dots: true,
        //infinite: true,
        //speed: 500,
        //slidesToShow: 7,
        //slidesToScroll: 3
      //};
    //return (
        //<div className="row">
            //<Slider {...settings}>
                //{
                    //fakerUsersList.map(
                        //(user, i) => {
                            //return (
                                //<UserCard {...user} key={i}></UserCard>
                            //);
                        //}
                    //)
                //}
            //</Slider>

        //</div>
    //);

//}



const UserCard = ({ name = "", email = "", pic = "" }) => {
    return (
        <div className="card" style={{ width: "17rem" }}>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{email}</p>
                <img src={pic}></img>
            </div>
        </div>
    );
}

//async function requestUser() {
    //try {
        //const res = await fetch('https://randomuser.me/api');

        //const userData = await res.json();
    //} catch (err) {
        //console.log(err);
    //}

//}

export default function UserJSON() {
    return <UserList></UserList>
}