import React from "react";  
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import {useParams} from "react-router-dom";
const RoomPage = ()=>{
    const {roomId} = useParams();

    const myMeeting = async(element)=>{
         const appID =;
         const serverSecret = "";
         const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,"Rohit",Date.now().toString());
         const zp=ZegoUIKitPrebuilt.create(kitToken)
            zp.joinRoom({
                container:element,
                scenario:{
                    mode:ZegoUIKitPrebuilt.VideoConference
                }, 
            })
        }

    return(
        <div>
            {roomId}
            <div ref={myMeeting} />
        </div>
    )
}
export default RoomPage;