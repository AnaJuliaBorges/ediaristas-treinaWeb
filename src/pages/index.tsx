import SafeEnvinroment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
	return (
		<div>
			<SafeEnvinroment />
			<PageTitle
				title={"Conheça os profissionais"}
				subtitle={
					"Preencha seu endereço e veja todos os profisisonais da sua região"
				}
			/>

			<UserInformation
				name={"Maju borges"}
				picture={"https://github.com/AnaJuliaBorges.png"}
				rating={3}
				description={"São Paulo"}
			/>

			<UserInformation
				name={"Naju borges"}
				rating={4}
				description={"São Paulo de Minas"}
			/>
		</div>
	);
}
