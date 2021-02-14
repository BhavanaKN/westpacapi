import React from 'react';

const Posts= (props) =>{

    const renderPosts = ({postsList}) =>{
        if(postsList){
            return <ul>
            {postsList.map(item => (
               <li key={item.id}>Id : {item.id}
                <ul>
                    <li>Title : {item.title}</li>
                    <li>Body : {item.body}</li>
                 </ul>
               </li>
            ))};
         </ul>
        }
    }

    return(
        <div>
            {renderPosts(props)}
        </div>
    )
}

export default Posts;