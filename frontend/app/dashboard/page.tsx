import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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
const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userReservations = await getUserReservations(user?.email);
  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto py-8 h-full">
        <h3 className="h3 font-bold mb-12 border-b">My bookings</h3>
        <div>
          {userReservations.data.length < 1 ? (
            <div>
              <p>You don't have any reservations</p>
            </div>
          ) : (
            userReservations.data.map((reservation: any) => {
              return <div>res</div>;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
