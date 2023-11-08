import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error  = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-full ">
      <h1>Oops!</h1>
      <p></p>
      <p className="text-3xl font-bold underline">
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
}