import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
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
