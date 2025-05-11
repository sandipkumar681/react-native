import { JSX, useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { setupPlayer, addTrack } from "../musicPlayerServices";

const App = (): JSX.Element => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const setupForMusic = async () => {
    const setup = await setupPlayer();
    if (setup) {
      await addTrack();
    }

    setIsPlayerReady(setup);
  };

  useEffect(() => {
    setupForMusic();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
