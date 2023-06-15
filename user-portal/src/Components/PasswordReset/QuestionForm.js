import React, { useState } from 'react';

const QuestionForm = () => {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [isAnswerInvalid, setIsAnswerInvalid] = useState(false);

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
     try {
      const response = await fetch(`http://localhost:8081/user/securityQuestion/${email}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
       
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuestion(data.securityQuestion);
    } catch (error) {
        setQuestion("what is the capital of the US")
     console.log(error.message)
    }
  };

    const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/user/securityQuestion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ securityAnswer:answer, email:email }),
      });

      if (!response.ok) {
        throw new Error('Incorrect answer');
      }

      setQuestion(null);
      setAnswer('');
      setIsAnswerInvalid(false);
    } catch (error) {
      setIsAnswerInvalid(true);
      console.log(error.message);
    }
  };
  return (
   <>
    {!question ? (
      <form className="needs-validation" noValidate onSubmit={handleSubmitEmail}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    ) : (
      <form className={`needs-validation ${isAnswerInvalid ? '' : 'was-validated'}`} noValidate onSubmit={handleSubmitAnswer}>
        <p className="mb-3">{question}</p>
        <div className="mb-3">
          <label htmlFor="answer" className="form-label">Answer:</label>
          <input
            type="text"
            className={`form-control ${isAnswerInvalid ? 'is-invalid' : ''}`}
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          {isAnswerInvalid && <div className="invalid-feedback">Wrong answer, please try again</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )}
  </>
  );
};

export default QuestionForm;