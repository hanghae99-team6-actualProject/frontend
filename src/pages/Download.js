import React from 'react'
import '../styles/auth/onboarding.scss'
import { useReactPWAInstall } from 'react-pwa-install'
import myLogo from './logo192.png'
import Loading from '../components/Loading'
import useOnMounted from '../shared/customHooks/useOnMounted'

const Downlaod = () => {
    const { pwaInstall, supported, isInstalled } = useReactPWAInstall()
    const [isLoading, setIsLoading] = React.useState(true)
    const [isSupport, setIsSupport] = React.useState(supported())
    const [descModal, setDescModal] = React.useState(false)

    const handleClick = () => {
        pwaInstall({
            title: '밍기적 다운받기',
            logo: myLogo,
        })
    }

    useOnMounted(() => {
        let checkInterver = setInterval(() => {
            setIsSupport(supported())
            let temp = supported()
            if (temp) {
                setIsSupport(supported())
                clearInterval(checkInterver)
            }
            setIsLoading(true)
        }, 1000)
    })

    const rionImg = {
        width: '6.7rem',
        height: 'auto',
    }

    return (
        <>
            {!isLoading && <Loading />}
            {isLoading && (
                <div
                    className="onBoarding-warp"
                    onClick={() => setDescModal(false)}
                >
                    <section className="onBoarding-container">
                        <article className="rion-main">
                            <img
                                style={rionImg}
                                src="https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png"
                            />
                            <h1
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                Mingizuk
                            </h1>

                            <div onClick={(e) => e.stopPropagation()}>
                                {isSupport && !isInstalled() && (
                                    <div className="install-btn-warp">
                                        <button
                                            className="install-btn"
                                            type="button"
                                            onClick={handleClick}
                                        >
                                            다운받기 : 앱으로 이용 하실 수
                                            있어요 ❤️
                                        </button>
                                    </div>
                                )}
                                {!isSupport && (
                                    <div className="install-btn-warp">
                                        <button
                                            className="install-btn"
                                            type="button"
                                            onClick={() => setDescModal(true)}
                                        >
                                            다운 받을 수 없습니다. ( 왜요 ? )
                                        </button>
                                    </div>
                                )}
                            </div>
                        </article>
                    </section>
                    {descModal && (
                        <div className="mingi-modal-container">
                            <p className="install-desc">
                                앱이 이미 깔려있다면{' '}
                                <strong>지우고 다시 깔아주세요</strong>
                                <br /> <br />
                                아이폰은 <strong>Safari</strong> , 안드로이드 /
                                데스크탑은 <strong>Chorme</strong>을
                                이용해주세요. (시크릿탭 제외)
                                <br /> <br /> 위 조건을 모두 충족한다면, 약
                                <strong> 10초만 기다려주세요.</strong> 밍기적이
                                버튼을 곧 바꿀거에요 !
                                <a
                                    className="error-a"
                                    href="mailto:miraculous0006@gmail.com"
                                    target="_blank"
                                >
                                    <p className="error">
                                        오류 문의 : miraculous0006@gmail.com
                                    </p>
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Downlaod
