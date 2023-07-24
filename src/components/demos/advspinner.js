import { useState } from "react";

export default function AdvSpinner() {

    const advList = [
        { "Title": "Aaaa aaaa", "Price": 5000, "Image": "/images/advs/p1.jpg" },
        { "Title": "Bbbb bbbb", "Price": 3000, "Image": "/images/advs/p2.jpg" },
        { "Title": "Cccc ccc", "Price": 9000, "Image": "/images/advs/p3.jpg" }
    ]

    let [currentIndex, UpdateIndex] = useState(0);

    function handlePrev() {
        if (--currentIndex < 0) {
            UpdateIndex(advList.length - 1);
        }
        else {
            UpdateIndex(currentIndex);
        }
    }

    function handleNext() {
        if (++currentIndex >= advList.length) {
            UpdateIndex(0);
        }
        else {
            UpdateIndex(currentIndex);
        }
    }


    const adv = advList[currentIndex];
    return (
        <div className="col-3 my-3" >
            <div className="card text-start">
                <img className="card-img-top" src={adv.Image} alt={adv.Title} />
                <div className="card-body">
                    <h4 className="card-title">{adv.Title}</h4>
                    <p className="card-text">Rs.{adv.Price}/-</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={handlePrev} >Prev</button>
                        <button className="btn btn-primary" onClick={handleNext} >Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}