import { ApolloClient, gql, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
  
  const { data } = await client.query({
    query: gql`
    {
      {
        user(login: "dhafinn") {
          repositories(affiliations: OWNER, first: 10) {
            nodes {
              id
              nameWithOwner
              url
              description
            }
            totalCount
          }
          repositoriesContributedTo(
            contributionTypes: COMMIT
            first: 10
            orderBy: {field: CREATED_AT, direction: ASC}
          ) {
            nodes {
              id
              name
              description
            }
          }
        }
      }
    }`
  })

  // console.log(data)
  
}