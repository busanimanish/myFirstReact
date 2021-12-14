import React from "react";
import ReactDom from "react-dom";
//function Greeting(){
 // return <h4>
  //  this is first react component
  //</h4>
//}
import './App.css';
const firstBook={
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlN6azi6O5cN4FVsSAjm9mRNOj6l7xEiiuXw&usqp=CAU',
  title: 'These are the Books from Library one',
  author: "Manish Reddy Busani",
};
const secondBook={
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_2pRlU00IpkPwSDccYi0b3SiMSXIARR2HQ&usqp=CAU',
  title: 'These are the Books from Library Two',
  author: "Mirupuri pavan kumar",
};


function bookList(){
  return(
    <section className="bookList">
 <Books
 img={firstBook.img}
 title={firstBook.title}
 author={firstBook.author}
 >
   <p>
    lorem20 inrf imjahb dbe ch chr h r4r fftrcdc  cfd f d f d fdf df  fcd 
   </p>
 </Books>
 <Books
 img={secondBook.img}
 title={secondBook.title}
 author={secondBook.author}
 />
  </section>
  );
};

const Books=({img,title,author,children})=>{
  return (
  <section>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </section>
  )
}

ReactDom.render(<bookList/>,document.getElementById('root'))
export default bookList