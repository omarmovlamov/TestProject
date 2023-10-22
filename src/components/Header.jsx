import {
  AiOutlineSearch,
  AiFillQuestionCircle,
  AiOutlineDownload,
  AiOutlineUpload,
} from "react-icons/ai";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-main">
      <div>
        <h1>EnesBank Digital Foorprint</h1>
      </div>
      <div className="header-r-side">
        <input type="text" placeholder="Search Assets" />
        <div className="flex-option">
          <AiOutlineSearch size={23} color="white" />
        </div>
        <div className="flex-option">
          <AiFillQuestionCircle size={23} color="white" />
        </div>
        <div className="flex-option">
          <AiOutlineDownload size={23} color="white" />
        </div>
        <div className="flex-option">
          <AiOutlineUpload size={23} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Header;
