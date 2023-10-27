const CustomImg: React.FC<{ url: string; width?: string; height?: string }> = ({
    url = "",
    width = "20px",
    height = "20px",
}) => {
    if(url){
        return <img src={url} width={width} height={height} alt="img" />;
    }
    return <></>
    
};

export default CustomImg