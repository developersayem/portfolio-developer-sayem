/* eslint-disable react/no-unknown-property */
import "./Header.css";
const Header = () => {
  return (
    <div className="p-10 header">
      <h1
        className="text-6xl glitch text-black text-center "
        style={{ fontFamily: "Gadems" }}
      >
        <span aria-hidden="true">Developer Sayem</span>
        Developer Sayem
        <span aria-hidden="true"> Developer Sayem</span>
      </h1>
    </div>
  );
};

export default Header;
