import axios from "axios";
import React, {useEffect, useState} from "react";
import {
    Col,
    Row,
    Container,
  } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import ChatIcon from '@mui/icons-material/Chat';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import Form from 'react-bootstrap/Form'

const style = {
    title: {
        color: "blue",
        font: "15px",
    },
    body: {
        color: "gray"
    },
    actions: {
        borderRadius: "20px",
        backgroundColor: "gray",
        paddingRight: "10px",
        textAlign: "lightblue"
    }
}

const Posts = (props) => {

const [posts, setPosts] = useState([])
const [comments, setComments] = useState([])
const [show, setShow] = useState(true)
const [postTitle, setPostTitle] = useState("")
const [postBody, setPostBody] = useState("")
const [backupPost, setBackupPost] = useState([])
const [editId, setEditId] = useState(0)
const [open, setOpen] = useState(false)
const [fullWidth] = useState(true);
const [maxWidth] = useState('sm');
const [title1, setTitle1] = useState("")
const [body1, setBody1] = useState("")

const userId = props.userId;

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => {
        setPosts(res.data)
        setBackupPost(res.data)
        setShow(true)
        setPostTitle("")
        setPostBody("")
    })
}, [])

const displayComments = (postId, title, body) => {
    setEditId(postId)
    setTitle1(title)
    setBody1(body)
    setShow(false)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((res) => {
        setComments(res.data)
    })
}
// delete post
const deletePost = (postId) => {

    let deleteFilter = posts.filter(item => item.id !== postId)
    setPosts(deleteFilter)
}

const handleClickOpen = (postId, title, body) => {
    setEditId(postId)
    setPostTitle(title)
    setPostBody(body)
    setOpen(true);
  };

  const handleClose = () => {
    setEditId(0)
    setOpen(false)
  }; 

const editPost = () => {
    displayComments(editId, postTitle, postBody)
 
    posts.map((item) => {
        if(item.id === editId) {
            item.title = postTitle;
            item.body = postBody;
        }
        else {
            item.title = item.title;
            item.body = item.body;
        }
    })
    setOpen(false)
    setEditId(0)
}

    return (
    <div>
        <Container>
            <Row>
                <Col md={12}>
              {
                  show === true ? (
                    <div>
                    {
                         posts && posts.map((post) => (
                            <div className="m-3">
                            <div onClick={(e)=>displayComments(post.id, post.title, post.body)}>
                                 <Card style={{backgroundColor: "#fff", cursor: "pointer"}}>
                                 <Card.Body>
                                 <Card.Title style={style.title}>{post.title}</Card.Title>
                                 <Card.Text style={style.body}>{post.body}</Card.Text>
                                 </Card.Body>
                                 </Card>
                            </div>
                            <div style={style.actions}>
                            <Tooltip title="Delete post">
                                <DeleteIcon style={{color: "red", cursor: "pointer"}} className="me-4" 
                                onClick={()=>deletePost(post.id)}
                                />
                            </Tooltip>
                            <Tooltip title="Edit post">
                                <EditIcon style={{color: "green", cursor: "pointer"}} className="me-4"
                                onClick={()=>handleClickOpen(post.id, post.title, post.body)}
                                />
                            </Tooltip>
                            </div>
                            </div>
                         ))
                     }
                    </div>
                  )
                  : show === false ? (
                    <div>
                        {/* display posts */}
                          <Card style={{backgroundColor: "#fff", cursor: "pointer"}}>
                                 <Card.Body>
                                 <Card.Title style={style.title}>{title1}</Card.Title>
                                 <Card.Text style={style.body}>{body1}</Card.Text>
                                 </Card.Body>
                          </Card>
                        <div style={style.actions}>
                        <Tooltip title="Delete post">
                            <DeleteIcon style={{color: "red", cursor: "pointer"}} className="me-4" 
                            onClick={()=>deletePost(editId)}
                            />
                        </Tooltip>
                        <Tooltip title="Edit post">
                            <EditIcon style={{color: "green", cursor: "pointer"}} className="me-4"
                            onClick={()=>handleClickOpen(editId, title1, body1)}
                            />
                        </Tooltip>
                        
                        </div>
                        {/* display comments */}
                        <h5 style={{textAlign: "left"}}>Comments: <ChatIcon/></h5>
                    {
                         comments && comments.map((comment) => (
                             <div onClick={(e)=>displayComments(comment.id)}>
                                 <Card style={{backgroundColor: "#fff"}}>
                                 <Card.Body>
                                 <Card.Title style={style.commentTitle}>{comment.name}</Card.Title>
                                <span style={{float: "left", textDecoration: "underline"}}>Commented by: {comment.email}</span><br/>
                                <Card.Text style={style.CommentBody}>

                                    {comment.body}</Card.Text>
                                 </Card.Body>
                                 </Card>
                             </div>
                         ))
                     }
                    </div>
                  )
                  :(
                      ""
                  )
              }
                </Col>
            </Row>
        </Container>

        {/* dialog to edit post */}
        <Dialog open={open} onClose={handleClose} 
        fullWidth={fullWidth}
        maxWidth={maxWidth}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Post Title</Form.Label>
                <Form.Control type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Post Content</Form.Label>
                <Form.Control as="textarea" rows={3} 
                 value={postBody}
                 onChange={(e) => setPostBody(e.target.value)}
                />
            </Form.Group>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editPost}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default Posts;