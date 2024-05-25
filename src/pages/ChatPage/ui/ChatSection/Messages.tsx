import React from 'react';
import './styles.css';
import { chatsDB, Options } from '../../model/chat';

interface IMessagesProps {
    chatInfo: {
        step: number;
        name?: string;
        selectedOption?: number;
    };
    id: number;
}

export const Messages = (props: IMessagesProps) => {
    const { chatInfo, id } = props;
    const chat = chatsDB[id];

    return (
        <div>
            <div className="messages-list">
                {chatInfo.step >= 0 && (
                    <p className="from-them">
                        {chat.messages[0].text()}
                    </p>
                )}
                {chatInfo.step >= 1 && (
                    <>
                        <p className="from-me">{chatInfo.name}</p>
                        <p className="from-them">{chat.messages[1].text(chatInfo.name)}</p>
                    </>
                )}
                {chatInfo.step >= 2 && (
                    <>
                        <p className="from-me">{Options[chatInfo.selectedOption || 0]}</p>
                        <p className="from-them">
                            {
                                chat.messages[2].text(chatInfo.name, chatInfo.selectedOption)
                            }
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
