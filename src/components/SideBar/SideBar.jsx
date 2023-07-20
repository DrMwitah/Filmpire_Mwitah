import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { ClassNames } from '@emotion/react';

import useStyles from './styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action ', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

const SideBar = ({ useMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const blueLogo =
    'https://fontmeme.com/permalink/230720/8b96f16beb746a6bbf2521aa47006a13.png';
  const redLogo =
    'https://fontmeme.com/permalink/230720/e6afda1a6321aeda7fe63ba2fedc20a5.png';

  return (
    <div>
      <>
        <Link to="/" className={ClassNames.imageLink}>
          <img
            className={classes.image}
            src={theme.palette.mode === 'light' ? blueLogo : redLogo}
            alt="inkjob Logo"
          />
        </Link>

        <Divider />

        <List>
          <ListSubheader>Categories</ListSubheader>

          {categories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem onClick={() => {}} button>
                {/* <ListItemIcon>
                  <img
                    src={blueLogo}
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon> */}

                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />

        <List>
          <ListSubheader>Categories</ListSubheader>

          {demoCategories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem onClick={() => {}} button>
                {/* <ListItemIcon>
                  <img
                    src={blueLogo}
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon> */}

                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </>
    </div>
  );
};

export default SideBar;
