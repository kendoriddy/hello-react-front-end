import { useGetGreetingQuery } from "../features/apiSlice"

export const Data = () => {

    const {data} = useGetGreetingQuery()
    console.log(data)
    return <div>Greeting of the Day:</div>
}