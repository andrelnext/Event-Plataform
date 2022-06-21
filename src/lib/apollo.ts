import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4o9cyeo18xd01xrg41aap3t/master",
    cache: new InMemoryCache()
});