import React from "react";
import Dashboard from "../DashBoard";
import './index.css';

const ListData = ({ data }) => {
  return (
    <div className="Listcontainer">
      {data.map((item, index) => {
        return (
          <Dashboard
            key={item.id}
            avatar={item.owner.avatar_url}
            owner={item.owner.login}
            name={item.name}
            html_url={item.html_url}
            description={item.description}
            starCount={item.stargazers_count}
            open_issues_count={item.open_issues_count}
            created_at={item.created_at}
          />
        );
      })}
    </div>
  );
};

export default ListData;