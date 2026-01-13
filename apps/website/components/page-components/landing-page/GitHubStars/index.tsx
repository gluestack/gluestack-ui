'use client';
import React from 'react';
import { Text } from '@/components/ui/text';

async function fetchGitHubStars() {
  const owner = 'gluestack';
  const repo = 'gluestack-ui';
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return 0;
    }
    const data = await response.json();
    const stars = data.stargazers_count;
    return stars;
  } catch (error) {
    return 0;
  }
}
const GitHubStars = async () => {
  const githubStars = await fetchGitHubStars();
  return (
    <Text
      className={
        `text-md text-foreground font-medium` + githubStars
          ? ''
          : 'animate-spin'
      }
    >
      {githubStars}
    </Text>
  );
};

export default GitHubStars;
