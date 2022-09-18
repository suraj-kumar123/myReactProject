import logo from './logo.svg';
import './App.css';
//added new branch
function App(props) {
  return (
    <header>
      <h1> Welcome to {props.name} Kitchen </h1>
    </header>
  );
}
// const menu = [
//   "Borritos",
//   "Tacos",
//   "Quesadilla",
//   "Empanadas"
// ]
export function Footer(props){
  return(
    <footer>
      <p> Copyright {props.year}</p>
    </footer>
  )

}

export function Main(props) {
  return (
    <section>
      <h2> Menu </h2>
      <ul>
        {props.menu.map((dish) => (
          <li key = {dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

export default App;
