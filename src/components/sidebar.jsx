import React, { Component } from "react";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class Sidebar extends Component {
  render () {
    return (
        <div className="sidebar">
            <List disablePadding dense>
              <ListItem className="bannerLeft">
                <ListItemText>
                  <div className="subtitle">Sidebar</div></ListItemText>
                </ListItem>
              <ListItem className="sidebarItem" button>
                <ListItemText>Button 1</ListItemText>
              </ListItem>
            </List>
          </div>
    )
  }
}

export default Sidebar
