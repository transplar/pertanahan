import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CameraAlt from '@material-ui/icons/CameraAlt'
import Dashboard from '@material-ui/icons/Dashboard'
import DeveloperBoard from '@material-ui/icons/DeveloperBoard'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Folder from '@material-ui/icons/Folder'
import Home from '@material-ui/icons/Home'
import LocalLibrary from '@material-ui/icons/LocalLibrary'
import Lock from '@material-ui/icons/Lock'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 280

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
})

const navigationItems = [
  {
    path: '/admin',
    icon: <Dashboard />,
    title: 'Dashboard'
  },
  {
    path: '/admin/news',
    icon: <LocalLibrary />,
    title: 'Berita'
  },
  {
    path: '/admin/gallery',
    icon: <CameraAlt />,
    title: 'Galeri'
  },
  {
    path: '/admin/document',
    icon: <Folder />,
    title: 'Dokumen'
  },
  {
    path: '/admin/setting',
    icon: <DeveloperBoard />,
    title: 'Setting'
  },
  {
    path: '/admin/changepassword',
    icon: <Lock />,
    title: 'Ganti Password'
  },
  {
    path: '/logout',
    icon: <ExitToApp />,
    title: 'Logout'
  }
]

class AdminDrawer extends React.Component {
  render () {
    const { classes, theme } = this.props
    const homepage = (
      <Link to='/'>
        <ListItem button>
          <ListItemIcon className='m-0'>
            <Home />
          </ListItemIcon>
          <ListItemText primary='Beranda' />
        </ListItem>
      </Link>
    )
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List>
          {homepage}
          <Divider />
          {navigationItems.map(item => (
            <Link to={item.path} key={item.path}>
              <ListItem button onClick={() => this.props.changeTitle(item.title)}>
                <ListItemIcon className='m-0'>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    )

    return(
      <nav className={classes.drawer}>
        <Hidden smUp implementation='css'>
          <Drawer
            container={this.props.container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.props.mobileOpen}
            onClose={this.props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
            >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    )
  }
}

export { drawerWidth }
export default withStyles(styles, {withTheme: true})(AdminDrawer)
