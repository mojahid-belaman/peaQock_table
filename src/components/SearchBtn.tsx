import React from "react";
import SearchSvg from "../assets/svg/SearchSvg";

type SearchBtnProps = {
  children: React.ReactNode;
};

function SearchBtn(props: SearchBtnProps) {
  const { children } = props;
  return (
    <button className="flex items-center gap-[20px] bg-gradient-to-r from-[#20C7AB] to-[#127682] rounded-[60px] px-[40px] py-[10px]">
      <SearchSvg />
      <span className="text-white text-[20px] leading-[20px]">{children}</span>
    </button>
  );
}

export default SearchBtn;
