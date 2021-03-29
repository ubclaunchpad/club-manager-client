import React, { Component, ReactNode } from 'react';
import DashboardListCard from '../dashboard/dashboard-list/DashboardListCard';
import ApplicantManagementModal from '../modals/ApplicantManagementModal';
import './ArchiveList.scss';

type ArchiveListProps = {
    mode: string;
    viewApplicant: (newCount: number) => void;
    accepted: any[];
    rejected: any[];
};

type ArchiveListState = {
    showModal: boolean;
    name: string;
    role: string;
    type: string;
    status: string;
    email: string;
    screeningGrade?: number;
    interviewGrade?: number;
};

class ArchiveList extends Component<ArchiveListProps, ArchiveListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            name: '',
            role: '',
            type: '',
            status: 'Pending',
            email: '',
        };
    }

    showModal = (
        name: string,
        role: string,
        type: string,
        status: string,
        email: string,
        screeningGrade: number,
        interviewGrade: number,
    ): void => {
        this.setState({
            showModal: true,
            name: name,
            role: role,
            type: type,
            status: status,
            email: email,
            screeningGrade: screeningGrade,
            interviewGrade: interviewGrade,
        });
    };

    closeModal = (type: string, email: string): void => {
        if (type.includes('Email')) {
            console.log(`Cannot send email to ${email}`);
        }
        this.setState({ showModal: false });
    };

    setList = (): React.ReactNode => {
        switch (this.props.mode) {
            case 'Accepted':
                return this.props.accepted.map((element, index) => (
                    <div className="column is-half" key={index}>
                        <DashboardListCard
                            {...element}
                            mode={this.props.mode}
                            key={index}
                            count={index}
                            screeningGrade={this.props.accepted[index].screeningGrade}
                            interviewGrade={this.props.accepted[index].interviewGrade}
                            viewApplicant={this.props.viewApplicant}
                            setModalAndType={(type: string) => {
                                console.log(element.role);
                                this.showModal(
                                    element.name,
                                    element.role,
                                    type,
                                    element.status,
                                    element.email,
                                    element.screeningGrade,
                                    element.interviewGrade,
                                );
                            }}
                        />
                    </div>
                ));
            case 'Rejected':
                return this.props.rejected.map((element, index) => (
                    <div className="column is-half" key={index}>
                        <DashboardListCard
                            {...element}
                            mode={this.props.mode}
                            key={index}
                            count={index}
                            screeningGrade={this.props.rejected[index].screeningGrade}
                            interviewGrade={this.props.rejected[index].interviewGrade}
                            viewApplicant={this.props.viewApplicant}
                            setModalAndType={(type: string) => {
                                console.log(element.role);
                                this.showModal(
                                    element.name,
                                    element.role,
                                    type,
                                    element.status,
                                    element.email,
                                    element.screeningGrade,
                                    element.interviewGrade,
                                );
                            }}
                        />
                    </div>
                ));
        }
    };

    render(): ReactNode {
        return (
            <div className="section archive-list">
                <div className="section">
                    <div className="columns is-multiline">{this.setList()}</div>
                </div>
                <div>
                    <ApplicantManagementModal
                        type={this.state.type}
                        name={this.state.name}
                        role={this.state.role}
                        email={this.state.email}
                        closeModal={(type: string, email: string) => this.closeModal(type, email)}
                        isActive={this.state.showModal}
                    />
                </div>
            </div>
        );
    }
}

export default ArchiveList;
