import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container />
    </main>
  );
}

const FeatureCard = ({ iconSvg, name, desc }: any) => {
  return (
    <Box className="flex-column border border-w-1 border-outline-700 flex-1 m-2 p-4 rounded">
      <Box className="items-center flex flex-row">
        <Image
          src={`/${iconSvg}`}
          alt="document"
          priority
          width={22}
          height={22}
        />
        <Text className="text-typography-white font-medium ml-2 text-xl">
          {name}
        </Text>
      </Box>
      <Text className="text-typography-400 mt-2">{desc}</Text>
    </Box>
  );
};

const Container = () => {
  return (
    <Box className="flex-1 bg-black h-[100vh]">
      <Box className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]">
        <Image src="/gradient.svg" alt="Gradient" fill priority />
      </Box>
      <Box className="flex flex-1 items-center my-16 mx-5 lg:my-24 lg:mx-32">
        <Box className="py-2 px-6 rounded-full items-center flex-column sm:flex-row md:self-start">
          <Text className="text-typography-white font-normal">
            Get started by editing
          </Text>
          <Text className="text-typography-white font-medium ml-2">
            <code>./app/page.tsx</code>
          </Text>
        </Box>
        <Box className="flex-1 justify-center items-center h-[20px] w-[300px] lg:h-[160px] lg:w-[400px]">
          <Image src="/logo.svg" fill alt="logo" priority />
        </Box>

        <Box className="flex-column md:flex-row">
          <FeatureCard
            iconSvg="document-data.svg"
            name="Docs"
            desc="Find in-depth information about gluestack features and API."
          />
          <FeatureCard
            iconSvg="lightbulb-person.svg"
            name="Learn"
            desc="Learn about gluestack in an interactive course with quizzes!"
          />
          <FeatureCard
            iconSvg="rocket.svg"
            name="Deploy"
            desc="Instantly drop your gluestack site to a shareable URL with vercel."
          />
        </Box>
      </Box>
    </Box>
  );
};
