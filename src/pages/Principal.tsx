import { useEffect } from "react";
import styled from "styled-components";
import { useContexto } from "../hooks";
import Botao from "../components/Botao";

export default function Principal() {
  const {
    paises, 
    indicadores,
    setPais,
    setIndicador,
    indicadoresPorPais
  } = useContexto();

  useEffect(() => {
    console.log(indicadoresPorPais)
  }, [indicadoresPorPais]);
  return (
    <WrapperSld>
      <BoxSld>
        <TitleSld>Países</TitleSld>
        {paises && paises.map(pais => (
          <Botao
          key={pais.id}
          onClick={() => setPais(pais)}>
            {pais.nome}
          </Botao>
        ))}
      </BoxSld>
      <BoxSld>
        <TitleSld>Indicadores</TitleSld>
        {indicadores && indicadores.map(ind => (
          <Botao
          key={ind.id}
          onClick={() => setIndicador(ind)}>
            {ind.nome}
          </Botao>
        ))}
      </BoxSld>
      <BoxSld>
        <TitleSld>Indicadores</TitleSld>
        {indicadoresPorPais && (
          <>
            <TitleSld>{indicadoresPorPais.pais.nome}</TitleSld>
            <TitleSld>{indicadoresPorPais.indicador.nome}</TitleSld>
            {indicadoresPorPais.serie.map((indPais, index) => (
              <div key={index}>
                {`${indPais.periodo}: ${indPais.valor}`}
              </div>
            ))}
          </>
        )}
      </BoxSld>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 900px;
  margin-top: 20px;
  box-sizing: border-box;
`;

const BoxSld = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  margin: 0px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
`;
const TitleSld = styled.h5`
  text-align: center;
  margin: 0px 0px 10px 0px;
`;

const InfoSld = styled.div`
  maring-top: 4px;
  maring-bottom: 4px;
`
