import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    bg : {
        backgroundColor: "#000000"
    }
}));
export const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.bg}>
                    <Typography variant="h6" className={classes.title} >
                    <Link className="link" to='/test-app'>My Daily Diary</Link>
                    </Typography>
                    <Button color="inherit"><Link className="link" to='/test-app/login'>Login</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}