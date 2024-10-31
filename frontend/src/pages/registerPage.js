import React, { useState } from "react";
import { useAuth } from "../contexts/authContext.js";
import { Container, Form, Button } from "react-bootstrap";

const RegisterPage = () => {
  const { register } = useAuth();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
  };

  return (
    <Container className="text-light bg-dark p-5" style={{ maxWidth: "400px" }}>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
