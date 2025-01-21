import Common from "./Common/Common";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

export default function Header() {
  const navClasses: string =
    "cursor-pointer hover:text-tropicalIndigoLight transition-all ease-in-out duration-300 w-min text-nowrap";

  return (
    <>
      <Common />
      <Mobile navClasses={navClasses} />
      <Desktop navClasses={navClasses} />
    </>
  );
}
