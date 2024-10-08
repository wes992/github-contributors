import React from "react";

import { CardActionArea, Card, CardContent, CardMedia } from "@mui/material";

import { useContributorContext } from "../Context/ContributorContext";

const ContributorCard = (contributor) => {
  const { setSelectedUser } = useContributorContext();
  const { avatar_url, contributions, login } = contributor;

  return (
    <Card sx={{ width: 200 }}>
      <CardActionArea onClick={() => setSelectedUser(contributor)}>
        <CardMedia
          component="img"
          height="200"
          image={avatar_url}
          alt="image of contributor to project"
        />
        <CardContent>
          <div className="title">{login}</div>
          {contributions && (
            <div className="subtitle muted">Contributions: {contributions}</div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { ContributorCard };
