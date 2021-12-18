import React, { useEffect, useState } from 'react';
import { PlayList } from '../../utils/playList';
import { SimUtil } from '../../utils/sim';
import { Song } from '../../utils/song';
import { Track } from '../../utils/track';
import { SimPlaylist } from './SimPlaylist';
import { SimSong } from './SimSong';
import './style/simWrapper.scss';
export const SimWrapper = (props: { track: Track }) => {
	const [simSong, setSimSong] = useState([] as Song[]);
	const [simPlaylist, setSimPlaylist] = useState([] as PlayList[]);
	useEffect(() => {
		if (props.track) {
			SimUtil.getSim(props.track, 'song', setSimSong);
			SimUtil.getSim(props.track, 'playlist', setSimPlaylist);
		}
	}, [props.track]);
	return (
		<div className="sim-wrapper">
			<SimSong song={simSong} />
			<SimPlaylist playlists={simPlaylist} />
		</div>
	);
};
