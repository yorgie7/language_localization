import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from "./Menu";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    marginRight: '40px'
  },
  users: {
    marginRight: '10'
  },
  blogs: {
    marginRight: 'auto',
  },
  link: {
    color: 'white'
  },
  name: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginTop: 10,
    minWidth: 130

  },
}));

export default function Navbar(props) {
  const {t, i18n} = props
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  async function logoutUser() {

    await setAnchorEl(null);
    await localStorage.removeItem("isAuth");
    await window.location.reload("./");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (<>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu"
            onClick={() => {setShowDrawer(true)}}>
            <MenuIcon />
          </IconButton>
        
          <Button variant="outlined" color='primary' className={classes.blogs}>
            <Link href="/" className={classes.link}>  {t('navbar.Home')} </Link>
          </Button>
         
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="subtitle1" className={classes.name}>
            {t('Yogesh Bamanier')}
            </Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {
              localStorage.getItem("isAuth") &&
              (<Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={logoutUser}>{t('navbar.Logout')}</MenuItem>
              </Menu>)
            }
          </div>

        </Toolbar>
      </AppBar>
      {showDrawer && <Drawer setShowDrawer={setShowDrawer} t={t} />}
    </div>
  </>
  );
}
