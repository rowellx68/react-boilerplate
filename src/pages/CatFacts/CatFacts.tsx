import React, { Fragment, useEffect, useState } from 'react';
import { getCatFact, ICatFact } from 'services/example-cat-service';

import css from './styles.module.scss';

const CatFactsPage: React.FC = () => {
  const [factData, setFact] = useState<ICatFact>();

  const getFact = () => {
    getCatFact()
      .then((f) => {
        setFact(f);
      });
  };

  // this is triggered when this page is mounted
  useEffect(() => getFact(), []);

  return <Fragment>
    <h1>Cat Fact</h1>

    {/* since factData can be undefined, we need to use ? to ensure we only render the text when factData isn't undefined */}
    <p className={css.p}>{factData?.fact}</p>

    <button onClick={() => getFact()}>
      Get new fact
    </button>
  </Fragment>;
};

export default CatFactsPage;
