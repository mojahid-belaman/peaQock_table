import Filter from "../assets/svg/Filter";
import SearchBtn from "./SearchBtn";

function Search() {
  return (
    <div className="w-1/2 flex items-center gap-[20px] mb-[45px] m-auto">
      <Filter />
      <input
        type="text"
        placeholder="Search by keyword"
        className="bg-[#E6EAF0] w-[100%] rounded-[10px] py-[12px] px-[30px]"
      />
      <SearchBtn>SEARCH</SearchBtn>
    </div>
  );
}

export default Search;
