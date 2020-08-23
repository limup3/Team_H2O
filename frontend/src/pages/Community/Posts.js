import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Posts = ({ sendList, loading }) => {
    const [click, setClick] = useState(0);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    {sendList && sendList.reverse().map((info,i)=>(
    <tr key={i}>
        <td>{info.boardNo}</td>
        <td>empty</td>
        {/*<td>{info.user.userId}</td>*/}
        <td>{info.medCategory}</td>
        <td id="title" onClick={()=>setClick(click+1)}>
                <Link to={`/Community/Review/${info.boardNo}`}>{info.title}</Link>
        </td>
        {/*<td>{info.content}</td>*/}
        <td>{info.creationDate}</td>
        <td>{info.click}</td>
    </tr>
))}
    </>
  );
};

export default Posts;