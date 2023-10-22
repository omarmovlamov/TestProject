import { useState } from "react";
import "../styles/cTable.css";
import { BsFillSearchHeartFill } from "react-icons/bs";

function CTable() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [domain, setDomain] = useState("block");
  const [relatedDomain, setRelatedDomain] = useState("none");
  const [option3, setOption3] = useState("none");
  const [option4, setOption4] = useState("none");
  const [option5, setOption5] = useState("none");
  const [option6, setOption6] = useState("none");

  const changeItem = (item) => {
    setSelectedItem(item);
  };

  const changeDomain = () => {
    setDomain("block");
    setRelatedDomain("none");
    setOption3("none");
    setOption4("none");
    setOption5("none");
    setOption6("none");
    changeItem("domain");
  };

  const changeRelatedDomain = () => {
    setDomain("none");
    setRelatedDomain("block");
    setOption3("none");
    setOption4("none");
    setOption5("none");
    setOption6("none");
    changeItem("relatedDomain");
  };

  const changeOption3 = () => {
    setDomain("none");
    setRelatedDomain("none");
    setOption3("block");
    setOption4("none");
    setOption5("none");
    setOption6("none");
    changeItem("option3");
  };

  const changeOption4 = () => {
    setDomain("none");
    setRelatedDomain("none");
    setOption3("none");
    setOption4("block");
    setOption5("none");
    setOption6("none");
    changeItem("option4");
  };

  const changeOption5 = () => {
    setDomain("none");
    setRelatedDomain("none");
    setOption3("none");
    setOption4("none");
    setOption5("block");
    setOption6("none");
    changeItem("option5");
  };

  const changeOption6 = () => {
    setDomain("none");
    setRelatedDomain("none");
    setOption3("none");
    setOption4("none");
    setOption5("none");
    setOption6("block");
    changeItem("option6");
  };

  return (
    <div className="ctable">
      <div className="ctable-title">
        <h5>Domain Infrastructure</h5>
      </div>
      <div className="table-list">
        <ul>
          <li
            onClick={() => {
              changeDomain();
              changeItem("domain");
            }}
            className={selectedItem === "domain" ? "selected" : ""}
          >
            Domain
          </li>
          <li
            onClick={() => {
              changeRelatedDomain();
              changeItem("relatedDomain");
            }}
            className={selectedItem === "relatedDomain" ? "selected" : ""}
          >
            Related Domain
          </li>
          <li
            onClick={() => {
              changeOption3();
              changeItem("option3");
            }}
            className={selectedItem === "option3" ? "selected" : ""}
          >
            O Parked domains
          </li>
          <li
            onClick={() => {
              changeOption4();
              changeItem("option4");
            }}
            className={selectedItem === "option4" ? "selected" : ""}
          >
            Active Subdomains
          </li>
          <li
            onClick={() => {
              changeOption5();
              changeItem("option5");
            }}
            className={selectedItem === "option5" ? "selected" : ""}
          >
            Dormant Subdomains
          </li>
          <li
            onClick={() => {
              changeOption6();
              changeItem("option6");
            }}
            className={selectedItem === "option6" ? "selected" : ""}
          >
            Whois Records
          </li>
        </ul>
      </div>
      <div className="table-main-container">
        <div className="search-place">
          <div>
            <BsFillSearchHeartFill size={20} />
          </div>
          <input type="text" />
        </div>
        <div style={{ display: domain }}>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th>ID</th>
                  <th>Domain</th>
                  <th>Type</th>
                  <th>IP Address</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1</td>
                  <td>example.com</td>
                  <td>A</td>
                  <td>192.168.0.1</td>
                  <td>2023-10-21</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>2</td>
                  <td>sample.org</td>
                  <td>CNAME</td>
                  <td>10.0.0.1</td>
                  <td>2023-10-20</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>3</td>
                  <td>test.net</td>
                  <td>MX</td>
                  <td>172.16.0.1</td>
                  <td>2023-10-19</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ display: relatedDomain }}>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Domain Name</th>
                  <th>Relation Type</th>
                  <th>IP Address</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>related1.com</td>
                  <td>Subdomain</td>
                  <td>192.168.1.1</td>
                  <td>2023-10-20</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>related2.org</td>
                  <td>Alias</td>
                  <td>10.0.0.1</td>
                  <td>2023-10-19</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>related3.net</td>
                  <td>Subdomain</td>
                  <td>172.16.0.1</td>
                  <td>2023-10-18</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>related4.com</td>
                  <td>Alias</td>
                  <td>198.51.100.1</td>
                  <td>2023-10-17</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>related5.example.com</td>
                  <td>Subdomain</td>
                  <td>203.0.113.1</td>
                  <td>2023-10-16</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ display: option3 }}>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Domain Name</th>
                  <th>Registration Date</th>
                  <th>Expiration Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>parked1.com</td>
                  <td>2023-01-15</td>
                  <td>2024-01-15</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>parked2.org</td>
                  <td>2023-02-10</td>
                  <td>2024-02-10</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>parked3.net</td>
                  <td>2023-03-05</td>
                  <td>2024-03-05</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>parked4.com</td>
                  <td>2023-04-20</td>
                  <td>2024-04-20</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>parked5.example.com</td>
                  <td>2023-05-12</td>
                  <td>2024-05-12</td>
                  <td>Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ display: option4 }}>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Subdomain Name</th>
                  <th>Parent Domain</th>
                  <th>IP Address</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>subdomain1.example.com</td>
                  <td>example.com</td>
                  <td>192.168.1.1</td>
                  <td>2023-10-20</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>subdomain2.sample.org</td>
                  <td>sample.org</td>
                  <td>10.0.0.1</td>
                  <td>2023-10-19</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>subdomain3.test.net</td>
                  <td>test.net</td>
                  <td>172.16.0.1</td>
                  <td>2023-10-18</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>subdomain4.demo.org</td>
                  <td>demo.org</td>
                  <td>198.51.100.1</td>
                  <td>2023-10-17</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>subdomain5.test.example.com</td>
                  <td>example.com</td>
                  <td>203.0.113.1</td>
                  <td>2023-10-16</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ display: option5 }}>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Subdomain Name</th>
                  <th>Parent Domain</th>
                  <th>IP Address</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>dormant1.example.com</td>
                  <td>example.com</td>
                  <td>192.168.1.1</td>
                  <td>2023-10-20</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>dormant2.sample.org</td>
                  <td>sample.org</td>
                  <td>10.0.0.1</td>
                  <td>2023-10-19</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>dormant3.test.net</td>
                  <td>test.net</td>
                  <td>172.16.0.1</td>
                  <td>2023-10-18</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>dormant4.demo.org</td>
                  <td>demo.org</td>
                  <td>198.51.100.1</td>
                  <td>2023-10-17</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>dormant5.test.example.com</td>
                  <td>example.com</td>
                  <td>203.0.113.1</td>
                  <td>2023-10-16</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ display: option6 }}>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Domain Name</th>
                  <th>Registrar</th>
                  <th>Creation Date</th>
                  <th>Expiration Date</th>
                  <th>Registrant Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>example.com</td>
                  <td>GoDaddy</td>
                  <td>2022-01-15</td>
                  <td>2023-01-15</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>sample.org</td>
                  <td>Namecheap</td>
                  <td>2021-02-10</td>
                  <td>2023-02-10</td>
                  <td>Jane Smith</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>test.net</td>
                  <td>Bluehost</td>
                  <td>2020-03-05</td>
                  <td>2023-03-05</td>
                  <td>Robert Johnson</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>demo.org</td>
                  <td>HostGator</td>
                  <td>2019-04-20</td>
                  <td>2023-04-20</td>
                  <td>Mary Davis</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>example.net</td>
                  <td>NameSilo</td>
                  <td>2018-05-12</td>
                  <td>2023-05-12</td>
                  <td>Michael Brown</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTable;
