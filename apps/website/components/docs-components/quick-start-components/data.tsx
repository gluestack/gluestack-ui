import React from "react";
import {
  DiscordIcon,
  GithubIcon,
  StackoverflowIcon,
  TwitterIcon,
} from "./icons";

export const communities = [
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    link: "https://twitter.com/gluestack",
    description: "For announcements, blog posts, and general Stitches tips.",
  },
  {
    name: "GitHub",
    icon: <GithubIcon />,
    link: "https://github.com/gluestack/gluestack-ui",
    description:
      "To file issues, request features, and contribute, check out our GitHub.",
  },
  {
    name: "Discord",
    icon: <DiscordIcon />,
    link: "https://discord.gg/95qQ84nf6f",
    description:
      "To get involved in the community, ask questions, and share tips.",
  },
  {
    name: "Stackoverflow",
    icon: <StackoverflowIcon />,
    link: "https://stackoverflow.com/questions/tagged/gluestack",
    description:
      "Receive firsthand assistance from our community of developers.",
  },
];
