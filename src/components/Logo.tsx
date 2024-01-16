import LogoImg from "../assets/logo.svg";

export default function Logo() {
  return (
    <a href="." className="logo">
      <img src={LogoImg} alt="Logo" className="logo__img" />
    </a>
  );
}
