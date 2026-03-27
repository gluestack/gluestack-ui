import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from '@/components/ui/chat-ai';
import { Button,ButtonText } from '@/components/ui/button';
import { Check } from 'lucide-react-native';
import { memo, useCallback, useState } from 'react';
import { View } from 'react-native';

const models = [
  {
    chef: 'OpenAI',
    chefSlug: 'openai',
    id: 'gpt-4o',
    name: 'GPT-4o',
    providers: ['openai', 'azure'],
  },
  {
    chef: 'OpenAI',
    chefSlug: 'openai',
    id: 'gpt-4o-mini',
    name: 'GPT-4o Mini',
    providers: ['openai', 'azure'],
  },
  {
    chef: 'OpenAI',
    chefSlug: 'openai',
    id: 'o1',
    name: 'o1',
    providers: ['openai', 'azure'],
  },
  {
    chef: 'OpenAI',
    chefSlug: 'openai',
    id: 'o1-mini',
    name: 'o1 Mini',
    providers: ['openai', 'azure'],
  },
  {
    chef: 'Anthropic',
    chefSlug: 'anthropic',
    id: 'claude-opus-4-20250514',
    name: 'Claude 4 Opus',
    providers: ['anthropic', 'azure', 'google-vertex', 'amazon-bedrock'],
  },
  {
    chef: 'Anthropic',
    chefSlug: 'anthropic',
    id: 'claude-sonnet-4-20250514',
    name: 'Claude 4 Sonnet',
    providers: ['anthropic', 'azure', 'google-vertex', 'amazon-bedrock'],
  },
  {
    chef: 'Anthropic',
    chefSlug: 'anthropic',
    id: 'claude-3.5-sonnet',
    name: 'Claude 3.5 Sonnet',
    providers: ['anthropic', 'azure', 'google-vertex', 'amazon-bedrock'],
  },
  {
    chef: 'Anthropic',
    chefSlug: 'anthropic',
    id: 'claude-3.5-haiku',
    name: 'Claude 3.5 Haiku',
    providers: ['anthropic', 'azure', 'google-vertex', 'amazon-bedrock'],
  },
  {
    chef: 'Google',
    chefSlug: 'google',
    id: 'gemini-2.0-flash-exp',
    name: 'Gemini 2.0 Flash',
    providers: ['google', 'google-vertex'],
  },
  {
    chef: 'Google',
    chefSlug: 'google',
    id: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    providers: ['google', 'google-vertex'],
  },
  {
    chef: 'Google',
    chefSlug: 'google',
    id: 'gemini-1.5-flash',
    name: 'Gemini 1.5 Flash',
    providers: ['google', 'google-vertex'],
  },
  {
    chef: 'Meta',
    chefSlug: 'llama',
    id: 'llama-3.3-70b',
    name: 'Llama 3.3 70B',
    providers: ['groq', 'togetherai', 'amazon-bedrock'],
  },
  {
    chef: 'Meta',
    chefSlug: 'llama',
    id: 'llama-3.1-405b',
    name: 'Llama 3.1 405B',
    providers: ['togetherai', 'amazon-bedrock'],
  },
  {
    chef: 'Meta',
    chefSlug: 'llama',
    id: 'llama-3.1-70b',
    name: 'Llama 3.1 70B',
    providers: ['groq', 'togetherai', 'amazon-bedrock'],
  },
  {
    chef: 'Meta',
    chefSlug: 'llama',
    id: 'llama-3.1-8b',
    name: 'Llama 3.1 8B',
    providers: ['groq', 'togetherai'],
  },
  {
    chef: 'DeepSeek',
    chefSlug: 'deepseek',
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    providers: ['deepseek', 'openrouter'],
  },
  {
    chef: 'DeepSeek',
    chefSlug: 'deepseek',
    id: 'deepseek-v3',
    name: 'DeepSeek V3',
    providers: ['deepseek', 'openrouter'],
  },
  {
    chef: 'DeepSeek',
    chefSlug: 'deepseek',
    id: 'deepseek-coder-v2',
    name: 'DeepSeek Coder V2',
    providers: ['deepseek', 'openrouter'],
  },
  {
    chef: 'Mistral AI',
    chefSlug: 'mistral',
    id: 'mistral-large',
    name: 'Mistral Large',
    providers: ['mistral', 'azure'],
  },
  {
    chef: 'Mistral AI',
    chefSlug: 'mistral',
    id: 'mistral-small',
    name: 'Mistral Small',
    providers: ['mistral', 'azure'],
  },
  {
    chef: 'Mistral AI',
    chefSlug: 'mistral',
    id: 'codestral',
    name: 'Codestral',
    providers: ['mistral'],
  },
  {
    chef: 'Alibaba',
    chefSlug: 'alibaba',
    id: 'qwen-2.5-72b',
    name: 'Qwen 2.5 72B',
    providers: ['alibaba', 'openrouter'],
  },
  {
    chef: 'Alibaba',
    chefSlug: 'alibaba',
    id: 'qwen-2.5-coder-32b',
    name: 'Qwen 2.5 Coder 32B',
    providers: ['alibaba', 'openrouter'],
  },
  {
    chef: 'Alibaba',
    chefSlug: 'alibaba',
    id: 'qwen-max',
    name: 'Qwen Max',
    providers: ['alibaba'],
  },
  {
    chef: 'Cohere',
    chefSlug: 'cohere',
    id: 'command-r-plus',
    name: 'Command R+',
    providers: ['cohere', 'azure', 'amazon-bedrock'],
  },
  {
    chef: 'Cohere',
    chefSlug: 'cohere',
    id: 'command-r',
    name: 'Command R',
    providers: ['cohere', 'azure', 'amazon-bedrock'],
  },
  {
    chef: 'xAI',
    chefSlug: 'xai',
    id: 'grok-3',
    name: 'Grok 3',
    providers: ['xai'],
  },
  {
    chef: 'xAI',
    chefSlug: 'xai',
    id: 'grok-2-1212',
    name: 'Grok 2 1212',
    providers: ['xai'],
  },
  {
    chef: 'xAI',
    chefSlug: 'xai',
    id: 'grok-vision',
    name: 'Grok Vision',
    providers: ['xai'],
  },
  {
    chef: 'Moonshot AI',
    chefSlug: 'moonshotai',
    id: 'moonshot-v1-128k',
    name: 'Moonshot v1 128K',
    providers: ['moonshotai'],
  },
  {
    chef: 'Moonshot AI',
    chefSlug: 'moonshotai',
    id: 'moonshot-v1-32k',
    name: 'Moonshot v1 32K',
    providers: ['moonshotai'],
  },
  {
    chef: 'Perplexity',
    chefSlug: 'perplexity',
    id: 'sonar-pro',
    name: 'Sonar Pro',
    providers: ['perplexity'],
  },
  {
    chef: 'Perplexity',
    chefSlug: 'perplexity',
    id: 'sonar',
    name: 'Sonar',
    providers: ['perplexity'],
  },
  {
    chef: 'Vercel',
    chefSlug: 'v0',
    id: 'v0-chat',
    name: 'v0 Chat',
    providers: ['vercel'],
  },
  {
    chef: 'Amazon',
    chefSlug: 'amazon-bedrock',
    id: 'nova-pro',
    name: 'Nova Pro',
    providers: ['amazon-bedrock'],
  },
  {
    chef: 'Amazon',
    chefSlug: 'amazon-bedrock',
    id: 'nova-lite',
    name: 'Nova Lite',
    providers: ['amazon-bedrock'],
  },
  {
    chef: 'Amazon',
    chefSlug: 'amazon-bedrock',
    id: 'nova-micro',
    name: 'Nova Micro',
    providers: ['amazon-bedrock'],
  },
];

interface ModelItemProps {
  model: (typeof models)[0];
  selectedModel: string;
  onSelect: (id: string) => void;
}

const ModelItem = memo(({ model, selectedModel, onSelect }: ModelItemProps) => {
  const handleSelect = useCallback(
    () => onSelect(model.id),
    [onSelect, model.id]
  );
  return (
    <ModelSelectorItem key={model.id} onSelect={handleSelect} value={model.id}>
      <ModelSelectorLogo provider={model.chefSlug} />
      <ModelSelectorName>{model.name}</ModelSelectorName>
      <ModelSelectorLogoGroup>
        {model.providers.map((provider) => (
          <ModelSelectorLogo key={provider} provider={provider} />
        ))}
      </ModelSelectorLogoGroup>
      {selectedModel === model.id ? (
        <Check className="ml-auto size-4" />
      ) : (
        <View className="ml-auto size-4" />
      )}
    </ModelSelectorItem>
  );
});

ModelItem.displayName = 'ModelItem';

const Example = () => {
  const [open, setOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>('gpt-4o');

  const handleModelSelect = useCallback((id: string) => {
    setSelectedModel(id);
    setOpen(false);
  }, []);

  const selectedModelData = models.find((model) => model.id === selectedModel);

  // Get unique chefs in order of appearance
  const chefs = [...new Set(models.map((model) => model.chef))];

  return (
    <View className="flex size-full items-center justify-center py-safe bg-red-400 p-8">
      <ModelSelector onOpenChange={setOpen} open={open}>
        <ModelSelectorTrigger onPress={() => setOpen(true)} >
       <View className="w-[240px] h-12 bg-white rounded-xl flex-row items-center px-4 border border-gray-300">
            {selectedModelData && (
              <>
                <ModelSelectorLogo provider={selectedModelData.chefSlug} />
                <ModelSelectorName className="ml-3">
                  {selectedModelData.name}
                </ModelSelectorName>
              </>
            )}
          </View>
        </ModelSelectorTrigger>
        <ModelSelectorContent>
          <ModelSelectorInput placeholder="Search models..." />
          <ModelSelectorList>
            <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
            {chefs.map((chef) => (
              <ModelSelectorGroup heading={chef} key={chef}>
                {models
                  .filter((model) => model.chef === chef)
                  .map((model) => (
                    <ModelItem
                      key={model.id}
                      model={model}
                      onSelect={handleModelSelect}
                      selectedModel={selectedModel}
                    />
                  ))}
              </ModelSelectorGroup>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </View>
  );
};

export default Example;
