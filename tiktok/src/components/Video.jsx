import React, {useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({url, likes, shares, messages, channel, description, song }) {

    const videoRef = useRef(null)
    const [playing , setPlaying ] = useState(false)

    const handleVideo = () =>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <div className='video'>
            <video ref={videoRef} onClick={handleVideo} className='video_player' loop src='https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4' />
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
            
            
        </div>
    )
}

export default Video

{ /*<video src="http://v16m.tiktok.com" /> */}