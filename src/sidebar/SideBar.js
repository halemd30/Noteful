import React from "react";
import { NavLink } from "react-router-dom";
//import AddFolderForm from "../addfolderform/AddFolderForm";
//import Main from "../main/Main";
import "./SideBar.css";
import NoteContext from "../NoteContext";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  render() {
    return (
      <NoteContext.Consumer>
        {(context) => (
          <>
            <div className="sideBar">
              <div className="foldersTitle">
                <h1>Folders</h1>
                <div className="foldersUnderline1"></div>
                <div className="foldersUnderline2"></div>
                <div className="foldersUnderline3"></div>
              </div>
              <ul>
                {context.folders.map((folder) => {
                  return (
                    <li key={folder.id}>
                      <NavLink
                        to={`/folder/${folder.id}`}
                        activeStyle={{
                          color: "white",
                          backgroundColor: "#49297F",
                        }}
                      >
                        {folder.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <Link to="/folderForm">
                <button className="addFolderButton" type="button">
                  Add Folder
                </button>
              </Link>
            </div>
          </>
        )}
      </NoteContext.Consumer>
    );
  }
}

export default SideBar;
