import { useState } from 'react';
import css from './checkTextPage.module.css';

export const CheckTextPage = () => {
  const [textInput, setTextInput] = useState('');
  const [uniqueSymbol, setUniqueSymbol] = useState(null);

  const findUniqLetters = text => {
    const words = text.split(/\W+/);

    return words.reduce((uniqueLetters, word) => {
      const firstLetter = word.charAt(0);

      if (word.indexOf(firstLetter, 1) === -1) {
        uniqueLetters.push(firstLetter);
      }
      return uniqueLetters;
    }, []);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!textInput) alert('Please enter text first');
    const arrayOfUniqLetter = findUniqLetters(textInput);
    const firstUniqLetter = arrayOfUniqLetter.find(
      x => arrayOfUniqLetter.indexOf(x) === arrayOfUniqLetter.lastIndexOf(x)
    );
    setTextInput('');
    return setUniqueSymbol(firstUniqLetter);
  };

  const handleInputChange = event => {
    setTextInput(event.target.value);
  };

  return (
    <div className={css.container}>
      <h2 className={css.headerText}>Check your text</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <textarea
          placeholder="Please enter your text here"
          className={css.input}
          value={textInput}
          onChange={handleInputChange}
          rows={10}
          cols={50}
        />
        <button className={css.btn} type="submit">
          CHECK
        </button>
      </form>
      {uniqueSymbol && (
        <div className={css.containerUniq}>
          <h3 className={css.headerUniq}>Unique Symbol</h3>
          <div className={css.letterContainerUniq}>
            <p className={css.letterUniq}>{uniqueSymbol}</p>
          </div>
        </div>
      )}
    </div>
  );
};
