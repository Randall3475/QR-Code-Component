import * as S from './style';

type QrCodeProps = {
  image: string;
  description: string;
  heading: string;
  paragraph: string;
};

const QrCode = ({ image, description, heading, paragraph }: QrCodeProps) => {
  return (
    <>
      <S.Card>
        <S.Image src={image} alt={description} />
        <S.Heading>{heading}</S.Heading>
        <S.Paragraph>{paragraph}</S.Paragraph>
      </S.Card>
    </>
  );
};

export default QrCode;
