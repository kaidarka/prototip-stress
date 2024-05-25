import React from 'react';
import { Text, TextSizes } from 'shared/ui/Text/Text';
import { chatsDB } from '../../model/chat';
import './styles.css';

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
                    <div className="messages-list__step">
                        <img src={chat.avatar} alt="avatar" />
                        <p className="from-them">
                            {chat.messages[0].text()}
                        </p>
                    </div>

                )}
                {chatInfo.step >= 1 && (
                    <>
                        <p className="from-me">{chatInfo.messages?.[0]}</p>
                        <div className="messages-list__step">
                            <img src={chat.avatar} alt="avatar" />
                            <p className="from-them">{chat.messages[1].text(chatInfo.name)}</p>
                        </div>
                    </>
                )}
                {chatInfo.step >= 2 && (
                    <>
                        <p className="from-me">{chatInfo.messages?.[1]}</p>
                        <div className="messages-list__step">
                            <img src={chat.avatar} alt="avatar" />
                            <p className="from-them">
                                {
                                    chat.messages[2].text(chatInfo.name, chatInfo.selectedOption)
                                }
                            </p>
                        </div>
                    </>
                )}
                {chatInfo.step >= 3 && (
                    <>
                        <p className="from-me">{chatInfo.messages?.[2]}</p>
                        <div className="messages-list__step">
                            <img src={chat.avatar} alt="avatar" />
                            <p className="from-them">
                                {
                                    chat.messages[3].text(chatInfo.name, chatInfo.selectedOption)
                                }
                            </p>
                        </div>
                    </>
                )}
                {chatInfo.step >= 4 && (
                    <>
                        <p className="from-me">{chatInfo.messages?.[3]}</p>
                        <div className="messages-list__step">
                            <img src={chat.avatar} alt="avatar" />
                            <p className="from-them">
                                {
                                    chat.messages[4].text(chatInfo.name, chatInfo.selectedOption)
                                }
                            </p>
                        </div>
                        <div className="end-text">
                            <Text size={TextSizes.XS}>
                                На этом ваше взаимодействие с этим чатом завершено.
                            </Text>
                            <Text size={TextSizes.XS}>
                                Пожалуйста, перейдите к следующему этапу тестирования.
                            </Text>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
