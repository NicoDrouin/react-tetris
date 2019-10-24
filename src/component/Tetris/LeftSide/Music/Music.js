import React, { useState } from 'react'
import './Music.scss';

let musicIsActiveValue = false
let playerIsVisibleValue = false

var player

function startPlayer() {
    var tag = document.createElement('script')

    tag.src = 'https://www.youtube.com/iframe_api'
    var firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    console.log('script loaded');
}

window.onYouTubeIframeAPIReady = function() {
    // eslint-disable-next-line no-undef
    player = new YT.Player('player', {
        /* 350X260 <-- control volume minimum size*/
        width: '240',
        height: '135',
        playerVars: { 
            autoplay: 1,
            loop: 1,
            list: 'PLXrcddt4nRE_ZNKvbOkd2OaKNroxQ3_Ns',
            listType: 'playlist'
        },
        events: {
            'onReady': onPlayerReady,
        }
    })
}

function onPlayerReady(event) {
    event.target.setVolume(60);
    event.target.loadPlaylist(
        {
            list: 'PLXrcddt4nRE_ZNKvbOkd2OaKNroxQ3_Ns',
            listType: 'playlist'
        }
    )
}


const Music = () => {

    const [musicIsActive, setMusicIsActive] = useState(false)
    const [playerIsVisible, setPlayerIsVisible] = useState(false)

    function loadPlayer() {
        musicIsActiveValue = true
        playerIsVisibleValue = true
        setMusicIsActive(musicIsActiveValue)
        setPlayerIsVisible(playerIsVisibleValue)
        startPlayer()
    }
    
    function playOrPause() {
        musicIsActiveValue ? player.pauseVideo() : player.playVideo()
        musicIsActiveValue = !musicIsActiveValue
        setMusicIsActive(musicIsActiveValue)
    }

    return (
        <div className='music'>
            {
                playerIsVisible ?
                    musicIsActive ?
                        <span className='btn' onClick={playOrPause}>Turn music off !</span>:
                        <span className='btn' onClick={playOrPause}>Turn music on !</span>:
                    <span className='btn' onClick={loadPlayer}>Play me a song !</span>
            }
            <br/>
            <br/>
            <div id="player"></div>
        </div>
    )
}

export default Music