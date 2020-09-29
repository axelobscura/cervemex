import Layout from '../components/Layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col>
          <h1>
            Bienvenido a <a href="">CERVEMEX!</a>
          </h1>
        </Col>
      </Row>
    </Layout>
  )
}
