import ArrowDown from "../assets/svg/ArrowDown";
import Login from "../assets/svg/Login";

export function NavBar() {
  return (
    <ul className="flex justify-end gap-[25px] pt-[45px] pr-[100px] pb-[30px]">
      <li className="flex items-center gap-[10px]">
        <span className="text-[#127682] font-semibold">ABOUT</span>
        <ArrowDown />
      </li>
      <li className="flex items-center gap-[10px]">
        <span className="text-[#127682] font-semibold">MEMBERSHIP</span>
        <ArrowDown />
      </li>
      <li className="flex items-center gap-[10px]">
        <span className="text-[#127682] font-semibold">NEWS & EVENTS</span>
        <ArrowDown />
      </li>
      <li className="flex items-center gap-[10px]">
        <span className="text-[#127682] font-semibold">CONTACT US</span>
        <ArrowDown />
      </li>
      <li className="flex items-center gap-[10px]">
        <span className="block h-[30px] border-x-[1px] border-[#868686]"></span>
      </li>
      <li className="flex items-center gap-[10px]">
        <span className="text-[#127682] font-semibold">USER NAME</span>
        <ArrowDown />
        <Login />
      </li>
    </ul>
  );
}
