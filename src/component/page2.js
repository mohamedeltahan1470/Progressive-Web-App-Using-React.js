import React from 'react';
import { useContext } from "react";
import ThemeContexttt from "../context/DataContext";
import { Link } from 'react-router-dom';
import "../App.css";

const Page2 = () => {
    const {
        name,
        theme,
        age,
        count,
        changeName,
        changeAge,
        changeCount,
        changeTheme,
      } = useContext(ThemeContexttt);
    
  return (
    <div>
        <div className={`App   ${theme} `}>
            <h1>this is page 2</h1>
        <Link to={`/page3`}
          style={{
            backgroundColor: "teal",
            color: "whitesmoke",
            padding: "15px 20px",
            textDecoration: "none",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          go to page3
        </Link>
        <button
          style={{ marginBottom: "40px", marginTop: "40px" }}
          onClick={() => {
            changeTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Toogle Theme
        </button>
        <div>
          <button
            // onClick={() => {
            //   setColor("light");
            // }}
            onClick={() => {
              changeTheme("light");
            }}
          >
            Light
          </button>
          <button
            // onClick={() => {
            //   setColor("dark");
            // }}
            onClick={() => {
              changeTheme("dark");
            }}
          >
            Dark
          </button>
          <button
            // onClick={() => {
            //   setColor("pink");
            // }}
            onClick={() => {
              changeTheme("pink");
            }}
          >
            Pink
          </button>
          <button
            // onClick={() => {
            //   setColor("grey");
            // }}
            onClick={() => {
              changeTheme("grey");
            }}
          >
            Grey
          </button>
        </div>
        <div className="app-header">
          <h2>My Name is {name}</h2>
          <button
            onClick={() => {
              changeName("Mohammed ali abdullah abdelfattah");
            }}
          >
            Change Name
          </button>

          <h2>My Age is {age}</h2>
          <button
            onClick={() => {
              changeAge(age + 1);
            }}
          >
            Change Age
          </button>
          <br />
          <br />
          <br />
          <button
            onClick={() => {
              changeCount(count + 1);
            }}
          >
            counter is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page2