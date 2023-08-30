import React from "react";
import moment from "moment";
import './index.css';
import {
  Avatar,
  Box,
  Card,
  Typography,
  Link,
  Chip
} from "@mui/material";

const Dashboard = ({
  avatar,
  name,
  html_url,
  owner,
  description,
  starCount,
  open_issues_count,
  created_at
}) => {
  return (
    <div>
    <Card
      className="CardContainer"
    >
      <Avatar src={avatar} className="avatar" />
      <Box >
        <Typography variant="h4" className="name" >
          <Link href={html_url} target="_blank" rel="noopener noreferrer" >
            {name}
          </Link>
        </Typography>
        <Typography className="description" >
          {description}
        </Typography>
        <Chip
          label={` Stars: ${starCount} `}
          variant="outlined"
         
        />
        <Chip
          label={` Issues: ${open_issues_count} `}
          variant="outlined"
          
        />
        <Typography className="submittedby">
          Submitted {moment(created_at).fromNow()} By {owner}
        </Typography>
      </Box>
    </Card>
    </div>
  );
};

export default Dashboard;