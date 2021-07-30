import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Manjiri Parab
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
export const Footer = () => {

    return (
        <Box mt={8}>
            <Copyright />
        </Box>
    );
}

export default Footer;