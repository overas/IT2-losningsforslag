<!-- streng-testsamling/+page.svelte -->
<script>
    import { beregnFart } from "../bibliotek/hjelpemidler-strenger.js";
    import ErLikTest from "../komponenter/ErLikTest.svelte";

    // Første verdi er inndataene, andre er resultatet.
    let AvstandTidtilFartTilfeller = [
        /* Dette er array verdier så indeks 0 er den første verdien, 
        andre verdi er indeks 1 osv */
        // Vanlige tilfeller
        [[100], [10], 10],
        [[500], [25], 20],
        //Sjekker at funksjonen håndterer deling på null riktig
        [[500], [0], null],
        //Sjekker at funksjonen håndterer desimaltall korrekt
        [[0.5], [0.1], 5],
        //Sjekker at funksjonen håndterer større verdier uten problemer
        [[1000000], [500], 2000],
        //Hvordan funksjonen håndterer negative verdier
        [[-100], [10], -10],
        [[100], [-10], -10],
    ];
</script>

<h1>Enhetstester for hjelpemidler-strenger.js</h1>

<h2>beregnFart</h2>

<ul>
    {#each AvstandTidtilFartTilfeller as data}
        <li>
            <!-- Legger til en ekstra variabel inndata2 
             som inneholder verdien av argument 2 -->
            <ErLikTest
                inndata1={data[0]}
                inndata2={data[1]}
                forventetUtdata={data[2]}
                funksjon={beregnFart}
            />
        </li>
    {/each}
</ul>
