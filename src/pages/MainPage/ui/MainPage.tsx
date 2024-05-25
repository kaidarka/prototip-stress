import React, { useCallback } from 'react';
import logoIcon from 'shared/assets/icons/logo.svg';
import { HeadingTypes, Title } from 'shared/ui/Title/Title';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTypes } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
    const navigate = useNavigate();

    const onClickButton = useCallback(() => {
        navigate('chat');
    }, [navigate]);

    return (
        <div className="main-page">
            <header>
                <img src={logoIcon} alt="logo" className="logo" />
            </header>
            <main>
                <div className="main-wrapper">
                    <Title headingType={HeadingTypes.H2} className="main-title">
                        Вы находитесь в приложении психологической самопомощи
                    </Title>

                    <Text className="main-subtitle">
                        Мы работаем круглосуточно и стараемся всегда отвечать быстро
                        Для начала диалога с консультантом просто перейдите в чат
                    </Text>
                    <div className="main-button-wrapper">
                        <Button
                            styleType={ButtonTypes.PRIMARY}
                            size={ButtonSize.L}
                            onClick={onClickButton}
                        >
                            Начать чат
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainPage;
