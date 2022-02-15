import Accordian from './component/Accordian';
import { jsonData } from './component/Accordian/mock';
function App() {
  return (
    <div style={{ display: 'flex', height: "100%", width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: 10 }}>
      {jsonData.map(({key, title, content}) => {
        return <Accordian key={key} title={title} content={content} />;
      })}
    </div>
  );
}

export default App;
