// InfoCard.js

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  Tooltip,
  makeStyles,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

import { addMoreFunction } from './InfoCardFunctions';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: '25px',
    padding: '20px',
    position: 'relative',
    border: '16px solid green',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '200px',
    marginTop: '100px',
  },
  cardTitle: {
    color: 'black',
    alignSelf: 'flex-start',
    marginBottom: '4px',
  },
  cardContent: {
    marginTop: '16px',
    marginBottom: '32px',
  },
  fabContainer: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1),
  },
  fabEdit: {
    zIndex: 1,
  },
  fabAdd: {
    zIndex: 1,
  },
}));

const InfoCard = ({ title, content }) => {
  const classes = useStyles();
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [newTitle, setNewTitle] = useState(title);
  const [addContent, setAddContent] = useState('');

  const handleEditClick = () => {
    setEditContent(content);
    setNewTitle(title);
    setEditDialogOpen(true);
  };

  const handleAddMoreClick = () => {
    setAddDialogOpen(true);
  };

  const handleClose = () => {
    setAddDialogOpen(false);
    setEditDialogOpen(false);
  };

  const handleSaveClick = () => {
    // Use the addMoreFunction to update the content
    setEditContent((prevContent) => addMoreFunction(newTitle, prevContent, addContent));
    handleClose();
  };

  const handleAddDialogSave = () => {
    // Use the addMoreFunction to update the content
    setEditContent((prevContent) => addMoreFunction(newTitle, prevContent, addContent));
    handleClose();
  };

  return (
    <Card className={classes.card}>
      <CardHeader title={title} className={classes.cardTitle} />

      <div className={classes.cardContent}>{editContent}</div>

      <div className={classes.fabContainer}>
        <Tooltip title="Edit" arrow>
          <Fab size="small" color="secondary" aria-label="edit" className={classes.fabEdit} onClick={handleEditClick}>
            <EditIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add" arrow>
          <Fab size="small" color="primary" className={classes.fabAdd} onClick={handleAddMoreClick}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>

      <Dialog open={isEditDialogOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Edit InfoCard</DialogTitle>
        <DialogContent>
          <TextField
            label="Content"
            variant="outlined"
            fullWidth
            multiline
            rows={10}
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveClick} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isAddDialogOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Add New InfoCard</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <TextField
            label="Content"
            variant="outlined"
            fullWidth
            multiline
            rows={10}
            value={addContent}
            onChange={(e) => setAddContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddDialogSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default InfoCard;
