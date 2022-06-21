import {useEffect} from "react";
import { gql } from '@apollo/client';
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
    query {
        lessons {
            id
            title
        }
    }
`;

function App() {
    useEffect(() => {
        client.query({
            query: GET_LESSONS_QUERY,
        }).then(res => {
            console.log(res.data);
        })
    }, [])

  return (
    <h1 className="title">Hello World</h1>
  )
}

export default App
