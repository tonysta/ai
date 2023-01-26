import './App.css'
import { Configuration, OpenAIApi } from "openai";

function App() {

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: "man with baby go to home in pixel style",
      n: 1,
      size: "1024x1024",
    });

    console.log(res.data.data[0].url);
  }

  return (
    <div>
      <div className="App">
        johnny ai
      </div>
      <button onClick={generateImage}>generateImg</button>
    </div>
    
    
  )
}

export default App
