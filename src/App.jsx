import React from 'react';
import TabComponent from './TabComponent';

import tabs from './tabs';

function App() {
  return (
    <div className="App">
      <TabComponent tabs={tabs} />
    </div>
  );
}

export default App;
