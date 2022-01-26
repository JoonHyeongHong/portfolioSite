import { ProjectCardDiv } from '../../components/project';
import styled from 'styled-components';
import SubTitle from '../../components/SubTitle';
const ProjectPage = () => {
    return (
        <Div>
            <SubTitle text="📂 Project" />
            <ProjectCardDiv />
        </Div>
    );
};

export default ProjectPage;

const Div = styled.div`
    overflow: visible;
`;
