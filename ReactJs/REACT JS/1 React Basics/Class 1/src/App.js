import './App.css';
import CarName from './Car';
import Company from './Company';
import Card from './Card';
// function App() {
//   const newCar =  "RangeRover"
//   return (
//     <div className="App">
//      <h1>Hello world</h1>
//      <CarName name="Thar"></CarName>
//      <Company cmp = "Mahindra" country ="India" ></Company>

//      <CarName name="Fortuner"></CarName>
//      <Company cmp ="Toyota" country = "Japan"></Company>

//      <CarName name={newCar}></CarName>
//      <Company cmp ="Tata" country = "India"></Company>
//     </div>
//   );
// }

//when there are large no. of data------------
function App() {
  const response = [
    {
      name: "Thar",
      cmp: "Mahindra",
      country: "India"
    },
    {
      name: "Fortuner",
      cmp: "Toyota",
      country: "Japan",
    },
    {
      name: "Range Rover",
      cmp: "Land Rover",
      country: "India"
    }
  ]
  return (
    <div className="App">
      <h1>Hello world</h1>

     <Card>
     <CarName name={response[0].name}>
        This paragraph is printed by writting props.children in component.... 
        whatever we write inside custom element its not show on ui to show this we have to write props.children in component
        Now wrapp this inside card... in card component we have to write props.childer to show this things 
      </CarName>

      <Company cmp={response[0].cmp} country={response[0].country} ></Company>
      <CarName name={response[1].name}></CarName>

      <Company cmp={response[1].cmp} country={response[1].country} ></Company>
      <CarName name={response[2].name}></CarName>

      <Company cmp={response[2].cmp} country={response[2].country} ></Company>
     </Card>
    </div>
  )
}

export default App;
