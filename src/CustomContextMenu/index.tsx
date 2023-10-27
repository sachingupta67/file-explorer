/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";

const ContextMenu: React.FC<{
  children: React.ReactNode;
  fileName: string;
}> = ({ children, fileName }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const contextMenuRef = useRef(null);

  const handleContextMenu :any = (event: MouseEvent) => {
    event.preventDefault();
    setShowContextMenu(true);
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
    
  };

  const handleMenuItemClick = (type = "") => {
    console.log(`Event:${type},File Name:${fileName}`);
    setShowContextMenu(false);
  };

  const closeContextMenu = () => {
    setShowContextMenu(false);
  };

  useEffect(() => {
    const handleClickOutside= (event: MouseEvent) => {
      if (
        contextMenuRef.current &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !(contextMenuRef as any).current.contains(event.target)
      ) {
        closeContextMenu();
      }
    };

    if (showContextMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showContextMenu]);

  return (
    <div onContextMenu={handleContextMenu} ref={contextMenuRef}>
      {children}
      {showContextMenu && (
        <div
          style={{
            position: "absolute",
            left: contextMenuPosition.x + "px",
            top: contextMenuPosition.y + "px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "5px",
          }}
        >
          <button onClick={() => handleMenuItemClick("Rename")}>Rename</button>
          <button onClick={() => handleMenuItemClick("Delete")}>Delete</button>
          <button onClick={() => handleMenuItemClick("Copy")}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
