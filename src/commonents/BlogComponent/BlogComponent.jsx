import React from 'react';

const BlogComponent = () => {
    return (
      <div>
        <div className="mx-4 p-4 shadow rounded">
          <h4>2. Props vs state</h4>
          <p>
            Answer: props are immutable that is their content can not be changed
            once assigned. otherhands React state is mutable and its value can
            be changed as per requirement . props set by event handlers that is
            they are completely managed by component itself . state are set by
            parent component. props allows child components to read values from
            parent components . otherhands state is local to a component and
            cannot be used in other component
          </p>
        </div>
        <div className="mx-4 p-4 shadow rounded">
          <h4>3. How does useState work?</h4>
          <p>
            Answer: Hooks allow function component to have access to state and
            other react feature. Hooks allow us to "hook" into react features
            such as state and lifecycle methods. 1) the useState Hook allows
            usto track state in a function component 2) To use the useState
            hook, you need to know a few things 1.Must import if from the react
            library 2. Must invoke it inside a react component
          </p>
        </div>
        <div className="mx-4 p-4 shadow rounded">
          <h4>4. Purpose of useEffect other than fetching data.</h4>
          <p>
            Answer: The useEffect hook allows you to perform side effects in your component some examples of side effects are fetching data, directly updating the dom and timers.
            To use the useEfect hook we need to know a few Things 
            1)we import useEffect from react 2)we call it above the returned jsx in our component
            3) we usually pass two arguments a function and an array.
          </p>
        </div>
        <div className="mx-4 p-4 shadow rounded">
          <h4>5. How does react work?</h4>
          <p>
           Answer: React is a javascript library for building userinterfaces.
           React js is declarative, efficent and flexible.
           It is fast and component based. it was initally developed and maintained by facebook. React breaks webElements down into reusable components making it easy to manage complex web interfaces.
           react's virtual Dom is a javascript represntation of the actual dom. when updates are made react components are compare the current dom to the virtual dom and only updates the difference between the two.
          </p>
        </div>
      </div>
    );
};

export default BlogComponent;