import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div className="grid justify-center items-center text-center mt-20">
      <p className="text-4xl">Something went wrong...</p>
      <p>{error.data || error.message}</p>
    </div>
  );
}

export default Error;
