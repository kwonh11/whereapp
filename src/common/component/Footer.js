import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import SvgIcon from '@material-ui/core/SvgIcon';

// footer컨테이너 100vw 로 width설정하면 스크롤발생
const FooterContainer = styled.footer`
    position: absolute;
    margin-top : 200px;
    top: auto;
    left: 0;
    width: 100%;
    height: 180px;
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
`;
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    & > div {
        margin: 0 8px;
    }
`;
const InfoWrap = styled.div`
    height: 30px;
    width: 100%;
    color: darkgray;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
        padding: 0 12px;
        margin-bottom: 5px;
    }
`;


export default function Footer() {
    return (
        <FooterContainer>
            <IconContainer>
                <Avatar>
                    {/* 메일 아이콘 */}
                    <MailIcon />
                </Avatar>
                <Avatar>
                    {/* 카카오 아이콘 */}
                    <SvgIcon>
                    <svg  viewBox="0 0 208 191.94">
                        <path xmlns="http://www.w3.org/2000/svg" className="cls-1" d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z"/>
                    </svg>
                    </SvgIcon>
                </Avatar>
                <Avatar>
                    <SvgIcon>
                        <path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </SvgIcon>
                </Avatar>
            </IconContainer>
            <InfoWrap>
                <span>Copyright {new Date().getFullYear()}. JunHyuk, Gyu all right reserved.</span>
            </InfoWrap>
        </FooterContainer>
    )
}