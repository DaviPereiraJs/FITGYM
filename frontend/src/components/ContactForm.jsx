import { Container, Form, Button, Alert } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000'

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(API + '/api/contact', form)
      setStatus({ type: 'success', text: 'Mensagem enviada com sucesso!' })
      setForm({name:'', email:'', message:''})
    } catch (err) {
      setStatus({ type: 'danger', text: err?.response?.data?.error || 'Erro ao enviar.' })
    }
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Entre em Contato</h2>
      {status && <Alert variant={status.type}>{status.text}</Alert>}
      <Form onSubmit={submit} style={{maxWidth:600, margin:'0 auto'}}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={4} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})}/>
        </Form.Group>
        <div className="text-center">
          <Button type="submit">Enviar</Button>
        </div>
      </Form>
    </Container>
  )
}
