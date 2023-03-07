import AxelorNavbar from "./app/components/navbar/AxelorNavbar";
import CardList from "./app/container/CardList";
import CardData from "./CardData";

function App() {
  return (
    <>
      <AxelorNavbar />

      <div className="row">
        <div className="col-md-8 py-3">
          <CardList data={CardData} />
        </div>
        <div className="col-md-4 py-3">
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
}

export default App;
