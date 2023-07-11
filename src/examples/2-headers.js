import { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {Accept: "application/json"}
      })
      console.log(response)
      setJoke(response.data.joke)
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <section className="section text-center">
      <button className="btn" onClick={() => fetchData()}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;
