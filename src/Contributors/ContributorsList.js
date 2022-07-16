import React from "react";
import { useContributorContext } from "../Context/ContributorContext";
import { ContributorCard } from "./ContributorCard";
import { ContributorDetails } from "./ContributorDetails";

const ContributorsList = () => {
  const { contributors, selectedUser, loading } = useContributorContext();

  if (selectedUser)
    return (
      <div className="main-container">
        <ContributorDetails />
      </div>
    );

  if (loading)
    return (
      <div className="main-container">
        <div className="title">Content is loading..</div>
      </div>
    );

  return (
    <div className="main-container">
      {!contributors.length ? (
        <div className="title">No project selected</div>
      ) : (
        contributors.map((contributor) => (
          <ContributorCard key={contributor.id} {...contributor} />
        ))
      )}
    </div>
  );
};

export { ContributorsList };
