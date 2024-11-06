<!-- komponenter/ErLikTest.svelte -->
<script>
    /** Funksjonen vi ønsker å teste. */
    export let funksjon;
    /** To argumenter funksjonen skal få. Oppgis som et array. */
    export let inndata1; //Legger til argument 2 i funksjon beregnFart
    export let inndata2; //Legger til argument 2 i funksjon beregnFart
    /** Resultatet vi forventer at funksjonen skal returnere. */
    export let forventetUtdata;

    // Variabler som brukes til å lagre utfallet av testen
    let feil;
    let erLike;
    let resultat;

    /* Inputargument 1 og 2 er arrayer. For å få ett array istedenfor to
    kombinerer vi inndata1 og inndata2 for testing som ett array */
    let inndata = [...inndata1, ...inndata2];
    //console.table(inndata);

    try {
        /*
         * Når vi skriver "enFunksjon(...etArray)",
         * legger datamaskinen inn verdiene i etArray
         * som argumenter til funksjonen:
         * Første verdi blir første argument, andre verdi
         * blir andre argument og så videre.
         */
        //resultat = funksjon(...inndata1);
        /*Vi bruker array inndata som inneholder verdier 
        for array inndata 1 og 2. 
        Dette gjør det enklere da vi ikek trenger å endre på mer av koden*/
        resultat = funksjon(...inndata);
        erLike = resultat === forventetUtdata;
    } catch (error) {
        /*
         * Fordi funksjon er under utvikling mens vi tester,
         * kan den krasje. I så fall lagrer vi feilen
         * til variabelen "feil" og logger den til konsollen.
         */
        feil = error;
        console.log(error);
    }
</script>

<!--
    Emojier som gjør det lett å se om testene
    passerte, feilet eller krasjet.
    Vi har valgt emojier med forskjellig form
    og farge for å hjelpe fargeblinde.
-->
{#if feil}💥{:else if erLike}✅{:else}❌{/if}
<!--
    Viser forventede inndata og utdata.
    Bruker JSON.stringify for å vise kodedetaljer,
    som hakeparenteser og hermetegn, rundt dataene.
-->
<span class="data">{JSON.stringify(inndata)}</span>
->
<span class="data">{JSON.stringify(forventetUtdata)}</span>
<!-- Hvis testen feilet eller krasjet, vil vi vise mer. -->
{#if feil || !erLike}
    <ul>
        <li>
            {#if feil}
                <!--
                    Begrenser oss til feil.message, som er en oppsummering.
                    Brukeren kan åpne konsollen for å se hele feilmeldingen.
                -->
                KRASJET: <span class="data">"{feil.message}"</span>
            {:else}
                Fikk -> <span class="data">{JSON.stringify(resultat)}</span>
            {/if}
        </li>
    </ul>
{/if}

<style>
    .data {
        font-family: monospace; /* Kodeskrift */
        white-space: pre; /* La alle mellomrom stå. */
    }
</style>
