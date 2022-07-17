import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { useContributorContext } from "../Context/ContributorContext";
import { ContributorCard } from "./ContributorCard";
import { ContributorDetails } from "./ContributorDetails";

const ContributorsList = () => {
  const { contributors, selectedUser, loading } = useContributorContext();
  const [hideBots, setHideBots] = useState(false);

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

  const noBots = contributors.filter((user) => user.type === "User");

  const contributorsToShow = hideBots ? noBots : contributors;

  if (!contributorsToShow.length) {
    return (
      <div className="main-container">
        <div className="title">No project selected</div>
      </div>
    );
  }

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={hideBots}
            onChange={(e) => setHideBots(e.target.checked)}
            label="Hide bots"
          />
        }
        label="Hide Bots"
        sx={{ marginLeft: "1rem", marginTop: "1rem" }}
      />
      <div className="main-container">
        {contributorsToShow.map((contributor) => (
          <ContributorCard key={contributor.id} {...contributor} />
        ))}
      </div>
    </>
  );
};

export { ContributorsList };
