// @flow

import type { Dispatch } from 'redux';

import VideoLayout from '../../../modules/UI/videolayout/VideoLayout';
import { getParticipantById } from '../base/participants/functions';

import { OPEN_CHAT } from './actionTypes';
import { closeChat } from './actions.any';

export * from './actions.any';

/**
 * Displays the chat panel.
 *
 * @param {Object} participant - The recipient for the private chat.
 * @returns {{
 *     participant: Participant,
 *     type: OPEN_CHAT
 * }}
 */
export function openChat(participant: Object) {
    return function(dispatch: (Object) => Object) {
        dispatch({
            participant,
            type: OPEN_CHAT
        });
    };
}

/**
 * Displays the chat panel for a participant identified by an id.
 *
 * @param {string} id - The id of the participant.
 * @returns {{
 *     participant: Participant,
 *     type: OPEN_CHAT
 * }}
 */
export function openChatById(id: string) {
    return function(dispatch: (Object) => Object, getState: Function) {
        const participant = getParticipantById(getState(), id);

        return dispatch({
            participant,
            type: OPEN_CHAT
        });
    };
}


/**
 * Toggles display of the chat panel.
 *
 * @returns {Function}
 */
export function toggleChat() {
    return (dispatch: Dispatch<any>, getState: Function) => {
        const isOpen = getState()['features/chat'].isOpen;

        if (isOpen) {
            dispatch(closeChat());
        } else {
            dispatch(openChat());
        }

        // Recompute the large video size whenever we toggle the chat, as it takes chat state into account.
        VideoLayout.onResize();
    };
}
