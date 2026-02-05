import styled from "styled-components";
import Card from "../../components/Organism/Card";

type TripCard = {
  imageUrl?: string;
  tripId: number;
  title: string;
  startDate: string;
  endDate: string;
};

const tripData: TripCard[] = [
  {
    tripId: 1,
    title: "제주도 힐링 여행",
    startDate: "2026-03-01",
    endDate: "2026-03-05",
  },
  {
    tripId: 2,
    title: "도쿄 벚꽃 투어",
    startDate: "2026-04-10",
    endDate: "2026-04-15",
  },
  {
    tripId: 3,
    title: "방콕 맛집 탐방",
    startDate: "2026-05-20",
    endDate: "2026-05-25",
  },
  {
    tripId: 4,
    title: "파리 미술관 투어",
    startDate: "2026-06-01",
    endDate: "2026-06-08",
  },
  {
    tripId: 5,
    title: "부산 해운대 여름",
    startDate: "2026-07-15",
    endDate: "2026-07-18",
  },
  {
    tripId: 6,
    title: "오사카 먹방 여행",
    startDate: "2026-08-05",
    endDate: "2026-08-10",
  },
  {
    tripId: 7,
    title: "다낭 리조트 휴양",
    startDate: "2026-09-12",
    endDate: "2026-09-16",
  },
  {
    tripId: 8,
    title: "런던 역사 탐방",
    startDate: "2026-10-01",
    endDate: "2026-10-07",
  },
];

const TripPage = () => {
  return (
    <CardGrid>
      {tripData.map((trip) => (
        <Card key={trip.tripId} {...trip} />
      ))}
    </CardGrid>
  );
};

export default TripPage;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
`;
