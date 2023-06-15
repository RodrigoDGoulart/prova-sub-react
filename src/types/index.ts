export interface IndicadorPaisProps {
    pais: PaisProps;
    indicador: IndicadorProps;
    serie: SerieProps[];
}

export interface IndicadorProps {
    id: number;
    nome: string;
}

export interface PaisProps {
    id: string;
    nome: string;
}

export interface SerieProps {
    periodo: string;
    valor: number | null;
}

export interface ErrorProps {
    error: string;
}

export interface ContextProps {
    setPais: Function;
    setIndicador: Function;
    paises: PaisProps[];
    indicadores: IndicadorProps[];
    indicadoresPorPais: IndicadorPaisProps | undefined;
}
