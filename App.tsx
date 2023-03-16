import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Paragraph, TamaguiProvider, Theme, YStack } from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
      <TamaguiProvider config={config}>
        <Theme name='dark'>
          <YStack
              f={1}
              jc='center'
              ai="center"
              backgroundColor={"#002429"}
          >
            <Paragraph color='$color' jc="center">
              Expo App with Tamagui!
            </Paragraph>
            <StatusBar style="auto" />
          </YStack>
        </Theme>
      </TamaguiProvider>
  );
}
