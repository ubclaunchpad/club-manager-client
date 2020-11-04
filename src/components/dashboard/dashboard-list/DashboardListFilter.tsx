import React from 'react';

interface IDashboardListFilterProps {
    title: string;
    count: number;
    isActive: boolean;
}

const DashboardListFilter: React.FunctionComponent<IDashboardListFilterProps> = (props: IDashboardListFilterProps) => {
    const buttonState = props.isActive ? 'button is-primary' : 'button';

    return <button className={buttonState}>{`${props.title} (${props.count})`}</button>;
};

export default DashboardListFilter;
