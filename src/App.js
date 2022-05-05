import { useState, useEffect } from 'react';
import mergeImages from 'merge-images';

import './App.css';

function App() {
  const [id, setId] = useState(943);
  
  useEffect(() => {
    mergeImages([
      { src: './crocs-frame.png', height: 981, width: 981 },
      { src: `./${id}-600.webp`, x: 188, y: 212, height: 604, width: 604 },
    ], { width: 981, height: 981 })
    .then((b64) => {
      document.querySelector('img.frame').src = b64;
    });
  }, [id]);

  return (
    <div className="App">
      <main>
        <h1>
          Crecodile Photo Frame Generator
        </h1>
        
        <div>
          <label>Croc ID:
            <input type="number" name="crecrodile-id" value={id} onChange={(event) => setId(parseInt(event.target.value, 10))} />
          </label>
        </div>

        <img alt='crecodile-frame' class='frame' src=''></img>
      </main>
    </div>
  );
}

export default App;

