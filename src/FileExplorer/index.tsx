import { useState } from "react";
import "./styles.css"
import CustomImg from "./CustomImg";
import icons from "./icon";
import { IParentData } from "./interface";

const FileExplorer: React.FC<{ files: IParentData }> = ({ files }) => {
  const [isExpanded, toggleExpanded] = useState(false); // to track folder expansion
  const [isSelected, toggleSelected] = useState(false); // to track selected state  | here when its selected it will be blue in color

  const isFilesArr = Boolean(Array.isArray(files.data) && files.data.length);

  const handleFolderClick = () => {
    toggleExpanded(!isExpanded);
  };

  const handleFileClick = () => {
    toggleSelected(!isSelected);
  };

  if (files.type === "file") {
    return (
      <div
        className={`file-name ${isSelected ? 'selected' : ''}`}
        onClick={handleFileClick}
      >
        <CustomImg url={files.imgUrl || ''} /> {files.name}
      </div>
    );
  }

  return (
    <div className="folder">
      <div className={`folder-title ${isSelected ? 'selected' : ''}`} onClick={handleFolderClick}>
        <CustomImg url={files.imgUrl || ''} /> {files.name}
        <CustomImg
          url={isExpanded ? icons.sortDown : icons.sortUp}
          height="10px"
          width="10px"
        />
      </div>
      {isExpanded && isFilesArr ? (
        files.data.map((item, index) => (
          <FileExplorer key={index} files={item as IParentData} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileExplorer;
