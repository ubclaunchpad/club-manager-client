import React from 'react';

interface IDashboardListFilterProps {
    title: string;
}

const DashboardListFilter: React.FunctionComponent<IDashboardListFilterProps> = (props: IDashboardListFilterProps) => {
    return (
        <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            {` ${props.title}`}
        </label>
    );
};

export default DashboardListFilter;
