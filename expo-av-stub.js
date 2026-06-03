/**
 * expo-av STUB (SDK 56). expo-av is removed in SDK 56 (its native EXEventEmitter API is gone),
 * so it's excluded from autolinking. @expocraft/core imports { Audio, Video } from 'expo-av' eagerly
 * at startup (notification sounds), which would throw "Cannot find native module 'ExponentAV'" and
 * block boot. This stub provides the used API surface as safe no-ops so the app boots; audio playback
 * and the <Video> component are inert until the proper expo-audio/expo-video migration lands.
 * Aliased in via metro.config.js resolveRequest. Contained to the SDK-56 copy (no @expocraft/core edits).
 */
const React = require('react');

const noopAsync = async () => {};
const makeSound = () => ({
  playAsync: noopAsync,
  replayAsync: noopAsync,
  pauseAsync: noopAsync,
  stopAsync: noopAsync,
  unloadAsync: noopAsync,
  setPositionAsync: noopAsync,
  setVolumeAsync: noopAsync,
  setRateAsync: noopAsync,
  setIsLoopingAsync: noopAsync,
  setOnPlaybackStatusUpdate: () => {},
  getStatusAsync: async () => ({ isLoaded: false }),
});

const Sound = {
  create: async () => ({ sound: makeSound(), status: { isLoaded: false } }),
  createAsync: async () => ({ sound: makeSound(), status: { isLoaded: false } }),
};
function SoundCtor() { return makeSound(); }
SoundCtor.create = Sound.create;
SoundCtor.createAsync = Sound.createAsync;

const Audio = {
  Sound: SoundCtor,
  setAudioModeAsync: noopAsync,
  setIsEnabledAsync: noopAsync,
  requestPermissionsAsync: async () => ({ status: 'denied', granted: false, canAskAgain: true, expires: 'never' }),
  getPermissionsAsync: async () => ({ status: 'denied', granted: false, canAskAgain: true, expires: 'never' }),
  usePermissions: () => [{ status: 'denied', granted: false }, async () => ({ granted: false }), async () => ({ granted: false })],
  Recording: function Recording() { return makeSound(); },
};

// <Video> — render nothing; expose imperative methods so refs don't crash.
const Video = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    playAsync: noopAsync, pauseAsync: noopAsync, stopAsync: noopAsync, unloadAsync: noopAsync,
    replayAsync: noopAsync, setPositionAsync: noopAsync, setStatusAsync: noopAsync,
    presentFullscreenPlayer: noopAsync, dismissFullscreenPlayer: noopAsync,
    getStatusAsync: async () => ({ isLoaded: false }),
  }));
  return null;
});
Video.displayName = 'ExpoAVVideoStub';

const ResizeMode = { CONTAIN: 'contain', COVER: 'cover', STRETCH: 'stretch' };
const InterruptionModeIOS = { MixWithOthers: 0, DoNotMix: 1, DuckOthers: 2 };
const InterruptionModeAndroid = { DoNotMix: 1, DuckOthers: 2 };
const AVPlaybackStatus = {};

module.exports = { Audio, Video, ResizeMode, InterruptionModeIOS, InterruptionModeAndroid, AVPlaybackStatus };
module.exports.default = module.exports;
