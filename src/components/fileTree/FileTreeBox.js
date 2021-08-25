import { useMemo } from 'react';
import File from './File';
import FileTreeDirBox from './FileTreeDirBox';

const FileTreeBox = ({ fileTree, fetchFileHandler }) => {

    const fileTreeArr = useMemo(() => {
        return fileTree.children.map(f => (
            <FileTreeDirBox key={f.id} file={f} fetchFileHandler={() => fetchFileHandler(f.id)}>
                <File file={f} fetchFileHandler={fetchFileHandler} />
                {(f.children && f.children.length) ? <FileTreeBox fileTree={f} fetchFileHandler={fetchFileHandler} /> : <></>}
            </FileTreeDirBox>
        ))
    }, [fileTree, fetchFileHandler])

    return (<>
        {fileTreeArr}
    </>
    )

}



export default FileTreeBox