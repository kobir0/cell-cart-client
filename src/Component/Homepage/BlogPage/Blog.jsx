import React from "react";

const Blog = () => {
  return (
    <div className="  grid grid-col-1">
      <div className="flex justify-center">
        {" "}
        <div className="hero w-4/6 rounded-2xl m-5 shadow-lg bg-base-200">
          <div className="hero-content flex-row ">
            <div>
              <h1 className="text-2xl font-bold">
                Q1:{" "}
                <span className="text-violet-600">
                  What are the different ways to manage a state in a React
                  application?
                </span>
              </h1>
              <p className="py-6 text-xl">
                In React apps, there are at least seven ways to handle the
                state. Let us briefly explore a few of them in this part.
                <br></br># We can use URL to store some data e.g. The id of the
                current item, being viewed Filter parameters Pagination offset
                and limit Sorting data Keeping such data in the URL allows users
                to share deep links with others. It is recommended to avoid
                storing such information in the app’s state to avoid the URL in
                our app getting out of sync. The URL should be used as the
                system of record, Read from it as needed for information related
                to sorting, pagination, etc. Update the URL as required when the
                settings change React Router is a great tool to handle routes
                and manage the params.
                <br></br># The second option is to store the state in the
                browser via web storage. This is useful when we want to persist
                state between reloads and reboots. Examples include cookies,
                local storage, and IndexedDB. These are native browser
                technologies. Data persisted in the browser is tied to a single
                browser. So, if the user loads the site in a different browser,
                the data will not be available. We avoid storing sensitive data
                in the browser since the user may access the app on a shared
                machine. Some examples of where web storage might be most useful
                include storing a user’s shopping cart, saving partially
                completed form data or storing JWT token in HttpOnly Cookie.
                Here is an example of saving user preferences locally in the
                browser or even persist the complete state for one or more of
                our components.
                <br></br># The third option is to use store state locally. It is
                useful when one component needs the state. Examples include a
                toggle button, a form, etc.
                <br></br># The Fourth option is to define the state in the
                parent component. Often, the same state is used across multiple
                components. In those cases, it is useful to lift the state to a
                common parent. The lifting state is a two‑step process. First,
                we declare the state in a common parent component, and then we
                pass the state down to child components via props. This pattern
                should be considered any time a few related components need to
                use the same state. The lifting state avoids duplicating states
                in multiple components. It helps to assure that our components
                all consistently reflect the same state. In the below example,
                we have lifted the state and the handleChange event in the
                parent component, helping to maintain consistency.
                <br></br># The fifth option is to compute the new state based on
                the available state and we do not need to declare a state at
                all. If there are existing values that can be composed to give
                us the information we need, then we can calculate that
                information on each render instead of storing it. Some examples
                include calling .length on an array to determine the number of
                records instead of storing a separate numItems variable in the
                state or deriving an errorsExist boolean by checking if the
                errors array is empty. So, why bother deriving the state? Well,
                deriving the state avoids our state values getting out of sync.
                It simplifies our code since we do not have to remember to keep
                separate values in sync. When we update the state, derived
                values are automatically recalculated in the render. For
                example, we can calculate the items added to the cart and show
                it on the cart icon like this, this.state.cart.items.length and
                pass it as a prop to Badge Component. We do not need to store
                the itemsCount key in a cart state. Each time the cart state
                gets changed, the count on the Badge will be calculated
                automatically.
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {" "}
        <div className="hero shadow-lg w-4/6 rounded-2xl m-5  bg-base-200">
          <div className="hero-content flex-row ">
            <div>
              <h1 className="text-2xl font-bold">
                Q2:{" "}
                <span className="text-violet-600">
                  {" "}
                  How does prototypical inheritance work?
                </span>
              </h1>
              <p className="py-6 text-xl">
                <span className="text-violet-600">Answer: </span>The Prototypal
                Inheritance is a feature in javascript used to add methods and
                properties in objects. It is a method by which an object can
                inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object. getPrototypeOf and Object.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        <div className="hero  shadow-lg w-4/6 rounded-2xl m-5  bg-base-200">
          <div className="hero-content flex-row ">
            <div>
              <h1 className="text-2xl font-bold">
                Q3:{" "}
                <span className="text-violet-600">
                  {" "}
                  What is a unit test? Why should we write unit tests?
                </span>
              </h1>
              <p className="py-6 text-xl">
                <span className="text-violet-600">Answer: </span>The main
                objective of unit testing is to isolate written code to test and
                determine if it works as intended. Unit testing is an important
                step in the development process, because if done correctly, it
                can help detect early flaws in code which may be more difficult
                to find in later testing stages.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {" "}
        <div className="hero shadow-lg w-4/6 rounded-2xl m-5  bg-base-200">
          <div className="hero-content flex-row ">
            <div>
              <h1 className="text-2xl font-bold">
                Q4:{" "}
                <span className="text-violet-600">
                  {" "}
                  React vs. Angular vs. Vue?
                </span>
              </h1>
              <p className="py-6 text-xl">
                <span className="text-violet-600">Answer: </span>Angular is a
                front-end framework with lots of components, services, and
                tools. On Angular’s site, you can see that they define Angular
                as: “The modern web developer’s platform” It is developed and
                maintained by Google developers, but curiously it is not used to
                implement any of their most common products such as Search or
                YouTube. React is considered a UI library. They define
                themselves as: “A JavaScript library for building user
                interfaces” Facebook developers are behind the development and
                maintenance of this library. And, in this case, most of
                Facebook’s products are made with React. Last but not least,
                Vue.js is, according to its site: “A progressive JavaScript
                framework” Vue.js is developed and led by Evan You, but also it
                counts on a huge open-source community. These three frameworks
                have several things in common, such as each follows a
                component-based architecture and allows creating UI features
                quickly. React and Vue.js are mainly declarative, and while
                Angular could also be declarative, it’s really more imperative.
                Nevertheless, they present some more differences according to
                their structure, architecture and way of working, so let’s dive
                into all these characteristics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
