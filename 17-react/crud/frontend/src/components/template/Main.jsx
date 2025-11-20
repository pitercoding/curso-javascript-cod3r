import "./Main.css";
import Header from "./Header";

export default function Main({ children, ...rest }) {
  return (
    <>
      <Header {...rest} />

      <main className="content container-fluid">
        <div className="p-3 mt-3">{children}</div>
      </main>
    </>
  );
}