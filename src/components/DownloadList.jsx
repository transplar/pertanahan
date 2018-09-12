import React from 'react'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import FolderIcon from '@material-ui/icons/Folder'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import downloadFileList from '../data/download.json'

export default class NestedList extends React.Component {
  constructor (props) {
    super (props)

    this.toggleLaporan = this.toggleLaporan.bind(this)
  }

  state = {
    laporan: false,
  }

  generateCollapsedList (list, state) {
    const listItem = list.map(item => (
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
      <Collapse in={state} timeout="auto" unmountOnExit>
        <List component="div" disablePadding style={{ paddingLeft: '2rem' }}>
          {listItem}
        </List>
      </Collapse>
    )
  }

  toggleLaporan () {
    this.setState({ laporan: !this.state.laporan })
  }

  render () {
    return (
      <div>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Unduh Dokumen</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              {this.state.open ? <FolderOpenIcon /> : <FolderIcon />}
            </ListItemIcon>
            <ListItemText inset primary="Landasan Hukum" />
          </ListItem>
          <Divider inset />
          <ListItem button>
            <ListItemIcon>
              {this.state.open ? <FolderOpenIcon /> : <FolderIcon />}
            </ListItemIcon>
            <ListItemText inset primary="Buku Panduan" />
          </ListItem>
          <Divider inset />
          <ListItem button onClick={this.toggleLaporan}>
            <ListItemIcon>
              {this.state.laporan ? <FolderOpenIcon /> : <FolderIcon />}
            </ListItemIcon>
            <ListItemText inset primary="Laporan Tahunan" />
            {this.state.laporan ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Divider inset />
          {this.generateCollapsedList(downloadFileList.laporan, this.state.laporan)}
        </List>
      </div>
    )
  }
}
