const getUserReservations = async (userEmail: any) => {
  const res = await fetch(
    `http://127.0.0.1:1337/api/reservations?[filters][email][$eq]=${userEmail}&populate=*`,
    {
      next: {
        revalidate: 0,
      },
    },
  );
  return await res.json();
};
const Dashboard = () => {
  return <section className="min-h-[80vh]">dash</section>;
};

export default Dashboard;
