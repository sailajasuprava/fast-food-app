import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 tracking-widest mt-20">
      <div className="text-3xl font-semibold text-center">
        <p>The best pizza.</p>
        <p className="text-yellow-500">
          Straight out of the oven, straight to <br />
          you.
        </p>
      </div>
      <Link to="menu">
        <button className="btn">Start Ordering</button>
      </Link>
    </div>
  );
}

export default Home;
