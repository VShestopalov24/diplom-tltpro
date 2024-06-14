import Header from "~/components/Header";
import Filter from "~/components/Filter";
import EmployeeCards from "~/components/Employee-cards";
import { payments } from "~/helpers/payments";

export default function Employee() {

  return (
    <main>
      <Header></Header>
      <div class="flex flex-col md:flex-row px-3 sm:px-8 md:px-12 relative">
        <Filter></Filter>
        <div class="w-full px-4">
          <h2 class="text-xl sm:text-2xl md:text-3xl text-center mb-7 font-medium">Ваши выплаты</h2>
          <div class="flex flex-wrap justify-around gap-8 pb-12">
            {payments.map((payment, index) => (
              <EmployeeCards key={index} payment={payment}></EmployeeCards>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
