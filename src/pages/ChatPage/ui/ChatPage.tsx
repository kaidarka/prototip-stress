import React, { memo, useState } from 'react';
import logoIcon from 'shared/assets/icons/logo.svg';
import logoMiniIcon from 'shared/assets/icons/logo-mini.svg';
import leftArrowIcon from 'shared/assets/icons/left-arrow.svg';
import classNames from 'classnames';
import { Text, TextSizes } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { chatsDB } from '../model/chat';
import './ChatPage.css';
import { ChatSection } from './ChatSection/ChatSection';

const ChatPage = () => {
    const params = useParams();
    const { id } = params;
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
    const chat = chatsDB?.[Number(id) || 0];

    return (
        <div className="chat-page">
            <aside className={classNames('chat-sidebar', {
                'sidebar-closed': !isMenuOpen,
                'sidebar-open': isMenuOpen,
            })}
            >
                <div>
                    {isMenuOpen
                        ? (<img src={logoIcon} alt="logo" className="logo" />)
                        : (<img src={logoMiniIcon} alt="logo" className="logo" />)}
                </div>
                {isMenuOpen && (
                    <div className="sidebar-helper-wrapper">
                        <img src={chat.avatar} alt="" className="sidebar-avatar" />
                        <div>
                            <Text size={TextSizes.M}>
                                {chat.name}
                            </Text>
                            <Text size={TextSizes.XS}>
                                ваш консультант
                            </Text>
                        </div>
                    </div>
                )}
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="sidebar-button">
                    <img
                        src={leftArrowIcon}
                        alt=""
                        className={
                            classNames(
                                'sidebar-button-image',
                                {
                                    'sidebar-button-image-closed': !isMenuOpen,
                                    'sidebar-button-image-open': isMenuOpen,
                                },
                            )
                        }
                    />
                    {isMenuOpen && ('Свернуть')}
                </div>
            </aside>
            <ChatSection id={Number(id)} />
        </div>
    );
};

export default memo(ChatPage);
