import EasyInterface from '../../images/home/featureIcons/EasyInterface.svg';
import BulkActions from '../../images/home/featureIcons/BulkActions.svg';
import DarkMode from '../../images/home/featureIcons/DarkMode.svg';
import Filter from '../../images/home/featureIcons/Filter.svg';
import Integrated from '../../images/home/featureIcons/Integrated.svg';
import MultiAccounts from '../../images/home/featureIcons/MultiAccounts.svg';
import OwnStages from '../../images/home/featureIcons/OwnStages.svg';
import Scoring from '../../images/home/featureIcons/Scoring.svg';
import SuperQuick from '../../images/home/featureIcons/SuperQuick.svg';

const FeaturesList = [
    {
        title: 'Super quick',
        description:
            'Our systematic process ensures you have the quickest and most efficient experience possible in selecting an applicant.',
        icon: SuperQuick,
        isDeployed: true,
    },
    {
        title: 'Integrated',
        description:
            'With our Google Sheets integration and email automation, we simplify the need to use multiple external tools.',
        icon: Integrated,
        isDeployed: true,
    },
    {
        title: 'Scoring',
        description:
            'The scoring system lets you score applicants based on their compatibility and skills for an objective evaluation.',
        icon: Scoring,
        isDeployed: true,
    },
    {
        title: 'Easy to use interface',
        description: 'Our streamlined, easy to use interface allows easier management for large volume of applicants.',
        icon: EasyInterface,
        isDeployed: true,
    },
    {
        title: 'Bulk actions',
        description:
            'Bulk actions allow user to sort multiple applicants simultaneously. Say goodbye to exhausting, one-by-one sorting.',
        icon: BulkActions,
        isDeployed: true,
    },

    {
        title: 'Filter and sort',
        description:
            'Hiring for multiple roles? No biggie. Use our filter and sort feature to go through different types of applicants.',
        icon: Filter,
        isDeployed: true,
    },
    {
        title: 'Dark mode',
        description:
            'Let’s be real, it’s 2021. What good is a product without a dark mode? Save your eyes from the blinding (unhealthy blue) lights.',
        icon: DarkMode,
        isDeployed: false,
    },
    {
        title: 'Multi accounts log in',
        description:
            'Review applicants’ data together with other recruiters. Save time and focus on what truly matters— picking the right candidate.',
        icon: MultiAccounts,
        isDeployed: false,
    },
    {
        title: 'Set up your own stages',
        description:
            'Change the default process and set up your own stages. Flexibility is key— recruit applicants using your own way.',
        icon: OwnStages,
        isDeployed: false,
    },
];

export default FeaturesList;
