import { createContext, useEffect, useState } from "react";
import { ContextProps, IndicadorPaisProps, IndicadorProps, PaisProps, ErrorProps } from "../types";
import ibge from "../services/Ibge";

const Contexto = createContext({} as ContextProps);

function Provider ({children}: any) {
  const [paises, setPaises] = useState<PaisProps[]>([]);
  const [indicadores, setIndicadores] = useState<IndicadorProps[]>([]);
  
  const [pais, setPais] = useState<PaisProps>();
  const [indicador, setIndicador] = useState<IndicadorProps>();

  const [indicadoresPorPais, setIndicadoresPorPais] = useState<IndicadorPaisProps | undefined>();

  useEffect(() => {
    setPaises(ibge.getPaises());
    setIndicadores(ibge.getIndicadores());
  }, []);

  useEffect(() => {
    if (pais && indicador) {
      console.log(pais);
      console.log(indicador);
      ibge.getIndicadorePorPais(pais.id, indicador.id)
      .then(data => {
        console.log(pais);
        console.log(indicador);
        if ('error' in data) {
          console.log('outro erro ', data);
        } else {
          setIndicadoresPorPais(data);
        }
      })
      .catch(e => console.log('erro api: ', e));
    }
  }, [pais, indicador]);
  return(
    <Contexto.Provider value={{
      paises,
      indicadores,
      setPais: setPais as Function, 
      setIndicador: setIndicador as Function,
      indicadoresPorPais
    }}>
      {children}
    </Contexto.Provider>
  )
}

export {
  Contexto,
  Provider
}