export interface IFile {
    type: "file";
    meta: string; // You may want to create a more specific type for "meta" if needed
    name: string;
    imgUrl: string; // Assuming imgUrl is a URL or a path to an image
  }
  
 export interface IFolder {
    type: "folder" | "file";
    name?: string;
    meta?:string;
    imgUrl?: string; // Assuming imgUrl is a URL or a path to an image
    data?: (IFile | IFolder)[]; // It can contain both files and folders
  }
  
  export interface IFolderData {
    type: "folder";
    name: string;
    imgUrl: string; // Assuming imgUrl is a URL or a path to an image
    data: IFolder[];
  }

  // Define the parent data
export interface IParentData {
    type: "folder" | "file";
    name: string;
    data: IFolderData[];
    imgUrl?:string
  }
  
  