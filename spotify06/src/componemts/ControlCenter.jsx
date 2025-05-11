import { Pressable, StyleSheet, Text, View } from "react-native";
import TrackPlayer, {
  State,
  usePlaybackState,
} from "react-native-track-player";

import { playbackService } from "../../musicPlayerServices";
import Icon from "react-native-vector-icons/MaterialIcons";

const ControlCenter = () => {
  const playBackState = usePlaybackState();

  //Next Button
  const playNext = async () => {
    await TrackPlayer.skipToNext();
  };

  //Previous Button
  const playPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  //Play Button
  const togglePlayBack = async (playBack) => {
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack !== null) {
      if (playBack === State.Paused || playBack === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={playPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable
        onPress={() => togglePlayBack(playBackState)}
        style={styles.playButton}
      >
        <Icon
          style={styles.icon}
          name={playBackState === State.Playing ? "pause" : "play-arrow"}
          size={75}
        />
      </Pressable>
      <Pressable onPress={playNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

export default ControlCenter;

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "#FFFFFF",
  },
  playButton: {
    marginHorizontal: 24,
  },
});
