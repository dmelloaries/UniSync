
import { MdCallEnd } from "react-icons/md";

interface Props {
  handleToggleMute: () => void;
  disconnectRoom: () => void;
  handleToggleVideo: () => void;
  clickedIcon: string;
}

const BottomBar = ({
 
  disconnectRoom,
  
  clickedIcon,
}: Props) => {
  // const [muteIcon, setMuteIcon] = useState<IconType>(AiOutlineAudioMuted);

  // const [videoIcon, setVideoIcon] = useState<IconType>(FaVideoSlash);
  // const toggleMuteIcon = () => {
  //   console.log(muteIcon);
  //   setMuteIcon((prevIcon: IconType) =>
  //     prevIcon === AiFillAudio ? AiOutlineAudioMuted : AiFillAudio
  //   );
  // };

  // const toggleVideoIcon = () => {
  //   console.log(videoIcon);
  //   setVideoIcon((prevIcon: IconType) =>
  //     prevIcon === FaVideo ? FaVideoSlash : FaVideo
  //   );
  // };
  return (
    <>
      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-60 flex justify-center space-x-20 ${
          clickedIcon !== "Video"
            ? "transition-all duration-300 transform translate-y-3 opacity-0 hover:opacity-100 hover:translate-y-0"
            : "transition-all duration-300 transform translate-y-6 opacity-100 hover:translate-y-0"
        }`}
      >
        
        <button
          className=""
          onClick={disconnectRoom}
        >
          {<MdCallEnd />}
        </button>
      
      </div>
    </>
  );
};

export default BottomBar;



// import { useState } from "react";
// import { IconType } from "react-icons";
// import { AiFillAudio, AiOutlineAudioMuted } from "react-icons/ai";
// import { FaVideo, FaVideoSlash } from "react-icons/fa6";
// import { MdCallEnd } from "react-icons/md";

// interface Props {
//   handleToggleMute: () => void;
//   disconnectRoom: () => void;
//   handleToggleVideo: () => void;
//   clickedIcon: string;
// }

// const BottomBar = ({
//   handleToggleMute,
//   disconnectRoom,
//   handleToggleVideo,
//   clickedIcon,
// }: Props) => {
//   const [MuteIcon, setMuteIcon] = useState<IconType>(AiOutlineAudioMuted);
//   const [VideoIcon, setVideoIcon] = useState<IconType>(FaVideoSlash);

//   const toggleMuteIcon = () => {
//     setMuteIcon((prevIcon: IconType) =>
//       prevIcon === AiFillAudio ? AiOutlineAudioMuted : AiFillAudio
//     );
//     handleToggleMute(); // Call the parent function
//   };

//   const toggleVideoIcon = () => {
//     setVideoIcon((prevIcon: IconType) =>
//       prevIcon === FaVideo ? FaVideoSlash : FaVideo
//     );
//     handleToggleVideo(); // Call the parent function
//   };

//   return (
//     <div
//       className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-60 flex justify-center space-x-20 ${
//         clickedIcon !== "Video"
//           ? "transition-all duration-300 transform translate-y-3 opacity-0 hover:opacity-100 hover:translate-y-0"
//           : "transition-all duration-300 transform translate-y-6 opacity-100 hover:translate-y-0"
//       }`}
//     >
//       <button onClick={toggleMuteIcon}>
//         <MuteIcon />
//       </button>
//       <button onClick={toggleVideoIcon}>
//         <VideoIcon />
//       </button>
//       <button onClick={disconnectRoom}>
//         <MdCallEnd />
//       </button>
//     </div>
//   );
// };

// export default BottomBar;
