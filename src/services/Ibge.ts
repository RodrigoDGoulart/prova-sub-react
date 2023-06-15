import api from "./api";
import { SerieProps, IndicadorPaisProps, PaisProps, IndicadorProps, ErrorProps } from "../types";
import { indicadores, paises } from "./dados";

class Ibge {
  getPaises(): PaisProps[]{
    return paises;
  }

  getIndicadores(): IndicadorProps[]{
    return indicadores;
  }

  async getIndicadorePorPais(pais: string, indicador: number): Promise<IndicadorPaisProps | ErrorProps> {
    try {
      const { data } = await api.get(`/${pais}/indicadores/${indicador}`);
      if (data.length === 1) {
        const indicador: IndicadorProps = { id: data[0].id, nome: data[0].indicador };
        const pais: PaisProps = data[0].series[0].pais;
        const serie: SerieProps[] = [];
        for (let i = 0, dados = data[0].series[0].serie; i < dados.length; i++) {
          for (let name in dados[i]) {
            if (name !== "-") {
              serie.push({ periodo: name, valor: dados[i][name] != null ? parseFloat(dados[i][name]) : null });
            }
          }
        }
        return { indicador, pais, serie };
      }
      else{
        return { error: data };
      }
    }
    catch (e:any) {
      return { error: e.message };
    }
  }
}

const ibge = new Ibge();
export default ibge;
