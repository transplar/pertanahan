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

export default class NestedList extends React.Component {
  state = {
    laporan: false,
  }

  toggleLaporan = () => {
    this.setState(state => ({ laporan: !this.state.laporan }))
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
          <Collapse in={this.state.laporan} timeout="auto" unmountOnExit>
            <List component="div" disablePadding style={{paddingLeft: '2rem'}}>
              <ListItem button>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText inset primary="Laporan Tahun 2017" />
              </ListItem>
              <Divider inset />
            </List>
          </Collapse>
        </List>
      </div>
    )
  }
}
