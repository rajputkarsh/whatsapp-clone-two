import React, { useState } from "react";
import Image from "next/image";
import { FaCamera } from 'react-icons/fa';

function Avatar({type, image, setImage}) {

  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({x: 0, y: 0});

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenuVisible(true);
    setContextMenuCoordinates(() => ({x: e.pageX, y: e.pageY}));
  }

  return <>
    <div className="flex items-center justify-center">
        {
          type === 'sm' && (
            <div className="relative h-10 w-10">
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          )
        }
        {
          type === 'lg' && (
            <div className="relative h-14 w-14">
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          )
        }
      {
        type === 'xl' && (
          <div
            className="relative cursor-pointer z-0"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={(e) => showContextMenu(e)}
          >
            <div
              onClick={(e) => showContextMenu(e)}
              className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center justify-center rounded-full flex-col text-center gap-2 ${hover ? "visible" : "hidden"}`}
            >
              <FaCamera
                className="text-2xl"
                id="context-opener"
                onClick={(e) => showContextMenu(e)}
              />
              <span onClick={(e) => showContextMenu(e)}>Change <br /> Profile <br /> Photo</span>
            </div>
            <div className="h-60 w-60 flex items-center justify-center">
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )
      }
    </div>
  </>;
}

export default Avatar;
