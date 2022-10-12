import React from 'react'
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { Kayttaja } from '../store/kayttajatSlice';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Kayttajalista : React.FC = () : React.ReactElement => {

  const kayttajat = useSelector((state : RootState) => state.kayttajat);

  return (
    <List>
      {kayttajat.map((kayttaja : Kayttaja, idx : number) => {
        return (<ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={kayttaja.nimi}
                    secondary={`${kayttaja.tunnus} ${(kayttaja.admin)?" (admin)":""}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <EditIcon/>
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>)
      })}
    </List>
  )
}

export default Kayttajalista;