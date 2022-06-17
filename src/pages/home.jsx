const Home=(props)=>{
    return(
        <p style={{paddingLeft: "10em"}}>  
            <h2>Zadaní projektu</h2>
            &emsp;S využitím knihovny ReactJS vytvořte komponentu pro zobrazení a minimalistickou editaci orientovaného grafu, tj. entity s pojmenovanými vrcholy (odchozí a příchozí hrany) a hranami (počáteční a koncový vrchol). Pro vizualizaci využijte SVG. Potřebná data převezměte z props.
            <h2>Abstrakt</h2>
            &emsp;Cílem webové aplikace: Webové editor pro konečný automat, který slouží pro podporu výuky. Aplikace musí umožnit uživateli 
            zadat konečný automat ručně nebo souboru. Zadaný automat musím přehledně vykreslit.
            <br/>&emsp;<b>Klíčová slova:</b> Abeceda, slovo, konečný automat, SVG, React

            <h2>Použití technologie</h2>
            &emsp;React, SVG(Scalable Vector Graphics), ostatni knihovny.

            <h2>Použití funkce</h2>
            1 Zadání konečný automat
            <br/>&emsp;1.1 Ručně(Tvořva automatu)
            <br/>&emsp;1.2 Načtení ze souboru(Import)   
            <br/>&emsp;1.3 Výběr z příkladů(Template page)  
            <br/>2.0 Uprava
            <br/>3.0 Slovo je prijímano automatem
            <br/>4.0 Přechodová tabulka
            <br/>5.0 Download

            <h2>Struktura stránky Automat a jeho hlavní komponenty</h2>
            1. Handle: 
            <br/>&emsp;- Komponenta je zodpovědná za poskytování proměnných vrcholů, hran, symbolů a funkcí pro jejich úpravu, přidání nebo odstranění. Pokládá se z komponent HandlePoints, HandleEdges a HandleSymbols.
            <br/>2. Graph:
            <br/>&emsp;- Komponenta představuje automat ve formátu SVG. Pokládá se z komponent Points,Edges a GrafInf.
            <br/>3. WordTest:
            <br/>&emsp;- Komponenta určuje, zda slovo je přijímáno automatem.
            <br/>4. StateTransitionTable:
            <br/>&emsp;- komponenta je zodpovědná za reprezentaci přechodové tabulky automatu.
            <br/>5. Import a Download:
            <br/>&emsp;5.1 Import: Používájí se element input, object FileReader, method readAsText() a method onLoad(). Cílem je načtení json soubor jako initial data.
            <br/>&emsp;5.2 Download: Používá se function saveAs od knihovny file-saver. Cílem je uložení svg element jako html soubor.
        </p>
    );
}
export default Home