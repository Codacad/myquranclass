import React, { useEffect } from 'react'
const ZoomMeeting = ({payload}) => {
  useEffect(async () => {
    const { ZoomMtg } = await import('@zoomus/websdk')
    ZoomMtg.setZoomJSLib('https://source.zoom.us/lib', '/av');
    ZoomMtg.preLoadWasm()
    ZoomMtg.prepareWebSDK()
    ZoomMtg.generateSDKSignature({
      meetingNumber:payload.meetingNumber,
      role:payload.role,
      sdkKey:payload.sdkKey,
      sdkSecret:payload.sdkSecret,
      success:(signature) => {
        ZoomMtg.init({
          leaveUrl:payload.leaveUrl,
          success:(data) => {
            ZoomMtg.join({
              meetingNumber:payload.meetingNumber,
              signature:signature.result,
              userName:payload.userName,
              userEmail:payload.userEmail,
              passWord:payload.passWord,
              tk:"",
              success:() => {
                console.log('Meeting Joind')
              },
              error:(err) => {
                console.log(err)
              }
            })
          },
          error:(err) => {
            console.log(err)
          }
        })
      },
      error: (error) => {
        console.log(error)
      }
    })
  })
  return (
    <div>

    </div>
  )
}

export default ZoomMeeting
