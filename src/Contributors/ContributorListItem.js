import React from "react";

import {
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

import { useContributorContext } from "../Context/ContributorContext";

const ContributorListItem = (contributor) => {
  const { setSelectedUser } = useContributorContext();
  const { avatar_url, contributions, login } = contributor;
  return (
    <>
      <ListItem
        alignItems="flex-start"
        onClick={() => setSelectedUser(contributor)}
      >
        <ListItemAvatar>
          <Avatar alt="" src={avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={login}
          secondary={`Contributions: ${contributions}`}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export { ContributorListItem };
