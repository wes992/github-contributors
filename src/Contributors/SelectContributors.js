import React, { useState } from "react";

import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

import { useContributorContext } from "../Context/ContributorContext";
import { ContributorsList } from "../Contributors";

const SelectContributors = () => {
  const [selectedRepo, setSelectedRepo] = useState("");
  const { updateContributors } = useContributorContext();
  const options = [
    { name: "React", repo: "facebook/react", value: "React", id: 1 },
    { name: "MUI", repo: "mui/material-ui", value: "MUI", id: 2 },
    { name: "Vue", repo: "vuejs/vue", value: "Vue", id: 3 },
  ];

  const handleChange = async (selectedId) => {
    const optionToSelect = options.find((option) => option.id === selectedId);

    setSelectedRepo(optionToSelect);
    updateContributors(optionToSelect.repo);
  };
  return (
    <div className="app-container">
      <div className="select-instructions">
        <div className="title">
          Select a repo below to see it's contributors
        </div>
      </div>
      <FormControl fullWidth>
        <InputLabel>Repo</InputLabel>
        <Select
          value={selectedRepo.name}
          label="Repo"
          onChange={(e) => handleChange(e.target.value)}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ContributorsList />
    </div>
  );
};

export { SelectContributors };
