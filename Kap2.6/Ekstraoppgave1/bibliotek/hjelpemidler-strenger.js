// bibliotek/hjelpemidler-strenger.js
let avstand = 0;
let tid = 0;
let fart = 0;

export const beregnFart = (avstand, tid) => {
    if (tid > 0) {
        // Oppgave d) Unngå divisjon med null
        fart = avstand / tid;
        return fart;
    } else {
        return "Ugyldig tid";
    }
};