import React from 'react';
import './App.scss';
import { MainPage } from './components/Pages/MainPage';

function App() {
  const [docInfo, setData] = React.useState([]);
  const [tasksTree, setTasksTree] = React.useState([]);

  React.useEffect(() => {
    const data = require("./api/response.json");
    setData(data.data.documentInfo);
    setTasksTree(data.data.tasksTreeItems);
  }, [docInfo, tasksTree]);

  return (
    <div className="App">
      <MainPage docInfo={docInfo} tasksTree={tasksTree} />
    </div>
  );
}

export default App;
