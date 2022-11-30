const [letters, setLetters] = useState([
    {
        letter: 'm',
        css: 'scaleY(1)'
    },
    {
        letter: 'a',
        css: 'scaleY(1)'
    },
    {
        letter: 'x',
        css: 'scaleY(1)'
    },
    {
        letter: 'i',
        css: 'scaleY(1)'
    },
    {
        letter: 'm',
        css: 'scaleY(1)'
    },
    {
        letter: 'e',
        css: 'scaleY(1)'
    },
    {
        letter: 'p',
        css: 'scaleY(1)'
    },
    {
        letter: 'a',
        css: 'scaleY(1)'
    },
    {
        letter: 'l',
        css: 'scaleY(1)'
    },
    {
        letter: 'm',
        css: 'scaleY(1)'
    },
    {
        letter: 'i',
        css: 'scaleY(1)'
    },
    {
        letter: 'n',
        css: 'scaleY(1)'
    },
    {
        letter: 'o',
        css: 'scaleY(1)'
    },
])

function handleToggleMyList(index: any) {
    setLetters(letters.map((artwork, key) => {

        if (key === index) {
            console.log(index, key)
            // Create a *new* object with changes
            return { ...artwork, letter: artwork.letter, css: 'scaleY(4)' };
        } else {
            // No changes
            return { ...artwork, letter: artwork.letter, css: 'scaleY(1)' };
        }
    }));

}

const leave = (index: any) => {
    setLetters(letters.map((artwork, key) => {

        if (key === index) {
            // Create a *new* object with changes
            return { ...artwork, letter: artwork.letter, css: 'scaleY(1)' };
        } else {
            // No changes
            return { ...artwork };
        }
    }));
}


<div>
    {letters.map((letter, index) => (
        <div onMouseOut={(event => leave(index))} className={styles.letters} key={index} onMouseEnter={(event => handleToggleMyList(index))}  >
            <h1 style={{ transform: letter.css }}>{letter.letter}</h1>
        </div>
    ))}
</div>