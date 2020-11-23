
import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import InboxScreen from './InboxScreen';
import * as TaskListStories from './TaskList.stories';
// import { Meta } from '@storybook/react'
// import  {Task} from '../types/task.types'

const store = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args.tasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};
export default {
    component: InboxScreen,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title: 'InboxScreen',
}


const Template = (args) => <InboxScreen {...args} />;

const Default = Template.bind({});

const Error = Template.bind({});
Error.args = {
    error: 'Something',
};
export {
    Default,
    Error
};