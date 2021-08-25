import { useState } from 'react';
import styled, { css } from 'styled-components';
import React from 'react'

const FileTreeDirBox = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (<div>
        <FileTreeBoxStyled
            isOpen={isOpen}
            onClick={(e) => {
                setIsOpen(!isOpen)
                e.stopPropagation()
            }}>

            {children}
        </FileTreeBoxStyled>
    </div>
    )
}

const FileTreeBoxStyled = styled.div`
display: flex;
margin-left: 15px;
flex-direction: column;
max-height: 25px;
width:fit-content;
overflow: hidden;
transition: .3s;
${props => props.isOpen && css`
    max-height: 1000px;
    overflow: visible;
`}
`


export default FileTreeDirBox