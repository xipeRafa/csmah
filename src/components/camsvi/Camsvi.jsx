import "./camsvi.css";

import CAMSVI from "../../imgs/camsvi.png";

import CAMSVI2 from "../../imgs/2.png";

export default function Camsvi() {
    return (
        <div>
            <div className="imgContainer">
                <img src={CAMSVI} />
            </div>

            <div className="imgContainer2">
                <img className="logo1" src={CAMSVI2} />
            </div>
        </div>
    );
}
