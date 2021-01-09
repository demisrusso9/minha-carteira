import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
   const options = [
      { value: "Demis", label: "Demis" },
      { value: "Russo", label: "Russo" },
      { value: "Mendes", label: "Mendes" },
   ];

   return (
      <Container>
         <ContentHeader title="Dashboard" lineColor="#FFF">
            <SelectInput options={options} />
         </ContentHeader>
      </Container>
   );
};

export default Dashboard;
