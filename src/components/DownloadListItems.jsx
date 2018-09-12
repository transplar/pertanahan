import React from 'react'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import FolderIcon from '@material-ui/icons/Folder'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'

export default class DownloadListItems extends React.Component {
  constructor (props) {
    super(props)

    this.toggleHandler = this.toggleHandler.bind(this)
    this.state = {
      open: false
    }
  }

  toggleHandler () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    const listItem = this.props.items.map(item => (
      <div>
        <ListItem button>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText inset primary={item} />
        </ListItem>
        <Divider inset />
      </div>
    ))

    return (
      <div>
        <ListItem button onClick={this.toggleHandler}>
          <ListItemIcon>
            {this.state.open ? <FolderOpenIcon /> : <FolderIcon />}
          </ListItemIcon>
          <ListItemText inset primary={this.props.title} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider inset />
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding style={{ paddingLeft: '2rem' }}>
            {listItem}
          </List>
        </Collapse>
      </div>
    )
  }
}
