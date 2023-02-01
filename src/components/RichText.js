import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import HTMLView from 'react-native-htmlview';
const RichText = () => {
  function editorInitializedCallback() {
    RichText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        'Toolbar click, selected items (insert end callback):',
        items,
      );
    });
  }

  const richText = React.useRef();
  function handleHeightChange(height) {
    console.log('editor height change:', height);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <RichEditor
          disabled={false}
          containerStyle={styles.editor}
          initialHeight={400}
          style={styles.rich}
          ref={richText}
          placeholder={'Start Writing Here'}
          onChange={text => console.log('text:' + text)}
          editorInitializedCallback={editorInitializedCallback}
          // onHeightChange={handleHeightChange}
        />
      </ScrollView>
      <RichToolbar
        editor={richText}
        style={{
          borderRadius: 10,
        }}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.heading1,
        ]}
        iconMap={{
          [actions.heading1]: ({tintColor}) => (
            <Text style={[{color: tintColor}]}>H1</Text>
          ),
        }}
      />
    </View>
  );
};

export default RichText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#F5FCFF',
    marginBottom: 5,
  },
});
