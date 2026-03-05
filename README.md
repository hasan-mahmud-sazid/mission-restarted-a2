**1. JSX**
**JSX (JavaScript XML)** is a syntax that lets you write **HTML-like code inside JavaScript** in React components. It makes UI easier to understand and later **compiles into JavaScript** to create the Virtual DOM.

**2. State vs Props**

- **Props:** Data passed from **parent to child component** and it is **read-only**.
- **State:** **Internal data of a component** that can change and causes **re-rendering**.

**3. useState Hook**
**useState** is a React Hook that allows functional components to **store and update state**. It returns the **current state value and an update function**.

**4. Sharing State Between Components**
State is shared using **Lifting State Up**, meaning the state is moved to a **common parent component** and passed to children using **props**.

**5. Event Handling in React**
React events use **camelCase** such as **onClick** and you pass a **function reference**, e.g., `onClick={handleClick}`.
