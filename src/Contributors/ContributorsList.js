import React from "react";
import { useContributorContext } from "../Context/ContributorContext";

const ContributorsList = ({}) => {
  const { contributors } = useContributorContext();
  console.log(contributors);

  if (!contributors.length) return <div>No Contributors loaded</div>;

  return contributors.map((contributor) => (
    <div key={contributor.id}>{contributor.login}</div>
  ));
};

export { ContributorsList };
