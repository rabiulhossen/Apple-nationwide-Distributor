import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
    1.Difference between javascript and nodejs?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <code>NodeJs:</code> Its a backend Framework used to built server side of the web applications. Its writen in JS. Unlike JS its used outside the browser. it used to built web applications , desktop and mobile softwares. 
You can do file system manipulation (file handling), Database. which you can't do in JS.

    
<br></br>
<code>javascript:</code>JavaScript (JS) is a dynamic computer programming language . It is most commonly used as part of web browsers, whose implementations allow client-side scripts to interact with the user, control the browser, communicate asynchronously, and alter the document content that is has also become common in server-side programming, game development and the creation of desktop applications.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       2. When should you use nodejs and when should you use mongodb?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
       <code>Mongodb:</code>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.MongoDB is a very easy DBMS system that can easily scale up or down.

       <br></br>
       <code>NodeJs:</code>Its a backend Framework used to built server side of the web applications. 
Its writen in JS. Unlike JS its used outside the browser.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        3.Differences between sql and nosql databases.
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <code>Sql:</code>Databases are categorized as Relational Database Management System (RDBMS).SQL databases have fixed or static or predefined schema.SQL databases use a powerful language "Structured Query Language" to define and manipulate the data.
        <br></br>
        <code>nosql:</code>NoSQL databases are categorized as Non-relational or distributed database system.NoSQL databases have dynamic schema.In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;