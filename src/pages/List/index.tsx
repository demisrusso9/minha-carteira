import { useMemo } from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";

interface IRouteParams {
   match: {
      params: {
         type: string;
      };
   };
}

const List: React.FC<IRouteParams> = ({ match }) => {
   const { type } = match.params;

   const listProps = useMemo(() => {
      return type === "entry-balance"
         ? {
              title: "Entradas",
              lineColor: "#F7931B",
           }
         : {
              title: "Saídas",
              lineColor: "#E44C4E",
           };
   }, [type]);

   const months = [
      { value: 1, label: "Janeiro" },
      { value: 2, label: "Fevereiro" },
      { value: 3, label: "Março" },
      { value: 4, label: "Abril" },
      { value: 5, label: "Maio" },
      { value: 6, label: "Junho" },
      { value: 7, label: "Julho" },
      { value: 8, label: "Agosto" },
      { value: 9, label: "Setembro" },
      { value: 10, label: "Outubro" },
      { value: 11, label: "Novembro" },
      { value: 12, label: "Dezembro" },
   ];

   const years = [
      { value: 2021, label: 2021 },
      { value: 2020, label: 2020 },
      { value: 2019, label: 2019 },
      { value: 2018, label: 2018 },
   ];

   return (
      <Container>
         <ContentHeader title={listProps.title} lineColor={listProps.lineColor}>
            <SelectInput options={months} />
            <SelectInput options={years} />
         </ContentHeader>

         <Filters>
            <button className="tag-filter">Recorrentes</button>
            <button className="tag-filter">Eventuais</button>
         </Filters>

         <Content>
            <HistoryFinanceCard
               tagColor="#F00"
               title="dying light"
               subtitle="03/1/2021"
               amount="R$ 400,00"
            />
         </Content>
      </Container>
   );
};

export default List;
