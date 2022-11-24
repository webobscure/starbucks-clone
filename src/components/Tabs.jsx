import { AppBar, Box, Tab, Tabs, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import TabPanel from './TabPanel';
import SwipeableViews from 'react-swipeable-views';

import firstReward from '../assets/favorite-1.png';
import secondReward from '../assets/favorite-2.png';
import thirdReward from '../assets/favorite-3.png';
import fourthReward from '../assets/favorite-4.png';
import fifthReward from '../assets/favorite-5.png';

function allyProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'white', width: 600,height: 700 }} className="tabs-group">
      <AppBar position="static" className='tabs-group_panel' >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#00754a"
            }
          }}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width with tabs"
          className='tabs-group_rewards'>
          <Tab label="25 ★" {...allyProps(0)} />
          <Tab label="50 ★" {...allyProps(1)} />
          <Tab label="150 ★" {...allyProps(2)} />
          <Tab label="200 ★" {...allyProps(3)} />
          <Tab label="400 ★" {...allyProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <img src={firstReward} alt="first reward" />
          <Typography variant="h5" gutterBottom className="rewards-title">
            Customize your drink
          </Typography>
          <Typography variant="body1" className="rewards-text">
            Make your drink just right with an extra espresso shot, dairy substitute or a dash of
            your favorite syrup
          </Typography>
          
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <img src={secondReward} alt="first reward" />
          <Typography variant="h5">Brewed hot coffe, bakery item of hot tea</Typography>
          <Typography varoant="body1">
            Pair coffee cake or an almond croissant woth your fresh cup of hot brew.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <img src={thirdReward} alt="first reward" />
          <Typography variant="h5">Handcrafted drink, hot breakfast or parfait</Typography>
          <Typography varoant="body1">
            Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <img src={fourthReward} alt="first reward" />
          <Typography variant="h5">Salad, sandwich or protein box</Typography>
          <Typography varoant="body1">
            Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <img src={fifthReward} alt="first reward" />
          <Typography variant="h5">Select merchandise or at-home coffee</Typography>
          <Typography varoant="body1">
            Take home a signature cup, a bag of coffee or your choice of select coffee accessories.
          </Typography>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
