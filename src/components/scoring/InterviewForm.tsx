import React from 'react';
import './ScoringForm.scss';
import ScoringFormOption from './ScoringFormOption';

interface IScoringFormProps {
    handleInterviewFormChange: (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    ) => void;
    openScoringModal: () => void;
}

class InterviewForm extends React.Component<IScoringFormProps> {
    constructor(props: IScoringFormProps) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.props.openScoringModal();
        return;
    };

    render(): React.ReactNode {
        return (
            <form onSubmit={this.handleSubmit}>
                <ScoringFormOption
                    name="level"
                    key="level"
                    text="Experience Level"
                    numOptions={3}
                    options={['Beginner', 'Independent', 'Experienced']}
                    handleCriteriaChange={this.props.handleInterviewFormChange}
                />

                <div className="field scoring-field">
                    <label className="is-size-6">Interviewer 1</label>
                    <div className="control">
                        <div className="columns">
                            <label className="column is-half">
                                <input
                                    type="text"
                                    name="interviewer1"
                                    className="input"
                                    onChange={this.props.handleInterviewFormChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="field scoring-field">
                    <label className="is-size-6">Interviewer 2</label>
                    <div className="control">
                        <div className="columns">
                            <label className="column is-half">
                                <input
                                    type="text"
                                    name="interviewer2"
                                    className="input"
                                    onChange={this.props.handleInterviewFormChange}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="field scoring-field">
                    <label className="is-size-6">Introduction</label>
                    <div className="control">
                        <label className="is-size-7">
                            https://github.com/ubclaunchpad/leads/blob/master/interviews/technical.md#introduction
                        </label>
                        <div className="columns">
                            <label className="column">
                                <textarea
                                    name="intro"
                                    className="textarea"
                                    onChange={this.props.handleInterviewFormChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="field scoring-field">
                    <label className="is-size-6">Experience</label>
                    <div>
                        <label className="is-size-7">
                            https://github.com/ubclaunchpad/leads/blob/master/interviews/technical.md#experience
                        </label>
                    </div>
                </div>
                <ScoringFormOption
                    name="experienceTechnical"
                    key="experienceTechnical"
                    text="Experience – Technical Details"
                    numOptions={3}
                    handleCriteriaChange={this.props.handleInterviewFormChange}
                />
                <ScoringFormOption
                    name="experienceTeamwork"
                    key="experienceTeamwork"
                    text="Experience – Teamwork Details"
                    numOptions={5}
                    handleCriteriaChange={this.props.handleInterviewFormChange}
                />
                <div className="field scoring-field">
                    <label className="is-size-6">Experience – Comments</label>
                    <div className="control">
                        <div className="columns">
                            <label className="column">
                                <input
                                    type="text"
                                    name="experienceComments"
                                    className="input"
                                    onChange={this.props.handleInterviewFormChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="field scoring-field">
                    <label className="is-size-6">Depth</label>
                    <div>
                        <label className="is-size-7">
                            https://github.com/ubclaunchpad/leads/blob/master/interviews/technical.md#depth
                        </label>
                    </div>
                </div>
                <ScoringFormOption
                    name="depthTopic"
                    key="depthTopic"
                    text="Depth – Topic Chosen"
                    numOptions={3}
                    options={['Client/Server', 'Mobile', 'Others']}
                    handleCriteriaChange={this.props.handleInterviewFormChange}
                />
                <ScoringFormOption
                    name="depthScore"
                    key="depthScore"
                    text="Depth – Score"
                    numOptions={5}
                    handleCriteriaChange={this.props.handleInterviewFormChange}
                />
                <div className="field scoring-field">
                    <label className="is-size-6">Depth – Comments</label>
                    <div className="control">
                        <div className="columns">
                            <label className="column">
                                <input
                                    type="text"
                                    name="depthComments"
                                    className="input"
                                    onChange={this.props.handleInterviewFormChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="field scoring-field">
                    <label className="is-size-6">Whiteboard</label>
                    <div>
                        <label className="is-size-7">
                            https://github.com/ubclaunchpad/leads/blob/master/interviews/technical.md#whiteboard
                        </label>
                    </div>
                </div>
                <div className="field scoring-field">
                    <label className="is-size-6">Whiteboard – Question</label>
                    <div className="control">
                        <div className="columns">
                            <label className="column">
                                <input
                                    type="text"
                                    name="whiteboardQuestion"
                                    className="input"
                                    onChange={this.props.handleInterviewFormChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <ScoringFormOption
                    name="whiteboardScore"
                    key="whiteboardScore"
                    text="Whiteboard – Score"
                    numOptions={5}
                    handleCriteriaChange={this.props.handleInterviewFormChange}
                />
                <div className="field scoring-field">
                    <label className="is-size-6">Whiteboard – Comments</label>
                    <div className="control">
                        <div className="columns">
                            <label className="column">
                                <textarea
                                    name="whiteboardComments"
                                    className="textarea"
                                    onChange={this.props.handleInterviewFormChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="field scoring-field">
                    <label className="is-size-6">Conclusion</label>
                    <div>
                        <label className="is-size-7">
                            https://github.com/ubclaunchpad/leads/blob/master/interviews/technical.md#conclusion
                        </label>
                    </div>
                </div>
                <ScoringFormOption
                    name="conclusionTimeCommitment"
                    key="conclusionTimeCommitment"
                    text="Conclusion – Time Commitment"
                    numOptions={3}
                    options={['Yes', 'No', 'Non-committal']}
                    handleCriteriaChange={this.props.handleInterviewFormChange}
                />
                <div className="field scoring-field">
                    <label className="is-size-6">Conclusion – Questions for us</label>
                    <div className="control">
                        <div className="columns">
                            <label className="column">
                                <textarea
                                    name="conclusionQuestions"
                                    className="textarea"
                                    onChange={this.props.handleInterviewFormChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <ScoringFormOption
                    name="debrief"
                    key="debrief"
                    text="Debrief"
                    numOptions={5}
                    handleCriteriaChange={this.props.handleInterviewFormChange}
                />

                <input type="submit" className="button submit-button" value="Submit >" />
            </form>
        );
    }
}

export default InterviewForm;
