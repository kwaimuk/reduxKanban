import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../../components/CardList';
import NewCardForm from '../NewCardForm';
import { addCardToFakeXHR, getCardsFromFakeXHR } from '../../lib/cards.db';
import { loadCards, addCard, editCard } from '../../actions';


import logo from './logo.svg';
import './styles.css';

class App extends Component {
  constructor(props){
    // give props to your parents
    super(props);
    // do your shit after parent is done doing their shit

    this.title = 'Kanban List App';

  }

  // life cycle hook
  // before rendering this component
  componentWillMount(){
    getCardsFromFakeXHR()
      .then( cards => {
        this.props.loadCards( cards );
        // this.setState({ books });
      });
  }

  addCard = ( card ) => {
    // addBookToFakeXHR( book )
    //   .then( books => {
    //     this.setState({ books });
    //   });
    this.props.addCard( card );
  }

  editCard = (card) => {
    this.props.editCard( card );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Kanban</h2>
                    <div>
                    <NewCardForm addCard={this.addCard} editCard={this.editCard} />
                    </div>

            <div id="board">
                    <div className="queue">
                    <h2>Queue</h2>
                      <CardList  cards={this.props.cards.filter((card) => card.status === 'Queue' )}/>
                    </div>

                    <div className="progress">
                    <h2>Progress</h2>
                      <CardList  cards={this.props.cards.filter((card) => card.status === 'In Progress' )}/>
                    </div>

                    <div className="done">
                    <h2>Done</h2>
                      <CardList  cards={this.props.cards.filter((card) => card.status === 'Done' )}/>
                    </div>

            </div>
          </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards))
    },
    addCard: card => {
      dispatch(addCard(card))
    },
    editCard: card => {
      dispatch(editCard(card))
    }

  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;