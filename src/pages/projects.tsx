import {
  ApolloClient,
  gql,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { AnimatedIcon } from "../components/Skills";
import { motion } from "framer-motion";
import Head from "next/head";

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
              {project.name}
            </h1>
            <h1 className="h-12 overflow-hidden mt-2">{project.description}</h1>
          </div>
        </a>
      }
    />
  ));
  
  return (
    <div>
       <Head>
        <title>Dhafin | Projects Page</title>
        <meta name="project" content="project"></meta>
      </Head>
      
      
      <div>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          type: "spring",
          damping: 15,
          stiffness: 100,
        }}>

          <h1 className="text-dark text-7xl font-bold mt-20 mb-2 pb-2 flex items-center justify-center overflow-visible h-32">
            previous
            <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 h-full bg-clip-text items-center flex-col flex text-transparent justify-center">&nbsp;project</span>
          </h1>
        </motion.div>
       
      </div>
      <div className="grid grid-cols-3 gap-8 place-content-center m-20">
      {/* <div className="z-0 w-full">
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-[500px] h-[500px] bg-emerald-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div> */}
      {/* <div className=" w-full z-0"> */}
      {/* <div className="w-[675px] h-[678px] relative z-10"> */}
          {/* <div className="w-[320px] h-[401px] left-0 top-[193px] absolute bg-fuchsia-600 rounded-full blur-[250px]"></div>
          <div className="w-[501px] h-[601px] left-[171px] top-0 absolute bg-blue-600 rounded-full blur-[250px]"></div>
          <div className="w-[191px] h-[401px] left-[197px] top-[270px] absolute bg-blue-100 rounded-full blur-[100px]"></div>
        </div> */}
        {project}
        {projectOwn}
      </div>
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
              name
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
