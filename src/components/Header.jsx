import logo from "../assets/investment-calculator-logo.png";

export default function Header({ Heading }) {
  return (
    <>
      <header id="header">
        <img src={logo} alt="header logo" />
        <h1>{Heading}</h1>
      </header>
    </>
  );
}
