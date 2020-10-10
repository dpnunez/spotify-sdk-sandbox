import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchClient } from "../services/fetchClient";

const PlayerStateContext = React.createContext();
const PlayerDispatchContext = React.createContext();

const initial_State = {
  device_id: null,
  tracks: [],
  current_track: null,
  current_playlist: null,
  ads: [],
  ads_range: 1
};

function playerReducer(state, action) {
  switch (action.type) {
    case "SET_DEVICE": {
      return { ...state, device_id: action.value };
    }
    case "SET_PLAYLIST": {
      return { ...state, current_playlist: action.value };
    }
    case "SET_TRACKS": {
      return { ...state, tracks: action.value };
    }
    case "ADD_AD": {
      return { ...state, ads: [...state.ads, action.value] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PlayerProvider({ children }) {
  const [state, dispatch] = React.useReducer(playerReducer, initial_State);

  const getPlaylistData = useCallback(
    async id => {
      try {
        const { items } = await fetchClient.get(`/playlists/${id}/tracks`);
        dispatch({ type: "SET_TRACKS", value: items });
        await fetchClient.put(`/me/player/play?device_id=${state.device_id}`, {
          uris: items.map(i => i.track.uri)
        });
      } catch {}
    },
    [state.device_id]
  );

  useEffect(() => {
    if (state.current_playlist) {
      getPlaylistData(state.current_playlist);
    }
  }, [state.current_playlist]);

  useEffect(() => {}, []);

  return (
    <PlayerStateContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        {children}
      </PlayerDispatchContext.Provider>
    </PlayerStateContext.Provider>
  );
}
function usePlayerState() {
  const context = React.useContext(PlayerStateContext);
  if (context === undefined) {
    throw new Error("usePlayerState must be used within a PlayerProvider");
  }
  return context;
}

function usePlayerDispatch() {
  const context = React.useContext(PlayerDispatchContext);
  if (context === undefined) {
    throw new Error("usePlayerDispatch must be used within a PlayerProvider");
  }
  return context;
}

PlayerProvider.propTypes = {
  children: PropTypes.element
};

export { PlayerProvider, usePlayerState, usePlayerDispatch };
