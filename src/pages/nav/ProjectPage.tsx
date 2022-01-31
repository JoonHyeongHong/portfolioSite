import { SubTitleEdit, ProjectDiv } from '../../components';
import { useState, useMemo } from 'react';
import { ProjectProps } from 'ProjectPageModule';

const datas: ProjectProps.IProjectProps[] = [
    {
        id: 0,
        title: '프로젝트 토끼토끼',
        startDate: '2021-01-30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명0',
    },
    {
        id: 2,
        title: '프로젝트 까악까악',
        startDate: '2021-01-30',
        endDate: '2021-02-30',
        techStack: ['Django', 'TS', 'JavaScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명1',
    },
    {
        id: 3,
        title: '프로젝트 끼룩끼룩',
        startDate: '2021-01-30',
        endDate: '2021-02-30',
        techStack: ['Django', 'Flask', 'TypeScript', 'JavaScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명2',
    },
    {
        id: 4,
        title: '프로젝트 끼토끼토',
        startDate: '2021-01-30',
        endDate: '2021-02-30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명3',
    },
    {
        id: 5,
        title: '프로젝트 어흥어흥',
        startDate: '2021.01.30',
        endDate: '2021.02.30',
        techStack: ['Django', 'Flask', 'TypeScript'],
        imgSrc: 'https://t1.daumcdn.net/cfile/tistory/996B5C3F5C2DCE5304?original',
        gifSrc: 'https://t1.daumcdn.net/cfile/tistory/995040355C2DCE5E2E?original',
        explain: '프로젝트설명4',
    },
];

const ProjectPage = () => {
    // 수정모드용 토글
    const [editToggle, setEditToggle] = useState<boolean>(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleChangeToggle();
    };
    const data = useMemo(() => {
        return { data: datas, editToggle: editToggle };
    }, [editToggle]);

    // EditToggle 수정용 함수
    const handleChangeToggle = () => {
        setEditToggle((current) => !current);
    };
    return (
        <>
            <SubTitleEdit text={`📂 Project`} onClick={handleChangeToggle} editMode={editToggle} />
            <ProjectDiv {...data} editMode={editToggle} />
        </>
    );
};

export default ProjectPage;
