import { AppBar, Box, Tab, Tabs, Typography, useTheme } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import TabPanel from './TabPanel'
import SwipeableViews from 'react-swipeable-views'


function allyProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls' : `full-width-tabpanel-${index}`
    }
}

export default function FullWidthTabs() {
    const theme = useTheme()
    const [ value, setValue] = useState(0)

    const handleChange = (event , newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    return (
            <Box sx={{ bgcolor: 'background.paper', width: 500}} className='text-center'>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width with tabs"
                        >
                            <Tab label="25 ★" {...allyProps(0)}/>
                            <Tab label="50 ★" {...allyProps(1)}/>
                            <Tab label="150 ★" {...allyProps(2)}/>
                            <Tab label="200 ★" {...allyProps(3)}/>
                            <Tab label="400 ★" {...allyProps(4)}/>
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Typography variant='h2' gutterBottom className='rewards-title'>Customize your drink</Typography>
                            <Typography variant='body1' className='rewards-text'>Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup</Typography>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Item one
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            Item one
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            Item one
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                            Item one
                        </TabPanel>
                </SwipeableViews>
            </Box>
        )

}