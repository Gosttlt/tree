import { useDispatch, useSelector } from 'react-redux'
import { getFileTree, getLoadingStatus } from 'store/fileTreeSlice/selectors';
import { useEffect } from 'react';
import { fetchFiles, fetchChildFiles } from 'store/fileTreeSlice';
import FileTreeBox from './FileTreeBox';


const FileTreeContainer = () => {

  const dispatch = useDispatch()
  const fileTree = useSelector(getFileTree)
  const loadingStatus = useSelector(getLoadingStatus)

  const fetchFileHandler = (dirId) => {
    dispatch(fetchChildFiles(dirId))
  }

  useEffect(() => {
    dispatch(fetchFiles())
  }, [dispatch])


  if (loadingStatus || !fileTree) return <div>...Loading</div>
  return (
    <div>
      <FileTreeBox fileTree={fileTree} fetchFileHandler={fetchFileHandler} />
    </div>
  )
}







export default FileTreeContainer;
