import React, { useState } from 'react';
import { Input } from './Input';
import { Messages } from './Messages';
import './styles.css';

interface IChatSectionProps {
    id: number
}

export const ChatSection = (props: IChatSectionProps) => {
    const { id } = props;
    const [chatInfo, setChatInfo] = useState<{
        step: number;
        name?: string;
        selectedOption?: number;
        messages?: Record<number, string>
    }>({
        step: 0,
        name: undefined,
        selectedOption: undefined,
    });

    return (
        <div className="chat-section">
            <Messages
                chatInfo={chatInfo}
                id={id}
            />
            <Input
                chatInfo={chatInfo}
                setChatInfo={setChatInfo}
            />
        </div>
    );
};
