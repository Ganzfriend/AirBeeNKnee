import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Options from './components/Options';
import Review from './components/Review';
import StarReview from './components/StarReview';
import Title from './components/TitleBar.jsx';

const axios = require('axios');

class Router extends React.Component {

  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/review')
      .then((res) => {
        this.setState({reviews: res.data});
      })
      .catch(err => console.log(err));
  }

  render () {
    const { reviews } = this.state;
    return (
      <HashRouter>
        <Switch>
          <Route path='/listing/:id'>
            <div id="reviews-body">
              <br />
              <hr />
              <Title />
              <br />
              <StarReview />
              <br />
              <Options />
              <br /><br />
              <Review reviews={reviews} />
            </div>
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;