import graph1 from "../images/graph1.png"
import graph2 from "../images/graph2.png"
import tabulka1 from "../images/tabulka1.png"
import tabulka2 from "../images/tabulka2.png"
import {Row,Col} from 'react-bootstrap'
/**
 * Render page about automaton's document
 * @param {*} props 
 * @returns <p> tag
 */
const Documents=(props)=>{
    return(
        <p style={{paddingLeft: "10em"}}>
            <h2>1.1 Jazyk a jeho konečná reprezentace</h2>
            <b>1.1.1 Abeceda</b>
            <br/>&emsp;- Abeceda je libovolná konečná množina prvků, které nazýváme symboly (nebo písmena či znaky). Abecedu budeme značit Σ (řecké písmeno velké sigma).
            <br/>příklad: abeceda Σ ,která má dva symboly 0 a 1.
            <br/><b>1.1.2 Slovo </b>
            <br/>&emsp;- Slovo nad abecedou Σ, stručněji jen slovo, je libovolná konečná posloupnost prvků množiny Σ, kterou budeme zapisovat bez čárek mezi jejími prvky. Množinu všech slov nad abecedou Σ označujeme výrazem Σ∗. Délka slova je počet prvků v tomto slově. Délku slova u označujeme |u|. Slovo o délce 0 nazýváme prázdné slovo a značíme ε (řecké písmeno epsilon).
            <br/>příklad: slovo u = 00101001.
            <br/><b>1.1.3 Jazyk</b>
            <br/>- Jazyk nad abecedou Σ definujeme jako libovolnou množinu slov nad abecedou Σ, tedy jako libovolnou podmožinu množiny všech slov Σ∗ nad abecedou Σ. Jazyk značíme L
            <br/>příklad: Jazyk L který má prvky ε,0,1,10,11 a 00.
            <br/>
            <h2>1.2 Konečný automat</h2>
            <b>1.2.1 Deterministický:</b>
            <br/>&emsp;- Deterministický konečný  automat se definuje jako uspořádaná pětice A = (Q,Σ,δ,q0,F), kde Q je konečná neprázdná množina stavů, Σ je konečná neprázdná množina vstupních symbolů (abeceda), δ: Q x Σ →Q přechodová funkce, q0 ∈Q je počáteční stav a F⊆ Q je množina kocových stavů a platí. 
            <br/><b>1.2.2 Nedeterministický:</b>
            <br/>&emsp;- Nedeterministický konečný automat je takový konečný automat A = (Q, Σ, δ, q0, F), kde přechodová funkce δ : Q × Σ → P(Q), přičemž ostatní součásti definice jsou stejné jako u (deterministického) konečného automatu.
            <br/><b>1.2.3 Reprezentace automatu:</b>
            <br/>&emsp;- Stavovým diagramem(grafem):
            <Row>
                <Col>
                    <cite> Deterministický konečný  automat</cite>
                    <img  width="450" height="200" src={graph1} alt="graf deter.kon.automatu"/>
                </Col>
                <Col>
                    <cite> Nedeterministický konečný  automat</cite>
                    <img  width="450" height="200" src={graph2} alt="graf nedeter.kon.automatu"/>
                </Col>
            </Row>
            <br/>&emsp;- Přechodovou tabulkou:
            <Row>
                <Col>
                    <img width="650" height="200" src={tabulka1} alt="tabulka deter.kon.automatu"/>
                </Col>
                <Col> 
                    <img  width="650" height="200" src={tabulka2} alt="tabulka nedeter.kon.automatu"/>
                </Col>
            </Row>
            <br/>&emsp;- δ-funkcí. δ(vypnuto, zapni) = zapnuto
            <br/><b>1.2.4 Reprezentace automatu:</b>
            <br/>&emsp;- Nechť je dán konečný automat A = (Q, Σ, δ, q0, F). Řekneme, že slovo w ∈ Σ∗ je přijímáno (rozpoznáváno) automatem A, jestliže q0 w−→ F, tedy pokud automat A přejde z počátečního stavu q0 přečtením slova w do některého koncového stavu z množiny F.
        </p>
    );
}
export default Documents