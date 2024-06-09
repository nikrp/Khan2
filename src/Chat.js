import React, { useState } from 'react';
import axios from 'axios';

const OpenAIChat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const apiKey = 'sk-proj-VxTjoODiLx4pBVmoof7AT3BlbkFJYxF1Surom3z6XgYGbLfB'; // Replace with your actual API key

  const generateResponse = async () => {
    if (!input.trim()) {
      setError('Please enter a prompt');
      return;
    }

    try {
      const result = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'gpt-3.5-turbo-instruct', // Ensure you're using a valid model
          prompt: input,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      console.log(result); // Log the full response

      if (result.data && result.data.choices && result.data.choices.length > 0) {
        setResponse(result.data.choices[0].text.trim());
        setError('');
      } else {
        setResponse('No response from API');
        setError('');
      }
    } catch (error) {
      console.error('Error generating response:', error.response ? error.response.data : error.message);
      setError(`Error generating response: ${error.response ? error.response.data.error.message : error.message}`);
    }
  };

  return (
    <div>
      <h1>OpenAI Chat</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button onClick={generateResponse}>Generate Response</button>
      {error && <div>Error: {error}</div>}
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default OpenAIChat;
