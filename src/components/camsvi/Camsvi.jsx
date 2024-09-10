import "./camsvi.css";

import CAMSVI1 from "../../imgs/camsvi1.png";
import CAMSVI2 from "../../imgs/camsvi2.png";
import CAMSVI3 from "../../imgs/camsvi3.png";

import CAMSVI from "../../imgs/2.png";

export default function Camsvi() {
    return (
        <div>
            <div className="imgContainerCamsvi">
                <img src={CAMSVI3} />
                <img src={CAMSVI1} />
                <img src={CAMSVI2} />
            </div>

            <div className="imgContainer2">
                <img className="logo1" src={CAMSVI} />
            </div>
        </div>
    );
}
