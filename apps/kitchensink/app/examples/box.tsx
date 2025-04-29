import React from 'react';
    import { View } from 'react-native';
    import CodePreviewer from '../CodePreviewer';
    import Box from '../../components/Box';
import Card from '../../components/Card';

    export default function Example() {
    return (
      <View>
        
  <CodePreviewer props={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "primary",
      "secondary",
      "outline"
    ],
    "defaultValue": "primary"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "small",
      "medium",
      "large"
    ],
    "defaultValue": "medium"
  }
}}>
  {props => <View>
    <Box variant={props.variant} size={props.size}/>
    <Card variant={props.variant} size={props.size}/>
    <Card variant={props.variant} size={props.size}/>
</View>}
  </CodePreviewer>


  <CodePreviewer props={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "primary",
      "secondary",
      "outline"
    ],
    "defaultValue": "primary"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "small",
      "medium",
      "large"
    ],
    "defaultValue": "medium"
  }
}}>
  {props => <View>
    <Box variant={props.variant} size={props.size}/>
    <Card/>
</View>}
  </CodePreviewer>

      </View>
    );
  }