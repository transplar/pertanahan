import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
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

class AdminDrawer extends React.Component {
  render () {
    const { classes, theme } = this.props
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Item'].map(text => (
            <ListItem button key={text}>
              <ListItemIcon className='m-0'>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
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
