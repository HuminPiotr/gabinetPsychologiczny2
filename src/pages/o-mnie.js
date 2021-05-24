import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import RoundedImage from "../components/roundedImage"


export default ({ data,location }) => {

    const siteData = data.site.siteMetadata;

    return (
        <Layout
            seo={{
                title: "Psycholog Anna Humin",
            }}
            location={location}
        >
        <div className="boxed">

        <div className="px-4 py-10 text-center lg:py-20 lg:px-0">
            <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                O mnie
            </h2>
            <div className="md:flex items-center" >

                <RoundedImage src={siteData.personImage} />

                <div className="text-left text-lg">
                    <p>Dzień dobry!</p> 
                    <p>Nazywam się Anna Humin. Jestem psychologiem z 30 letnim doświadczeniem zawodowym. </p> <p>Ważny jest dla mnie dobry kontakt z klientem, żeby czuł się w mojej obecności bezpiecznie, czuł się szanowany, rozumiany i akceptowany.</p>
                    
                    <h3>Specjalizuję się szczególnie w obszarach:</h3>
                    
                    <ul className="list-disc pl-10">
                        <li>trudności wychowawczych</li>
                        <li>edukacji i treningu <strong>umiejętności komunikacji interpersonalnych</strong> - sprzyjających budowaniu relacji w rodzinie i poza rodziną </li>
                        <li>radzeniu sobie z emocjami i edukacji w zakresie funkcji emocji w rozwoju osobistym</li>
                        <li>usuwania <strong>dolegliwości psychosomatycznych </strong>(tiki nerwowe, bóle głowy, bóle brzucha, jąkanie, moczenie mimowolne itp.)</li>
                        <li>diagnozy sprawności intelektualnych dorosłych <strong>metodą WAIS </strong></li>
                    </ul>

                    <h3>Moje motta:</h3>
                    <p>"Chcesz zmienić czy zrozumieć świat? Zacznij od siebie."</p>
                    <p>"Pokochaj siebie a wszystko zacznie Ci sprzyjać!"</p>

            </div>
            
        </div>
        <div className="text-left text-lg">
        <h3>Kwalifikacje</h3>
                    <p>Ukonczyłam studia magisterskie na Katolickim Uniwersytecie Lubelskim - Wydział Nauk Społecznych w zakresie psychologii z przygotowaniem pedagogicznym.</p>
                    <p>Wiele lat pracowałam w Poradni Psychologiczno-Pedagogicznej w Białej Podlaskiej na stanowisku psychologa. Obecnie prowadzę prywatny gabinet psychologiczny i pracuję w poradni Powrót z "U". </p>
                    <h3>Szkolenia i kursy:</h3>
                    <ul className="list-disc pl-10">
                        <li>Bardzo liczne kursy z obszaru psychologi wychowawczej i metod wspomagania rozwoju dziecka</li>
                        <li>Liczne kursy z zakresu profilaktyki uzależnień i psychoedukacji</li>
                        <li>Kurs profilaktyki agresji przemocy wśród młodzieży "Trening Zastępowania Agresji"</li>
                        <li>Kurs w zakresu konstruktywnego rozwiązywania konfliktów i sporów</li>
                        <li>Szkolenie na temat "dialog w małżeństwie i rodzinie"</li>
                        <li>Kurs "Jak pomagać dziecku z zaburzeniami emocji?"</li>
                        <li>Warsztat metodyczny (25godz.) w zakresie "Wspieranie rozwoju inteligencji emocjonalnej"</li>
                        <li>Trening psychoedukacyjny "Korzystna autoprezentacja (24 godz.) </li>
                        <li>Kurs przygotowujący do realizacji programu budowania dobrych relacji rodzic-dziecko "Szkoła dla rodziców i wychowawców"</li>
                        <li>I wiele innych</li>
                    </ul>

                    <h3>Prywatnie</h3>
                    <p>Obecnie jestem emerytką zakochaną w swojej rodzinie i w samorozwoju. Jest to czas piękny w którym na nowo odkrywam siebię i coraz bardziej zachwyca mnie możliwość ciągłego wzrastania, doceniania tego co jest i co się wydarza.</p>
                    <p>Lubię spotkania rodzinne, odkrywanie dobra w każdym człowieku, jego talentów i możliwości. Lubię tańczyć.</p>
                    <br/>
                    <p>Zapraszam Cię do mojego gabinetu.</p>

                
            
           </div> 
        </div>
        </div>
        </Layout>
    )
}

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                personImage
            }
        }
    }
`
