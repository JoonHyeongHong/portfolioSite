import styled from 'styled-components';
interface Props {
    text: string;
    onClick?: (...args: any[]) => any;
    editMode?: boolean;
}

const SubTitleEdit = ({ text, onClick, editMode }: Props) => {
    return (
        <SubTitleDiv>
            <TitleDiv>{text}</TitleDiv>
            {!editMode && (
                <EditButtonDiv onClick={onClick}>
                    <img src={`${process.env.PUBLIC_URL}/img/edit.svg`} alt="수정" />
                </EditButtonDiv>
            )}
        </SubTitleDiv>
    );
};

export default SubTitleEdit;
const SubTitleDiv = styled.div`
    display: flex;
    margin: 10px 0px;
    padding-bottom: 5px;
    border-bottom: 1px solid #bdbdbd;
    margin-bottom: 2%;
`;

const TitleDiv = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
`;

const EditButtonDiv = styled.div`
    margin-left: auto;
`;