import { VscFolder, VscFolderOpened, VscFileZip, VscFile } from "react-icons/vsc";
import { IoImageOutline } from "react-icons/io5";

const Icon = ({ type }) => {
    if (type === 'dir') {
        return (
            <VscFolder />
        )
    }
    if (type === 'openDir') {
        return (
            <VscFolderOpened />
        )
    }
    if (type === 'zip') {
        return (
            <VscFileZip />
        )
    }
    if (type === 'epub') {
        return (
            <VscFile />
        )
    }
    if (type === 'jpg') {
        return (
            <IoImageOutline />
        )
    }
    return <></>
}
export default Icon

