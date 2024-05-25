import React, {
    Dispatch, SetStateAction, useCallback, useState,
} from 'react';
import { Button, ButtonSize, ButtonTypes } from 'shared/ui/Button/Button';
import sendIcon from 'shared/assets/icons/send.svg';
import './styles.css';
import { Options } from '../../model/chat';

interface IInputProps {
    chatInfo: {
        step: number;
        name?: string;
        selectedOption?: number
    }
    setChatInfo: Dispatch<SetStateAction<{ step: number; name?: string; }>>
}

export const Input = (props: IInputProps) => {
    const { chatInfo, setChatInfo } = props;
    const [value, setValue] = useState('');

    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onClickSendButton = useCallback(() => {
        setChatInfo({ step: 1, name: value });
        setValue('');
    }, [setChatInfo, value]);

    const onClickOption = useCallback((option: number) => () => {
        setChatInfo((prevChatInfo) => ({ ...prevChatInfo, step: 2, selectedOption: option }));
    }, [setChatInfo]);

    const renderOptions = useCallback((key: number) => (
        <Button
            styleType={ButtonTypes.DASHED}
            size={ButtonSize.M}
            onClick={onClickOption(key)}
        >
            {Options[key]}
        </Button>
    ), [onClickOption]);

    return (
        <div className="chat-input-wrapper">
            {chatInfo.step === 1 && (
                <div className="chat-input-options">
                    {(Object.keys(Options)).map(Number).map((key) => renderOptions(key))}
                </div>
            )}
            <div className="chat-input-container">
                <input
                    type="text"
                    className="chat-input"
                    value={value}
                    onChange={onChangeInput}
                    disabled={chatInfo.step !== 0}
                />
                <Button
                    styleType={ButtonTypes.SECONDARY}
                    className="send-button"
                    onClick={onClickSendButton}
                    disabled={!value || chatInfo.step !== 0}
                >
                    <img src={sendIcon} alt="send" />
                </Button>
            </div>
        </div>

    );
};