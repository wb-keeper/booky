const Reservation = ({
  reservations,
  room,
  isUserAuthenticated,
  userData,
}: {
  reservations: any;
  room: any;
  isUserAuthenticated: boolean;
  userData: any;
}) => {
  console.log(reservations);
  return <div>res</div>;
};

export default Reservation;
