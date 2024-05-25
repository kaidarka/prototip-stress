import React from 'react';
import './styles.css';
import { chatsDB } from '../../model/chat';

interface IMessagesProps {
    chatInfo: {
        step: number;
        name?: string;
        selectedOption?: number;
        messages?: Record<number, string>
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
                        <p className="from-me">{chatInfo.messages?.[0]}</p>
                        <p className="from-them">{chat.messages[1].text(chatInfo.name)}</p>
                    </>
                )}
                {chatInfo.step >= 2 && (
                    <>
                        <p className="from-me">{chatInfo.messages?.[1]}</p>
                        <p className="from-them">
                            {
                                chat.messages[2].text(chatInfo.name, chatInfo.selectedOption)
                            }
                        </p>
                    </>
                )}
                {chatInfo.step >= 3 && (
                    <>
                        <p className="from-me">{chatInfo.messages?.[2]}</p>
                        <p className="from-them">
                            {
                                chat.messages[3].text(chatInfo.name, chatInfo.selectedOption)
                            }
                        </p>
                    </>
                )}
                {chatInfo.step >= 4 && (
                    <>
                        <p className="from-me">{chatInfo.messages?.[3]}</p>
                        <p className="from-them">
                            {
                                chat.messages[4].text(chatInfo.name, chatInfo.selectedOption)
                            }
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
