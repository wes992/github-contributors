import React, { useEffect, useState } from "react";
import { getUserInformation } from "../API";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";
import { useContributorContext } from "../Context/ContributorContext";

const ContributorDetails = () => {
  const { selectedUser, setSelectedUser, getUser, loading } =
    useContributorContext();
  // const [user, setUser] = useState({});
  // const getuser = async (name) => {
  //   if (name) {
  //     const result = await getUserInformation(name);

  //     setUser(result);
  //   }
  // };

  useEffect(() => {
    getUser(selectedUser.login);
  }, []);

  const { avatar_url, name, login, bio, location, followers, following } =
    selectedUser;

  if (loading)
    return (
      <div className="main-container">
        <div className="title">Content is loading..</div>
      </div>
    );

  return (
    <Card sx={{ width: 500 }}>
      <CardMedia
        component="img"
        height="500"
        image={avatar_url}
        alt="photo of contributor"
      />
      <CardContent>
        <div className="title">{login}</div>
        {!!name && <div className="body-font">{name}</div>}
        {!!location && <div className="subtitle muted">{location}</div>}
        {!!bio && <div className="body-font">{bio}</div>}
        {!!followers && (
          <div className="subtitle muted">Followers: {followers}</div>
        )}
        {!!following && (
          <div className="subtitle muted">Following: {following}</div>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => setSelectedUser(null)}
        >
          Close
        </Button>
      </CardActions>
    </Card>
  );
};

export { ContributorDetails };
