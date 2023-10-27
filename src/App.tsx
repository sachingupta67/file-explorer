import FileExplorer from "./FileExplorer";
import icons from "./FileExplorer/icon";
import { IParentData } from "./FileExplorer/interface";

const FOLDER_ICON = icons.folder;
const FILE_ICON = icons.file;

const filesData:IParentData = {
  type: "folder",
  name: "parent",
  data: [
    {
      type: "folder",
      name: "root",
      imgUrl: FOLDER_ICON,
      data: [
        {
          type: "folder",
          name: "src",
          imgUrl: FOLDER_ICON,
          data: [
            {
              type: "file",
              meta: "js",
              name: "index.js",
              imgUrl: FILE_ICON,
            },
          ],
        },
        {
          type: "folder",
          name: "public",
          imgUrl: FOLDER_ICON,
          data: [
            {
              type: "file",
              meta: "ts",
              name: "index.ts",
              imgUrl: FILE_ICON,
            },
          ],
        },
        {
          type: "file",
          meta: "html",
          name: "index.html",
          imgUrl: FILE_ICON,
        },
      ],
    },
    {
      type: "folder",
      name: "data",
      imgUrl: FOLDER_ICON,
      data: [
        {
          type: "folder",
          name: "images",
          imgUrl: FOLDER_ICON,
          data: [
            {
              type: "file",
              meta: "img",
              name: "image.png",
              imgUrl: FILE_ICON,
            },
            {
              type: "file",
              meta: "img",
              name: "image2.webp",
              imgUrl: FILE_ICON,
            },
          ],
        },
        {
          type: "file",
          meta: "svg",
          name: "logo.svg",
          imgUrl: FILE_ICON,
        },
      ],
    },
  ],
};

function App() {
  return (
    <>
      <FileExplorer files={filesData} />
    </>
  );
}

export default App;
