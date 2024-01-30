import Card from "./components/Card";

function App() {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-2">
      <Card name={"Shruti"} role={"Full Stack Web Developer"} />
      <Card name={"Shivani"} role={"React.js Developer"} />
      <Card name={"Samruddhi"} role={"Backend Node.js Web Developer"} />
      <Card name={"Shreya"} role={"Full Stack Java Developer"} />
    </div>
  );
}

export default App;
