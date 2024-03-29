import Homme from "../assets/svg/Homme";
import Logo from "../assets/svg/Logo";
import Logout from "../assets/svg/Logout";
import Menu from "../assets/svg/Menu";
import Person from "../assets/svg/Person";
import Setting from "../assets/svg/Setting";

function BarNavigation() {
  return (
    <div
      style={{ height: "calc(100% - 200px)" }}
      className="absolute left-[40px] top-[40px] w-[120px] py-10  bg-[#127682] rounded-[40px] flex flex-col justify-between items-center"
    >
      <Logo />
      <div className="flex flex-col gap-[40px]">
        <Homme />
        <Menu />
        <Person />
        <Setting />
      </div>
      <Logout />
    </div>
  );
}

export default BarNavigation;
