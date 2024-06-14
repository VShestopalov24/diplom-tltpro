import Header from "~/components/Header";
import Filter from "~/components/Filter";
import ManagerCards from "~/components/Manager-card";
import { payments } from "~/helpers/payments";

export default function Manager() {

  return (
    <main>
        <Header></Header>
        <div class="flex flex-col md:flex-row px-3 sm:px-8 md:px-12 relative">
          <Filter></Filter>
          <div class="w-full px-4">
            <h2 class="text-xl sm:text-2xl md:text-3xl text-center mb-7 font-medium">Все выплаты сотрудников</h2>
            <div class="flex flex-wrap justify-around gap-8 pb-12">
              {payments.map((payment, index) => (
                <ManagerCards key={index} payment={payment}></ManagerCards>
              ))}
            </div>
          </div>
        </div>
    </main>
  );
}
