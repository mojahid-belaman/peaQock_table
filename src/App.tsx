import BarNavigation from "./components/BarNavigation";
import { NavBar } from "./components/NavBar";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <div className="border-b-2 border-[#E3E3E3] mr-[100px] ml-[280px] mb-[55px]"></div>
      <Search />
      <Table />
      <BarNavigation />
    </div>
  );
}

export default App;
