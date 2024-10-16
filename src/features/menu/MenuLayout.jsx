import { NavLink, Outlet } from "react-router-dom";

function MenuLayout() {
  return (
    <>
      <nav className="text-center p-4">
        <NavLink to="/menu/pizza">
          <button className="navbtn">Pizza</button>
        </NavLink>

        <NavLink to="/menu/desert">
          <button className="navbtn">Dessert</button>
        </NavLink>
      </nav>

      <section className="max-w-screen-md m-auto">
        <Outlet />
      </section>
    </>
  );
}

export default MenuLayout;
