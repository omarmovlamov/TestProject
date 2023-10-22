import { LiaLinkSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import "../styles/contentT.css";
import { useState } from "react";
import CTable from "./CTable";
import OpTable from "./OpTable";
function ContentT() {
  const [domain, setDomain] = useState("network");
  return (
    <>
      <div className="Content-head">
        <div className="c-card color1 hover-div">
          <LiaLinkSolid size={25} color="white" />
          <div>
            <h4>60</h4>
            <p>Domain Infranstructure</p>
          </div>
          <IoIosArrowDown className="cursor-pointer" size={25} color="white" />

          <ul className="hidden-list">
            <li
              onClick={() => {
                setDomain("network");
              }}
            >
              <BsCodeSlash /> Network Apps
            </li>
            <li
              onClick={() => {
                setDomain("operating");
              }}
            >
              <BsCodeSlash />
              Operating System
            </li>
            <li
              onClick={() => {
                setDomain("cloud");
              }}
            >
              <BsCodeSlash />
              Cloud Services
            </li>
            <li>
              <BsCodeSlash />
              Network Services
            </li>
          </ul>
        </div>

        <div className="c-card color2 hover-div">
          <LiaLinkSolid size={25} color="white" />
          <div>
            <h4>56</h4>
            <p>Website & SSL Certificates</p>
          </div>
          <IoIosArrowDown className="cursor-pointer" size={25} color="white" />

          <ul className="hidden-list">
            <li>
              <BsCodeSlash /> Network Apps
            </li>
            <li>
              <BsCodeSlash />
              Operating System
            </li>
            <li>
              <BsCodeSlash />
              Cloud Services
            </li>
            <li>
              <BsCodeSlash />
              Network Services
            </li>
          </ul>
        </div>
        <div className="c-card color3 hover-div">
          <LiaLinkSolid size={25} color="white" />
          <div>
            <h4>175</h4>
            <p>Ip Adres & DNS Records</p>
          </div>
          <IoIosArrowDown className="cursor-pointer" size={25} color="white" />

          <ul className="hidden-list">
            <li>
              <BsCodeSlash /> Network Apps
            </li>
            <li>
              <BsCodeSlash />
              Operating System
            </li>
            <li>
              <BsCodeSlash />
              Cloud Services
            </li>
            <li>
              <BsCodeSlash />
              Network Services
            </li>
          </ul>
        </div>
        <div className="c-card color4 hover-div">
          <LiaLinkSolid size={25} color="white" />
          <div>
            <h4>56</h4>
            <p>Employee & Social Accounts</p>
          </div>
          <IoIosArrowDown className="cursor-pointer" size={25} color="white" />

          <ul className="hidden-list">
            <li>
              <BsCodeSlash /> Network Apps
            </li>
            <li>
              <BsCodeSlash />
              Operating System
            </li>
            <li>
              <BsCodeSlash />
              Cloud Services
            </li>
            <li>
              <BsCodeSlash />
              Network Services
            </li>
          </ul>
        </div>
        <div className="c-card color5 hover-div">
          <LiaLinkSolid size={25} color="white" />
          <div>
            <h4>275</h4>
            <p>Services and Cloud Technologies</p>
          </div>
          <IoIosArrowDown className="cursor-pointer" size={25} color="white" />

          <ul className="hidden-list">
            <li>
              <BsCodeSlash color="black" /> Network Apps
            </li>
            <li>
              <BsCodeSlash />
              Operating System
            </li>
            <li>
              <BsCodeSlash />
              Cloud Services
            </li>
            <li>
              <BsCodeSlash />
              Network Services
            </li>
          </ul>
        </div>
        <div className="c-card color6 hover-div">
          <LiaLinkSolid size={25} color="white" />
          <div>
            <h4>260</h4>
            <p>Brand keyword</p>
          </div>
          <IoIosArrowDown className="cursor-pointer" size={25} color="white" />

          <ul className="hidden-list">
            <li>
              <BsCodeSlash /> Network Apps
            </li>
            <li>
              <BsCodeSlash />
              Operating System
            </li>
            <li>
              <BsCodeSlash />
              Cloud Services
            </li>
            <li>
              <BsCodeSlash />
              Network Services
            </li>
          </ul>
        </div>
      </div>
      {/* Network */}
      <div>{domain === "network" ? <CTable /> : ""}</div>
      <div>{domain === "operating" ? <OpTable /> : ""}</div>
    </>
  );
}

export default ContentT;
