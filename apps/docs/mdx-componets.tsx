import type { MDXComponents } from 'mdx/types'
import { View, Text } from "react-native"
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Define custom heading styles
    h1: (props) => <Text className="text-red-400 text-2xl font-bold mb-4" {...props} />,
    h2: (props) => <Text className="text-3xl text-red-400 font-bold mb-3" {...props} />,
    h3: (props) => <Text className="text-2xl text-red-400 font-bold mb-2" {...props} />,
    // Define paragraph styles
    p: (props) => <Text className="mb-4 text-base text-red-400" {...props} />,
    // Define container styles
    wrapper: (props) => <View className="max-w-prose mx-auto py-8" {...props} />,
    // Add more custom components as needed
  }
}