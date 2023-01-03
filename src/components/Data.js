import { useGetGreetingQuery } from "../features/apiSlice";

export const Data = () => {

    const handleClick = () => {
        window.location.reload();
    }
  const { data: greetingOfTheMoment, isLoading } = useGetGreetingQuery();
  if (isLoading) return <h1>Loading...</h1>
  return (
    <>
      <button className="button" onClick={handleClick}>Greet</button>
      <div className="greet">Greeting of the Day: <span>{greetingOfTheMoment?.name}</span></div>
    </>
  );
};
