import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={12}>
            <header>
              <nav>
                <Link to='/'>Landing</Link>
                <Link to='/library'>Library</Link>
              </nav>
              <h1>Bloc Jams</h1>
            </header>
          </Col>
          <Col md={12}>
            <main>
              <Route exact path="/" component={Landing} />
              <Route path="/library" component={Library} />
              <Route path="/album/:slug" component={Album} />
            </main>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
