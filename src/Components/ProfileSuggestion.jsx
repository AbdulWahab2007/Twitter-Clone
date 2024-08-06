import React from "react";
import { IconButton } from "./ProfilePopover";
import { Button } from "./Dialog";

export default function ProfileSuggestion(props) {
  return (
    <>
      <IconButton
        $suggestion
        className="IconButton"
        aria-label="Update dimensions"
      >
        <div className="left">
          <img className="DP" src={props.dp} alt="" />
          <div className="Names">
            <h3>{props.name}</h3>
            <p>{"@" + props.username}</p>
          </div>
        </div>
        <div className="right">
          <Button $follow>
            <p>Follow</p>
            <span className="material-symbols-outlined">person_add</span>
          </Button>
        </div>
      </IconButton>
    </>
  );
}
