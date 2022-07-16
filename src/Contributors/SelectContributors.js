import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useContributorContext } from "../Context/ContributorContext";
import { ContributorsList } from "./ContributorsList";

const SelectContributors = ({}) => {
  const [selectedRepo, setSelectedRepo] = useState();
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
    <Container sx={{ marginTop: "1rem", minWidth: 120 }}>
      <Box justifyContent={"center"} display="flex" marginBottom={"1rem"}>
        <Typography variant="h6">
          Select a repo below to see it's contributors
        </Typography>
      </Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Repo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedRepo}
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
    </Container>
  );
};

export { SelectContributors };
