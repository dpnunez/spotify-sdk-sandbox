import React, { useCallback, useEffect, useState } from "react";

import { useUser } from "../context/user-context";

import { getToken } from "../helpers";
import { useScript } from "../hooks";
import { fetchClient } from "../services/fetchClient";

const Dashboard = () => {
  const script = useScript("https://sdk.scdn.co/spotify-player.js");

  const sdkReadyCallback = useCallback(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = getToken();
      const player = new window.Spotify.Player({
        name: "Web Playback SDK Quick Start Player",
        getOAuthToken: cb => {
          cb(token);
        }
      });

      // Error handling
      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("playback_error", ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      player.addListener("player_state_changed", state => {
        console.log(state);
      });

      // Ready
      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        // const play = ({
        //   spotify_uri,
        //   playerInstance: {
        //     _options: { getOAuthToken, id }
        //   }
        // }) => {
        //   getOAuthToken(access_token => {
        //     fetch(
        //       `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        //       {
        //         method: "PUT",
        //         body: JSON.stringify({ uris: [spotify_uri] }),
        //         headers: {
        //           "Content-Type": "application/json",
        //           Authorization: `Bearer ${access_token}`
        //         }
        //       }
        //     );
        //   });
        // };
        // play({
        //   playerInstance: player,
        //   spotify_uri: "spotify:track:7xGfFoTpQ2E7fRF5lN10tr"
        // });
      });

      // Not Ready
      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      // Connect to the player!
      player.connect();
    };
  }, []);

  useEffect(() => {
    sdkReadyCallback();

    // const getRecently  = async () => {
    //   try {

    //   }
    // }
  }, []);

  return (
    <div>
      asd
      <button
        onClick={async () => {
          await fetchClient.put("me/player/pause");
        }}
      >
        puase
      </button>
      <button
        onClick={async () => {
          await fetchClient.put("me/player/play");
        }}
      >
        play
      </button>
    </div>
  );
};

export default Dashboard;
