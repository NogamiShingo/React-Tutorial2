import { useState } from 'react';
import { List } from './List';

function App() {
  const [description, setDescription] = useState('クリック前の表示');

  const changeDescription = () => {
    setDescription('クリック後の表示');
  }

  return (
    <div>
      {description}
      <List title={'取り扱い言語一覧'}></List>
      <button onClick={changeDescription}>ボタン</button>
    </div>
  );
}

export default App;
