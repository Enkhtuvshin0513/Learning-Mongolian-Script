import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Body,
  Title,
  Thumbnail,
  View,
  Card,
  CardItem,
  Left
} from 'native-base';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import images from '../../images';
import Zurlag from '../../letters/zurlag';
import Modal from 'react-native-modal';

class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      item: {}
    };
  }
  disbale(index) {
    if (index === 1) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const items = this.props.questions;

    return (
      <Container>
        <Header>
          <Body>
            <Title>Дасгал</Title>
          </Body>
        </Header>

        <Content>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => Actions.answer1({})}
          >
            <Text>᠌АСУУЛТ 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text>᠌АСУУЛТ 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text>᠌АСУУЛТ 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text>᠌АСУУЛТ 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text>᠌АСУУЛТ 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text>᠌АСУУЛТ 6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text>᠌АСУУЛТ 7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text>᠌АСУУЛТ 8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text>᠌АСУУЛТ 9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text>᠌АСУУЛТ 10</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  ModalButton: {
    alignSelf: 'center',
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    justifyContent: 'center'
  },
  Button: {
    height: 100,
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingTop: 30
  },
  Content: {
    paddingBottom: 20,
    alignSelf: 'center'
  },
  Thumbnail: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 80
  },
  View: {
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 20,
    width: 300,
    marginTop: 80,
    marginBottom: 100,
    height: 80,
    backgroundColor: '#FFFFFF'
  }
});

export default Exercises;
