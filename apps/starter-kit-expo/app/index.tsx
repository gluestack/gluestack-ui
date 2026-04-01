import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

const markdownText = `
# Hello 👋

This is **bold text**  
This is *italic text*

## Code Example:

\`\`\`js
function greet() {
  console.log("Hello from AI this is js codee
  ");
}
greet();
\`\`\`

- Item 1
- Item 2
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 pt-safe">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Markdown>{markdownText}</Markdown>
        </ScrollView>
      </View>
    </>
  );
};

export default App;
