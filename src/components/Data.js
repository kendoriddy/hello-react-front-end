import { useGetGreetingQuery } from "../features/apiSlice";

export const Data = () => {

    const handleClick = () => {
        window.location.reload();
    }
  const { data } = useGetGreetingQuery();
  return (
    <>
      <button className="button" onClick={handleClick}>Greet</button>
      <div>Greeting of the Day: {data?.name}</div>
    </>
  );
};
