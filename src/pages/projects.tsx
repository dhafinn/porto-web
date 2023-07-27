import {
  ApolloClient,
  gql,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { AnimatedIcon } from "../components/Skills";

const projects = ({ Repo, RepoUser }) => {
  const project = Repo.map((project, index) => (
    <AnimatedIcon
      key={index}
      icon={
        <a href={project.url} target="_blank">
          <div className=" capitalize border-dark p-10 rounded-2xl border-2 shadow-xl">
            <h1 className="h-6.5 overflow-hidden font-semibold text-xl">
              {project.name}
            </h1>
            <h1 className="h-12 overflow-hidden mt-2">{project.description}</h1>
          </div>
        </a>
      }
    />
  ));

  const projectOwn = RepoUser.map((project, index) => (
        <AnimatedIcon
      key={index}
      icon={
        <a href={project.url} target="_blank">
          <div className=" border-dark p-10 rounded-2xl border-2 shadow-xl">
            <h1 className="h-6.5 overflow-hidden font-semibold text-xl">
              {project.nameWithOwner}
            </h1>
            <h1 className="h-12 overflow-hidden mt-2">{project.description}</h1>
          </div>
        </a>
      }
    />
  ));
  
  return (
    <div className="grid grid-cols-3 gap-8 place-content-center m-20">
      {project}
      {projectOwn}
    </div>
  );
};

export default projects;

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
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
            orderBy: { field: CREATED_AT, direction: ASC }
          ) {
            nodes {
              id
              name
              description
              url
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const RepoUser = user.repositories.nodes;
  const Repo = user.repositoriesContributedTo.nodes;

  return {
    props: {
      Repo,
      RepoUser,
    },
  };
}
