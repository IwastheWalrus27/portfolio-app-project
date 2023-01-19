import React, { useState, useEffect } from 'react';
//import { TfiYoutube } from 'react-icons/tfi';
import Slider from 'react-slick';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
};

export default function YoutubeVids({channelId = "", apiKey = ""}) {
    const [ytData, setYt] = useState({});
    const [load, setLoad] = useState(false);
    useEffect(
        () => {
            fetchYT(apiKey, channelId, setYt);

        }, []
    );


    useEffect(
        () => {
            if (Object.keys(ytData).length === 0) return;
            setLoad(true);

        }, [ytData.items]
    );
    return (
        <>
            {/* {ytData.items.map(
                (video, i)=>{
                    return (
                        <p key={i}>
                            {video.snippet.title}
                        </p>
                    );
                }
            )} */

                Object.keys(ytData).length === 0 || !load ? <Loading></Loading> :
                    <Slider {...settings}>

                        {
                            ytData.items.map(
                                (vid, i) => {
                                    return (
                                        <div key={i} className="card cardProj" style={{ width: "25rem" }}>

                                                <a href={vidURL(vid.id.videoId, vid.channelTitle)} target="_blank" rel='noopener noreferrer'>
                                                    <img alt={"Video"} className='card-img-top' src={vid.snippet.thumbnails.medium.url}></img>
                                                </a>

                                            <div className='card-body'>
                                                <h5 className='card-title'>
                                                    {decodeEntities(vid.snippet.title)}
                                                </h5>
                                                <p>
                                                    {decodeEntities(vid.snippet.description)}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                            )

                        }
                    </Slider>
            }
        </>
    );
}


function fetchYT(key = "", channelId = "", setData = (f) => f) {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`)
        .then(res => res.json())
        .then(data => {
            setData(data);

        });
}

var decodeEntities = (function () {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');

    function decodeHTMLEntities(str) {
        if (str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }

        return str;
    }

    return decodeHTMLEntities;
})();


function vidURL(vidId = "", channel = "") {

    const url = `https://www.youtube.com/watch?v=${vidId}&ab_channel=${channel.replace(/\s+/g, '')}`;
    return url;
}


function Loading() {
    return (
        <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
    );
}


/**
 * 
 * 
            <a href='https://www.youtube.com/@saulcolin8818/videos' target="_blank">
                <TfiYoutube></TfiYoutube>
            </a>
 */