import { Outlet } from "react-router-dom";

import Header from "./Header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer style={{ padding: "50px", textAlign: "center", color: "white" }}>
        made with ❤️ by{" "}
        <a href="https://github.com/Yonro-08" target="_blank">
          Yonro-08
        </a>
      </footer>
    </>
  );
}
