import React, { Component } from 'react'
import { View } from 'react-native';

import { connect } from 'react-redux'

class LibraryList extends Component {
  componentWillMount = () => {
    console.log(this.props);
  }
  
  render() {
    return (
      <View>

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  libraries: state.libraries
})

export default connect(mapStateToProps, null)(LibraryList);
