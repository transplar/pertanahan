import React from 'react'
import Appbar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

export default class Admin extends React.Component {
  render () {
    return(
      <div>
        <Appbar
          position='fixed'
          >
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography>Admin Panel</Typography>
          </Toolbar>
        </Appbar>
        <Drawer
          open={true}
          anchor='left'
          variant='persistent'
          >
          <ul>
            <li>Items</li>
          </ul>
        </Drawer>
        <div>content</div>
      </div>
    )
  }
}
