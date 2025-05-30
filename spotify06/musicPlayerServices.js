import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";

import { playListData } from "./src/constants";

export const setupPlayer = async () => {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
};

export const addTrack = async () => {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const playbackService = () => {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
};
