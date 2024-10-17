
# React NavigationTab Component

A simple React component that renders a navigation tab interface with dynamic content based on the selected tab. This component is designed to display three different sections: **Why React?**, **Core Features**, and **Related Resources**, with content switching based on the active tab.

## Features

- **Dynamic Tab Navigation**: Each tab dynamically loads its corresponding content.
- **React Hooks**: Uses `useState` for managing active tab state.
- **Simple UI**: Displays tab content with a list of items for each section.

## Demo

![image](https://github.com/user-attachments/assets/92b1abff-1a6d-4dad-97a7-07152a6e1017)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repo-name.git
   ```

2. Navigate into the project directory:
   ```bash
   cd repo-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```

## Component Breakdown

### `NavigationTab`

This component consists of:

- **Header**: Displays a React logo and a title.
- **Tabs**: Three buttons, each representing a section (Why React?, Core Features, Related Resources).
- **Dynamic Content**: Content updates based on the selected tab.

### Props

This component imports `content` from a constants file and renders its data based on the active tab.

```js
const data = content;
```

### Example Content Data

The content data should be structured as an array of arrays, where each array corresponds to a tab's content.

```js
export const content = [
  ["Reason 1", "Reason 2", "Reason 3"], // Content for "Why React?"
  ["Feature 1", "Feature 2", "Feature 3"], // Content for "Core Features"
  ["Resource 1", "Resource 2", "Resource 3"], // Content for "Related Resources"
];
```

### Component Usage

To use this component in your project, import and render it as follows:

```js
import React from "react";
import NavigationTab from "./components/NavigationTab";

function App() {
  return (
    <div className="App">
      <NavigationTab />
    </div>
  );
}

export default App;
```

## Project Structure

```
|-- public/
|   |-- react-logo-xs.png
|
|-- src/
|   |-- components/
|       |-- NavigationTab.js
|   |-- utils/
|       |-- constats.js
|
|-- README.md
|-- package.json
```

