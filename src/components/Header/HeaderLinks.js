import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Info, Reorder, ListAlt, ViewList, Email } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#About"
          color="transparent"
          className={classes.navLink}
        >
          <Info className={classes.icons} /> About Me
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#resume"
          color="transparent"
          className={classes.navLink}
        >
          <ListAlt className={classes.icons} /> Resume
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#Services"
          color="transparent"
          className={classes.navLink}
        >
          <Reorder className={classes.icons} /> Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#Portfolio"
          color="transparent"
          className={classes.navLink}
        >
          <ViewList className={classes.icons} /> Portfolio
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#Contact"
          color="transparent"
          className={classes.navLink}
        >
          <Email className={classes.icons} id="contact" /> Contact
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedln"
          title="Follow me on LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/edenilton-borba-861a9b18a/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.LinkedInIcon + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="gitHub"
          title="Follow me on GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/EdeniltonBorba"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.GitHubIcon + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow me on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/EdeniltonBorba_"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/edenilton.borba.1"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/edenilton_borba/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
