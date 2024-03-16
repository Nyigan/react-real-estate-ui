import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

function HomePage () {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className="title">
            Find Real Estate & Your Dream Place
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <SearchBar />

            <div className="boxes">
                <div className="box">
                    <h1>15+</h1>
                    <h2>Years of Expertise</h2>
                </div>
                      <div className="box">
                          <h1>200</h1>
                          <h2>Excellence Awards</h2>
                      </div>
                      <div className="box">
                          <h1>1500+</h1>
                          <h2>Ready Property</h2>
                      </div>
            </div>
        </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="bg image" />
        </div>
    </div>
  )
}

export default HomePage