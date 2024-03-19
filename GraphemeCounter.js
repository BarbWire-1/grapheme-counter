// Does NOT count for unknown charCodes ("db40")- like in Intl flags!!!

function countCharacters(str) {
    // exclude diacritical marks
    const graphemeRegex = /\P{M}\p{M}*?/gu;
    const graphemeClusters = str.match(graphemeRegex) || [];

    // filter out unknown characters with code "db40"
    const filteredClusters = graphemeClusters.filter(
        (cluster) => cluster.charCodeAt(0) !== 0xdb40
    );

    let count = 0;
    let isInCombinedSequence = false;

    /*
    console.log("chars: ", [...str]);
    console.log(
         "unicode:",
         [...str].map(
              (c) => c.charCodeAt(0).toString(16).toLowerCase()
         )
    );
    console.log("clusters: ", graphemeClusters);
    */

    for (const cluster of filteredClusters) {
        // detect ZWJ - combined emoji
        if (cluster === "\u200D") {
            isInCombinedSequence = true;
        } else if (!isInCombinedSequence) {
            count++;
        }

        // set flag back to false at next single char-cluster
        if (cluster !== "\u200D" && !cluster.match(/\p{Emoji_Modifier}/gu)) {
            isInCombinedSequence = false;
        }
    }

    return { count };
}

// set the property <count> on String to use it like length
// but returning not chars number but number of graphemeClusters
function initStringCountProperty() {
    // ensure to only once
    if (String.prototype.count) return;
        Object.defineProperty(String.prototype, "count", {
            get: function () {
                return countCharacters(this).count;
            }
        });

}

export { countCharacters, initStringCountProperty };
