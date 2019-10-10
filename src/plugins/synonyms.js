import axios from "axios";
import ReactDOM from "react-dom";
import React, {Fragment, useState} from "react";
import './synonyms.css';

function Modal({ list, onClick }) {
  const [visible, setVisible] = useState(true);
  const handleClick = e => {
    setVisible(false);
    onClick(e);
  };

  return (
    visible && (
      <div className="modal-overlay" onClick={handleClick}>
        <div className="modal-content">
          <div className="bg-white br2">
            {list.length ? (
              <div className='pa4'>
                {list.length && (
                  <Fragment>
                    <b>Synonyms: </b>
                    <div className='dib'>
                      {list.map((e, i) => (
                        <span className="pr1 pointer" key={i}>{e.word}</span>
                      ))}
                    </div>
                  </Fragment>
                )}
              </div>
            ) : (
              <div className='pt2 pb4 tc'>
                <h3>Sorry</h3>
                <p>We couldn't find any word</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default {
  label: "Synonyms",
  apply: function({ setLoading }) {
    console.info(`[Plugin::apply] Synonyms`);
    const selection = document
      .getSelection()
      .toString()
      .trim();

    if (selection && selection !== "") {
      setLoading(true);

      document.execCommand(
        "insertHTML",
        false,
        `<span id="mark">${selection}</span>`
      );

      axios
        .get(`https://api.datamuse.com/words?rel_syn=${selection}`)
        .then(({ data }) => {
          setLoading(false);

          const onClick = e => {
            const target = e.target;

            if (target.nodeName === "SPAN") {
              const el = document.getElementById('mark');
              el.parentNode.replaceChild(document.createTextNode(target.innerText), el);
            }
            ReactDOM.unmountComponentAtNode(document.getElementById("modal"));
          };

          ReactDOM.render(
            <Modal className="modal" list={data} onClick={e => onClick(e)} />,
            document.getElementById("modal")
          );
        });
    }
  }
};
