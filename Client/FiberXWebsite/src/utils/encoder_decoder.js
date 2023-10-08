class Cryptography {
    constructor() {
        this.config = import.meta.env;
        this.corpus = ['J', 'f', 'U', 'Z', ')', 'd', 'o', 'D', 'k', 'p', 'I', 'R', '[', 'i', 'A', 'F', 't', 'b', 'V', 'Y', 'n', 'S', 'm', 'j', 'X', 'q', ']', 's', 'B', 'x', '(', 'L', 'E', 'M', 'a', ',', ':', 'y', 'T', 'c', 'h', 'Q', 'z', 'P', 'u', 'l', 'v', 'C', 'g', 'r', 'N', 'K', '{', 'w', 'W', 'H', 'O', 'e', 'G', '}']
        this.dataShift = parseInt(this.config.DATA_SHIFT) || 4;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    encrypt(data) {
        let encryptobject = {};
        if (!data) { return false }

        const inputData = typeof data === 'string' ? data : JSON.stringify(data);
        const inputType = typeof data === 'string' ? 'nicky' : 'dicky';
        const encryptedData = inputData.split('').map(char => {
            const index = this.corpus.indexOf(char);
            if (index !== -1) {
                const newIndex = (index + this.dataShift) % this.corpus.length;
                return this.corpus[newIndex];
            }
            return char;
        }).join('');
        encryptobject[inputType] = encryptedData;
        return JSON.stringify(encryptobject);
    }

    decrypt(encryptedDataObj) {
        let encryptedDataString, decryptedDataString;

        if (!encryptedDataObj) { return false }

        if (encryptedDataObj[0] != '{') { return 'falsen' }

        encryptedDataObj = JSON.parse(encryptedDataObj);

        if (!Object.keys(encryptedDataObj).includes('nicky') && !Object.keys(encryptedDataObj).includes('dicky')) { return false }

        if (Object.keys(encryptedDataObj).includes('nicky')) { encryptedDataString = encryptedDataObj['nicky'] }
        else if (Object.keys(encryptedDataObj).includes('dicky')) { encryptedDataString = encryptedDataObj['dicky'] }

        const decryptedData = encryptedDataString.split('').map(char => {
            const index = this.corpus.indexOf(char);
            if (index !== -1) {
                let newIndex = index - this.dataShift;
                if (newIndex < 0) { newIndex = this.corpus.length + newIndex; }
                return this.corpus[newIndex];
            }
            return char;
        }).join('');

        decryptedDataString = JSON.parse(decryptedData);

        return decryptedDataString;
    }
}

export default Cryptography