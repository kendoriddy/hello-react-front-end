import { useGetGreetingQuery } from "../features/apiSlice"

export const Data = () => {

    const {data} = useGetGreetingQuery()
    return <div>Greeting of the Day: {data?.name}</div>
}