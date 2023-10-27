
import { useState } from "react";
import "./styles.css"
import CustomImg from "./CustomImg";
import icons from "./icon";
import { IParentData } from "./interface";


const FileExplorer: React.FC<{ files:IParentData}> = ({ files }) => {
    const [isExpanded, toggleExpanded] = useState(false); // if will applicable on toggle icon click
    const isFilesArr = Boolean(Array.isArray(files.data) && files.data.length); // need to make in folders we have data or not


    if (files.type === "file") {
        return (<div className="file-name"> <CustomImg url={files.imgUrl || ''} /> {files.name} </div>);
    }

    return (
        <div className="folder">
            <div className="folder-title" onClick={() => toggleExpanded(!isExpanded)}>
                <CustomImg url={files.imgUrl || ''} /> {files.name} <CustomImg url={isExpanded ? icons.sortDown :icons.sortUp} height="10px" width="10px" />
            </div>
            {isExpanded && isFilesArr ? (
                files.data.map((item) => <FileExplorer files={item as IParentData} />)
            ) : (
                <></>
            )}
        </div>
    );
};

export default FileExplorer;
