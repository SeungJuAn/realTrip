import styled from "styled-components";

type TripCard = {
  imageUrl?: string;
  tripId: number;
  title: string;
  startDate: string;
  endDate: string;
};

const Card = ({ imageUrl, title, startDate, endDate }: TripCard) => {
  return (
    <CardWrapper>
      <ImageArea>
        {imageUrl ? (
          <CardImage src={imageUrl} alt={title} />
        ) : (
          <PlaceholderImage>
            <span>&#9992;</span>
          </PlaceholderImage>
        )}
      </ImageArea>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDate>
          {startDate} ~ {endDate}
        </CardDate>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.md};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

const ImageArea = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 40px;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDate = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
