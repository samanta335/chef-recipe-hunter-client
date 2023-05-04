import React from "react";

const Blog = () => {
  return (
    <div className="ms-5 mt-3">
      <h3>
        Q:1 Tell us the differences between uncontrolled and controlled
        components.
      </h3>
      <p>
        Ans:- In React, controlled components refer to components that have
        their state and behavior controlled by the parent component.
        <br />
        These components rely on props passed down from the parent component to
        update their state and behavior.
        <br />
        Uncontrolled components refer to components that manage their own state
        internally.
      </p>
      <h3>Q:2 How to validate React props using PropTypes?</h3>
      <p>
        Ans: A parent component passes props down to child components. And child
        components receive them.
        <br />
        We can pass any data as props. Therefore, we need a way to validate
        their data type so that the child component gets what they expect.
      </p>
      <h3>Q:3 Tell us the difference between nodejs and express js.</h3>
      <p>
        Ans: Express is a minimal and flexible node. js web application
        framework, providing a robust set of features for building single and
        multi-page,
        <br />
        and hybrid web applications. On the other hand, Node. js is detailed as
        "A platform built on Chrome's JavaScript runtime for easily building
        fast,
        <br />
        scalable network applications".
      </p>
      <h3>Q:4 What is a custom hook, and why will you create a custom hook?</h3>
      <p>
        Ans: Custom React JS hooks offer reusability as when a custom hook is
        created, it can be reused easily, which makes the code cleaner and
        reduces the time to write the code. It also enhances the rendering speed
        of the code as a custom hook does not need to be rendered again and
        again while rendering the whole code.
      </p>
    </div>
  );
};

export default Blog;
