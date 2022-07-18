import React, { useState } from "react";

import {
  Checkbox,
  FormControlLabel,
  List,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import { useContributorContext } from "../Context/ContributorContext";
import {
  ContributorCard,
  ContributorDetails,
  ContributorListItem,
} from "../Contributors";

const ContributorsList = () => {
  const { contributors, selectedUser, loading } = useContributorContext();
  const [hideBots, setHideBots] = useState(false);
  const [selectedView, setSelectedView] = useState("list-view");

  const handleChange = (event, view) => {
    if (view) {
      setSelectedView(view);
    }
  };

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

  const pages = [
    {
      id: "list-view",
      content: (
        <List sx={{ width: "100%" }}>
          {contributorsToShow.map((contributor) => (
            <ContributorListItem key={contributor.id} {...contributor} />
          ))}
        </List>
      ),
    },
    {
      id: "grid-view",
      content: contributorsToShow.map((contributor) => (
        <ContributorCard key={contributor.id} {...contributor} />
      )),
    },
  ];

  const getPage = () => {
    return pages.find((page) => page.id === selectedView).content;
  };

  return (
    <>
      <div className="list-container-controls">
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

        <ToggleButtonGroup
          value={selectedView}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="list-view">list</ToggleButton>
          <ToggleButton value="grid-view">Grid</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="main-container">{getPage()}</div>
    </>
  );
};

export { ContributorsList };
