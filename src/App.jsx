import "./App.css";
import Header from "./componenets/Header/Header";
import conf from './conf/conf'

function App() {
  console.log(conf.appwriteTest);
  return (
    <>
      <Header />
      <h1>Welcome to our mega blog...!!!!!!</h1>
    </>
  );
}

export default App;
