import {fetchFromScratch} from './fetchFromScratch.js'

export class scriptRequisicaoBackend {
    constructor() {
        this.url = "https://back.guugascode.site"
        
        this.fetchBack = new fetchFromScratch(this.url)
    }
    
    async ObterContagemPorEtnia(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("RelatorioRefatorado/contagemporetnia" + personalizada);
    }

    async ObterContagemPorSexo(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("RelatorioRefatorado/contagemporsexo" + personalizada);
    }

    async ObterContagemPorEstabelecimento(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("RelatorioRefatorado/contagemporestabelecimento" + personalizada);
    }

    async ObterContagemPorNacionalidade(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("RelatorioRefatorado/contagempornacionalidade" + personalizada);
    }

    async ObterContagemPorDose(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("RelatorioRefatorado/contagempordose" + personalizada);
    }

    async ObterContagemPorCategoria(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("RelatorioRefatorado/contagemporcategoria" + personalizada);
    }

    async ObterContagemPorVacina(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?quantidade=5&dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("RelatorioRefatorado/contagemporvacinas" + personalizada);
    }

    async ObterContagemPorGrupo(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?quantidade=5&dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("RelatorioRefatorado/contagemporgrupo" + personalizada);
    }

    async ObterTotalizador() {
        return await this.fetchBack.dataReturn("RelatorioRefatorado/totalizadores");
    }
}
