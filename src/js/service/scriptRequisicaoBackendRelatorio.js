import {fetchFromScratch} from './fetchFromScratch.js'

export class scriptRequisicaoBackendRelatorio {
    constructor() {
        this.url = "https://back.guugascode.site"
        
        this.fetchBack = new fetchFromScratch(this.url)
    }
    
    async ObterContagemPorEtnia(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("Relatorio/contagemporetnia" + personalizada);
    }

    async ObterContagemPorSexo(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("Relatorio/contagemporsexo" + personalizada);
    }

    async ObterContagemPorEstabelecimento(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("Relatorio/contagemporestabelecimento" + personalizada);
    }

    async ObterContagemPorNacionalidade(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("Relatorio/contagempornacionalidade" + personalizada);
    }

    async ObterContagemPorDose(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("Relatorio/contagempordose" + personalizada);
    }

    async ObterContagemPorCategoria(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("Relatorio/contagemporcategoria" + personalizada);
    }

    async ObterContagemPorVacina(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?quantidade=5&dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("Relatorio/contagemporvacinas" + personalizada);
    }

    async ObterContagemPorGrupo(dataInicial = "", dataFinal = "") {
        let personalizada = dataFinal == null ? "" : `?quantidade=5&dataMin=${dataInicial}&dataMax=${dataFinal}`;
        return await this.fetchBack.dataReturn("Relatorio/contagemporgrupo" + personalizada);
    }

    async ObterTotalizador() {
        return await this.fetchBack.dataReturn("Relatorio/totalizadores");
    }
}
