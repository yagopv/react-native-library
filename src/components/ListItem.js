import React from 'react'
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, StyleSheet } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ListItem extends React.Component {  
  componentWillUpdate() {
    LayoutAnimation.spring();
  }  
 
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return ( 
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }
 
  render() {
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>          
          {this.renderDescription()}          
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => ({
  expanded: state.selectedLibraryId === ownProps.library.id
});

export default connect(mapStateToProps, actions)(ListItem);
