<script>
    let tid = 0;
    let avstand = 0;
    let fart = 0;

    const beregnFart = (avstand, tid) => {
        if (tid > 0) {
            // Unngå divisjon med null
            fart = avstand / tid;
            return fart;
        } else {
            return "Ugyldig tid";
        }
    };
</script>

<main style="background-color: #add8e6;">
    <h1>Hastighet basert på distanse og tid</h1>

    <label>
        Skriv avstand i meter: <input type="number" bind:value={avstand} />
    </label><br /><br />

    <label>
        Skriv inn tiden i sekunder: <input type="number" bind:value={tid} />
    </label>

    <p><b>Farten i m/s er: {beregnFart(avstand, tid)}</b></p>
</main>
