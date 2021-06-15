import SafeEnvinroment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
	FormElementsContainer,
	ProfissionalsPaper,
	ProfessionalsContainer,
} from "@styles/pages/index.styled";
import {
	Button,
	Typography,
	Container,
	CircularProgress,
} from "@material-ui/core";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
	const {
		cep,
		setCep,
		cepValido,
		buscarProfissionais,
		erro,
		diaristas,
		buscaFeita,
		carregando,
		diaristasRestantes,
	} = useIndex();

	return (
		<div>
			<SafeEnvinroment />
			<PageTitle
				title={"Conheça os profissionais"}
				subtitle={
					"Preencha seu endereço e veja todos os profisisonais da sua região"
				}
			/>

			<Container>
				<FormElementsContainer>
					<TextFieldMask
						mask={"99.999-999"}
						label={"Digite seu CEP"}
						fullWidth
						variant={"outlined"}
						value={cep}
						onChange={(event) => setCep(event.target.value)}
					/>
					{erro && <Typography color={"error"}>{erro}</Typography>}

					<Button
						variant={"contained"}
						color={"secondary"}
						sx={{ width: "220px" }}
						disabled={!cepValido || carregando}
						onClick={() => buscarProfissionais(cep)}
					>
						{carregando ? <CircularProgress size={20} /> : "Buscar"}
					</Button>
				</FormElementsContainer>

				{buscaFeita &&
					(diaristas.length > 0 ? (
						<ProfissionalsPaper>
							<ProfessionalsContainer>
								{diaristas.map((diarista, index) => {
									return (
										<UserInformation
											key={index}
											name={diarista.nome_completo}
											picture={diarista.foto_usuario}
											rating={diarista.reputacao}
											description={diarista.cidade}
										/>
									);
								})}
							</ProfessionalsContainer>

							<Container sx={{ textAlign: "center" }}>
								<Typography sx={{ mt: 5 }}>
									...e mais {diaristasRestantes}{" "}
									{diaristasRestantes > 1
										? "profissionais atendem"
										: "profissional atende"}{" "}
									seu endereço
								</Typography>

								<Button
									variant={"contained"}
									color={"secondary"}
									sx={{ mt: 5 }}
								>
									Contratar um profissional
								</Button>
							</Container>
						</ProfissionalsPaper>
					) : (
						<Typography align={"center"} color={"textPrimary"}>
							Ainda não temos nenhuma diarista disponivel em sua
							região
						</Typography>
					))}
			</Container>
		</div>
	);
}
