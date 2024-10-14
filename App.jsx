import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDeatils";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId ,setFoodId]=useState("649195");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          {" "}
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
        <FoodDetails foodId={foodId} />
      </InnerContainer>
      </Container>
      
    </div>
  );
}

export default App;
