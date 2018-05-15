import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Title,
  Body,
  Button,
  Thumbnail,
  Left
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import images from '../../images';
import { Fonts } from '../../utils/Fonts';
import { Database } from '../../config';
import { AsyncStorage, ListView, ScrollView, View } from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default class ArticlesRead extends Component {
  constructor(props) {
    super(props);

    this.tasksRef = Database.database().ref('/Articles/' + this.props._id);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      titleS: ''
    };
  }

  componentDidMount() {
    this.listenForTasks(this.tasksRef);
  }

  listenForTasks(tasksRef) {
    tasksRef.on('value', dataSnapshot => {
      this.setState({
        titleS: dataSnapshot.val().titleS,
        content: dataSnapshot.val().content
      });
    });
  }

  render() {
    console.log(Fonts);

    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Title>Зурлага</Title>
            </Body>
          </Header>
          <View style={styles.content}>
            <ScrollView horizontal={true}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <ArticleTitle style={styles.text}>
                    {this.state.titleS}
                  </ArticleTitle>
                </View>
                <View>
                  <ArticleContent style={styles.text}>
                    {this.state.content}
                  </ArticleContent>
                </View>
              </View>
            </ScrollView>
          </View>
        </Content>
      </Container>
    );
  }
}
const ArticleTitle = styled.Text`
  background-color: green;
  transform: rotate(90deg);
  font-size: 20;
  height: 300;
  width: 800;
`;
const ArticleContent = styled.Text`
  background-color: red;
  transform: rotate(90deg);
  font-size: 20;
  height: 300;
  width: 800;
`;
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  left: {
    flexDirection: 'row'
  },
  right: {
    flexDirection: 'row'
  },
  text: {
    fontFamily: Fonts.mongol
  }
});
