import type { MDXComponents } from 'mdx/types'
import { View, Text } from "react-native"
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Define custom heading styles
    h1: (props) => <p className=" text-3xl font-bold" {...props} />,
    h2: (props) => <p className="text-2xl font-bold" {...props} />,
    h3: (props) => <p className="text-xl font-medium" {...props} />,
    // Define paragraph styles
    p: (props) => <Text className="text-lg" {...props} />,
    // Define container styles
    wrapper: (props) => <View className="max-w-prose mx-auto py-8" {...props} />,
    // Add more custom components as needed
  }
}