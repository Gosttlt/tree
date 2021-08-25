import { useState } from 'react'
import Icon from 'components/fileTree/Icons'
import Title from './Title'
import styled from 'styled-components';
import Flex from 'components/shared/Flex';

const File = ({ file, fetchFileHandler }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)
    const hasChild = Array.isArray(file.children)

    return (
        <FileContainer
            isOpen="isOpen"
            margin="5px"
            onClick={() => {
                setIsOpen(!isOpen)
                if (isEmpty && hasChild) { fetchFileHandler(file.id) }
                setIsEmpty(false)
            }}>
            <Flex>
                {hasChild ?
                    <Icon type={isOpen ? 'openDir' : 'dir'} /> :
                    <Icon type={file.title.split('.').pop()} />}
                <Title>{file.title}</Title>
            </Flex>
        </FileContainer>
    )

}

const FileContainer = styled.div`
display:flex;
padding: 5px;
height: 15px;
cursor: pointer;
width: 100%;
flex-direction: column;
&:hover {
  color: #85b6bf;
  transition: .3s;
}
`
export default File
