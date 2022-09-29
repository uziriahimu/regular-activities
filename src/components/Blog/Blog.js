import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Question 01:How does react work?</h2>
            <p><strong>Answer:</strong> React breaks web elements down into reusable components making it easy to manage complex web.React's virtual DOM is javascript representation of the actual DOM. When updates are made React compares the current DOM to the virtual Dom and only updates the differents between the two.</p>
            <h2>Question 02:Difference between props and states</h2>
            <p><strong>Answer:</strong><br />
                <strong>Props:</strong> <br />
                1.props are read only. <br />
                2.props are unidirectional . <br />
                3. props can not be modified. <br />
                4. we use props in react to pass data from on component to another. <br />
                <strong>State:</strong> <br />
                1.state changes can be asynchronous <br />
                2.State can be modified using this.set state <br />
                3.Then change in state can happen as a response to user action or system generated events. <br />
                4. A component's state can change over time. when ever it changes , the component re-renders.

            </p>
            <h2>Question 03:Use of useEffect</h2>
            <p><strong>Answer:</strong> useEffect allows you to perform side effects in your components. some example of side effects are:  updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
        </div>
    );
};

export default Blog;