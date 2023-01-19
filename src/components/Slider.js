import React, { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { useRef} from "react";
import Slider from 'react-slick';
import { IdeaContext } from "../index";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
};

export default function SliderOrganizer({ data = [], foo = (f) => f }) {
    return (

        <div className="row justify-content-center">

            <div style={{ padding: "1rem" }}>

                <Slider {...settings}>

                    {data.map((item, index) => {
                        return (
                            //<div key={index} className={index % 2 == 0 ? "card" : "card odd"} style={{ width: "17rem" }}>

                            <div key={index} className="card" style={{ width: "17rem" }}>
                                <FormsCard {...item} done={isComplete(item)} index={index} onNewCard={foo} dataArr={data} />
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <div className="card cardButton align-items-center" style={{ width: "12rem", height:"12rem", margin:"2rem" }}>
                <div className="card-body">
                    <button onClick={() => {
                        foo(addCard(data));
                    }} className="invisibleButton">

                        <GrAdd style={{ height: "10rem" }} />
                    </button>
                </div>
            </div>
        </div>
    );
}


const addCard = (dataArr) => {
    const newDataArr = [...dataArr, { "title": "", "nature": "", "effort": "" }];
    return newDataArr;

}

const Card = ({ title = "", nature = "", effort = "" }) => {
    return (
        <>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{nature}</p>
                <p>{effort}</p>
            </div>

        </>
    );
}


const FormsCard = ({ title = "", nature = "", effort = "", done = false, index, onNewCard = (f) => f, dataArr = [] }) => {
    const txtTitle = useRef();
    const txtNature = useRef();
    const txtEffort = useRef();


    const submit = (e) => {
        e.preventDefault();
        title = txtTitle.current.value;
        nature = txtNature.current.value;
        effort = txtEffort.current.value;

        const newData = updateData(dataArr, index, title, nature, effort)
        onNewCard(newData);

    }
    return (
        done ? <Card title={title} nature={nature} effort={effort} /> :
            <>
                <div className="card-body">
                    <form onSubmit={submit}>
                        <p className="formsInput">Title</p>
                        <input ref={txtTitle} type={"text"} placeholder="Enter the title..."></input>

                        <p className="formsInput">Nature</p>
                        <input ref={txtNature} type={"text"} placeholder="Enter the nature..."></input>

                        <p className="formsInput">Effort</p>
                        <input ref={txtEffort} type={"text"} placeholder="Enter the effort..."></input>
                        <button>Add Card</button>
                    </form>
                </div>

            </>
    );
}


const isComplete = ({ title = "", nature = "", effort = "" }) => {
    if (title.length > 0 && nature.length > 0 && effort.length > 0) {
        return true;
    }
    return false;
}

const updateData = (dataArr, index, title, nature, effort) => {

    const newDataArr = [...dataArr];

    newDataArr[index].title = title;
    newDataArr[index].nature = nature;
    newDataArr[index].effort = effort;

    return newDataArr;
}


const DisplayIdeas = () => {
    const { ideas } = useContext(IdeaContext);
    return (
        <>
            <h1>Using Context</h1>
            {
                ideas.map(
                    (idea, i) =>
                    (
                        <>
                            <h3 key={i}>
                                {idea.title}
                            </h3>
                            <h4>
                                {idea.nature}
                            </h4>
                        </>
                    )

                )
            }
        </>
    );
}