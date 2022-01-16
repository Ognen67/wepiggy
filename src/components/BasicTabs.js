import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./BasicTabs.css"
import InfoBlock from "./InfoBlock";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="TabPanel"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="BasicTabs">
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className="InfoBlocks">
                        <InfoBlock title={"Deposit Market Size"} price={"$ 81,670,429.15"}/>
                        <InfoBlock title={"Deposit Market Size"} price={"$ 81,670,429.15"}/>
                        <InfoBlock title={"Deposit Market Size"} price={"$ 81,670,429.15"}/>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="InfoBlocks">
                        <InfoBlock title={"Deposit Market Size"} price={"$ 81,670,429.15"}/>
                        <InfoBlock title={"asdas Market Size"} price={"$ 81,670,429.15"}/>
                        <InfoBlock title={"Deposit Market Size"} price={"$ 81,670,429.15"}/>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="InfoBlocks">
                        <InfoBlock title={"Deposit Market Size"} price={"$ 81,670,429.15"}/>
                        <InfoBlock title={"Deposit Market Size"} price={"$ 81,670,429.15"}/>
                        <InfoBlock title={"Deposit asdas Size"} price={"$ 81,670,429.15"}/>
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}
