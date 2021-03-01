import React from 'react';

interface IDashboardListButtonsProps {
    mode: string;
}

class DashboardListButtons extends React.Component<IDashboardListButtonsProps> {
    setSliders = (): React.ReactNode => {
        switch (this.props.mode) {
            case 'Application Reviewed':
                return (
                    <div className="level-left">
                        <div className="level-item">
                            <p>Application Score </p>
                            <input
                                className="slider has-output-tooltip is-fullwidth is-large"
                                step="0.5"
                                min="0"
                                max="5"
                                value="3"
                                type="range"
                            ></input>
                            <output htmlFor="sliderWithValue">3</output>
                        </div>
                    </div>
                );
            case 'Scheduled For Interview':
                return (
                    <div className="level-left">
                        <div className="level-item">
                            <p>Application Score </p>
                            <input
                                className="slider has-output-tooltip is-large"
                                step="0.5"
                                min="0"
                                max="5"
                                value="3"
                                type="range"
                            ></input>
                            <output htmlFor="sliderWithValue">3</output>
                        </div>
                    </div>
                );
            case 'Interviewed':
                return (
                    <div className="level-left">
                        <div className="level-item">
                            <p>Application Score </p>
                            <input
                                className="slider has-output-tooltip is-large"
                                step="0.5"
                                min="0"
                                max="5"
                                value="3"
                                type="range"
                            ></input>
                            <output htmlFor="sliderWithValue">3</output>
                        </div>
                        <div className="level-item">
                            <p>Interview Score </p>
                            <input
                                className="slider has-output-tooltip is-large"
                                step="0.5"
                                min="0"
                                max="5"
                                value="3"
                                type="range"
                            ></input>
                            <output htmlFor="sliderWithValue">3</output>
                        </div>
                    </div>
                );
            case 'Final Decision':
                return (
                    <div className="level-left">
                        <div className="level-item">
                            <p>Application Score </p>
                            <input
                                className="slider has-output-tooltip is-large"
                                step="0.5"
                                min="0"
                                max="5"
                                value="3"
                                type="range"
                            ></input>
                            <output htmlFor="sliderWithValue">3</output>
                        </div>
                        <div className="level-item">
                            <p>Interview Score </p>
                            <input
                                className="slider has-output-tooltip is-large"
                                step="0.5"
                                min="0"
                                max="5"
                                value="3"
                                type="range"
                            ></input>
                            <output htmlFor="sliderWithValue">3</output>
                        </div>
                    </div>
                );
        }
    };

    setButtons = (): React.ReactNode => {
        switch (this.props.mode) {
            case 'Application Reviewed':
                return (
                    <div className="level-right">
                        <button className="button is-light is-rounded is-danger">Bulk Reject</button>
                        <button className="button is-light is-rounded is-info">Bulk Schedule</button>
                        <label className="checkbox">
                            <input type="checkbox" />
                            Bulk Select
                        </label>
                    </div>
                );
            case 'Scheduled For Interview':
                return (
                    <div className="level-right">
                        <div className="level-item">
                            <button className="button is-light is-rounded is-info">Bulk Email</button>
                            <label className="checkbox">
                                <input type="checkbox" />
                                Bulk Select
                            </label>
                        </div>
                    </div>
                );
            case 'Interviewed':
                return (
                    <div className="level-right">
                        <div className="level-item">
                            <button className="button is-light is-rounded is-link">Bulk Accept</button>
                            <button className="button is-light is-rounded is-danger">Bulk Reject</button>
                            <label className="checkbox">
                                <input type="checkbox" />
                                Bulk Select
                            </label>
                        </div>
                    </div>
                );
            case 'Final Decision':
                return (
                    <div className="level-right">
                        <div className="level-item">
                            <button className="button is-light is-rounded is-info">Bulk Email</button>
                            <label className="checkbox">
                                <input type="checkbox" />
                                Bulk Select
                            </label>
                        </div>
                    </div>
                );
        }
    };

    render(): React.ReactNode {
        return (
            <div className="level">
                {this.setSliders()}
                {this.setButtons()}
            </div>
        );
    }
}

export default DashboardListButtons;
