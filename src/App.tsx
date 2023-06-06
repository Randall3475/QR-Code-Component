import Global, { Main } from './styles/Global';
import QrCode from './components/QrCode';
import QrCodeImage from './assets/images/image-qr-code.png';
const App = () => {
  return (
    <>
      <Global />
      <Main>
        <QrCode
          image={QrCodeImage}
          description="QR code leading to frontendmentor.io website"
          heading="Improve your front-end skills by building projects"
          paragraph="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        />
      </Main>
    </>
  );
};

export default App;
