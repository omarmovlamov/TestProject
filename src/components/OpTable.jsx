import { useState } from "react";
import "../styles/cTable.css";

function CTable() {
  const [selectedItem, setSelectedItem] = useState("windows");

  const changeItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="ctable">
      <div className="ctable-title">
        <h5>Operating Systems</h5>
      </div>
      <div className="table-list">
        <ul>
          <li
            onClick={() => {
              changeItem("windows");
            }}
            className={selectedItem === "windows" ? "selected" : ""}
          >
            Windows
          </li>
          <li
            onClick={() => {
              changeItem("mac");
            }}
            className={selectedItem === "mac" ? "selected" : ""}
          >
            macOS
          </li>
          <li
            onClick={() => {
              changeItem("linux");
            }}
            className={selectedItem === "linux" ? "selected" : ""}
          >
            Linux
          </li>
        </ul>
      </div>
      <div style={{ display: selectedItem === "windows" ? "block" : "none" }}>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Version</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Windows 10</td>
                <td>2015-07-29</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Windows 11</td>
                <td>2021-10-05</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: selectedItem === "mac" ? "block" : "none" }}>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Version</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>macOS Catalina</td>
                <td>2019-10-07</td>
              </tr>
              <tr>
                <td>2</td>
                <td>macOS Big Sur</td>
                <td>2020-11-12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: selectedItem === "linux" ? "block" : "none" }}>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Distribution</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ubuntu</td>
                <td>2004-04-23</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Fedora</td>
                <td>2003-11-06</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CTable;
