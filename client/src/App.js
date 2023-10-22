import './App.css';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [minified,setMinified] = useState(false)
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Minify!</h1>
        <Form noValidate validated={validated}className='bg-secondary px-5 py-3 rounded'>
          <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Text className="text-muted fs-6">
                A simple Saas solution to generate a shorten URL. Plug in the link below and press submit to generate minified link.
              </Form.Text>
              <InputGroup hasValidation>

                <Form.Control required size="sm" type="text" placeholder="Enter link to minify..." />
                <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
            
              </InputGroup>
          </Form.Group>

          <Button className="mb-4" variant="primary" size="sm" type="submit" onSubmit={handleSubmit}>
            Submit
          </Button>


          {minified ? <Form.Group className="" controlId="formBasicEmail">
            <Form.Control  size="sm" type="text" placeholder="Your minified link will go here..." />
          </Form.Group> : null}
          
        </Form>
        
      </header>
    </div>
  );
}

export default App;
