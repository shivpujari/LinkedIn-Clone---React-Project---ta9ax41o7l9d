import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import RightSidebar from './RightSidebar'
import LeftSideBar from './LeftSideBar'

const ShareAble = (props) => {
  
  const [inputs, setInputs] = useState("");
  let names = localStorage.getItem('name');

  const commentPost = () => {
    let objs = { inputs };
    let tempArr = [...props.posts]
    tempArr[props.index].coment.push(objs);
    console.log(tempArr, "temparr");
    props.setpost(tempArr)
  }
  return (
    <div>
        <div className='commentDiv'>
          <input type="text" placeholder='Post Comment' onChange={e => setInputs(e.target.value)} />
          <button onClick={commentPost}>Comment</button>
          {props.posts[props.index].coment.map((data) => (
            <div>
         <i className="fa fa-user-circle-o comntMe"><h5 className='h5'>{names}</h5></i>
              <p className='showComnt'>{data.inputs}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
function Home() {
  
 
  const [input, setInput] = useState();
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(false);
  let names = localStorage.getItem('name');

  const clickFn = (index) => {
    console.log("clickfn")
    let list = [...post]
    list[index].clicked = true;
    setPost(list);
  }

  const submitPost = (e) => {
    let obj = { id: post.length, clicked: false, msg: input, coment: [] };
    e.preventDefault();
    setPost([obj, ...post])
    setInput("");
    console.log(post)
  }

  const deletePost = (index) => {
    let tempArr = post;
    console.log(index);
    tempArr.splice(index, 1);
    setPost([...tempArr]);
  }
 
  return (
    <div>
      <Navbar/>
      <div className='mainContainer'>
       <LeftSideBar/>
        <div className='MiddleBar'>
          <div className='PostShare'>
            <i className="fa fa-user-circle-o shareIcon" ></i>
            <input type="search" placeholder=' Start Post' onChange={e => setInput(e.target.value)} />
            <button onClick={submitPost}>Add Post</button>
            <br></br>
            <i className="fa fa-picture-o photoIcon"><p className='photos'>Photos</p></i>
            <i className="fa fa-video-camera videosIcon" ><p className='video'>Video</p></i>
            <i className="fa fa-calendar eventsIcon" ><p className='events'>Events</p></i>
            <i className="fa fa-pencil-square-o articleIcon"><p className='article'>Article</p></i>
          </div>
          <hr></hr>
          <div>
            {post.map((item, index) => (
              <div>
                <div className='postDiv'>
                  <i className="fa fa-user-circle-o postME" ></i>
                  <h3>{names}</h3>
                  <p className='testingPara'>HTML || CSS || JavaScript || React JS || Redux || Bootstrap || Java || jQuery</p>
                  <hr></hr>
                  <p className='testingHeading'>{item.msg}</p>
                  <hr></hr>
                  {like ? <i className="fa fa-thumbs-o-down dislikeArrow"></i> : <i className="fa fa-thumbs-o-up likeArrow"></i>}
                  <span onClick={() => setLike(!like)}>{like ? <span>DisLike</span> : <span>Like</span>}</span>
                  <i className="fa fa-comments commentArrow" onClick={() => { clickFn(index) }}><span>Comment</span></i>
                  <i className="fa fa-trash commentArrow" onClick={() => { deletePost(index) }} ><span>Delete</span></i>
                </div>
                {item.clicked && <ShareAble posts={post} setpost={setPost} index={index} />}
              </div>
            ))}
            <div className="dummyPost">
            <i className="fa fa-user-circle-o postME" ></i>
            <h3>Shivani Pujari</h3>
            <p className='testingPara'>Project Owner</p>
            <hr></hr>
            <p className='testingHeading'>
            LinkedIn is the world's largest professional network on the internet.
             You can use LinkedIn to find the right job or internship, connect and strengthen professional relationships, and learn the
             skills you need to succeed in your career
            </p>
            <hr></hr>
            {like ? <i className="fa fa-thumbs-o-down dislikeArrow"></i> : <i className="fa fa-thumbs-o-up likeArrow"></i>}
            <span onClick={() => setLike(!like)}>{like ? <span>DisLike</span> : <span>Like</span>}</span>
            <i className="fa fa-comments commentArrow"><span>Comment</span></i>
            <i className="fa fa-trash commentArrow" ><span>Delete</span></i>
            </div>
          </div>
        </div>
      <RightSidebar/>
      </div>

    </div>
  )
}

export default Home



