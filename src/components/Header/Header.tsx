import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {

    const classes = useStyles();

    return ( 
        <AppBar position="absolute">
            <Toolbar className="header">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer">
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit"className={classes.title} noWrap>
                    Solana App
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
