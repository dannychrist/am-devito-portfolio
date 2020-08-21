import React from 'react';

import './Biography.css';

const Biography = () => {
  return (
    <div className='bio-div'>
      <div className='bio-header-div'>
        <h3>Biography</h3>
      </div>
      <div className='bio-body'>
        <p>
          AM DeVito is a Montreal-based composer, sound designer, musician,
          and interdisciplinary artist. Their career as a touring and studio
          musician spans well over 10 years, multiple countries and numerous
          instruments, and has now expanded into new forms and new
          collaborations in digital arts, film scoring, and art installations.
          In creative A/V installations, compositions and performances, the
          weaving of ‘virtual kinetic’ soundscapes through vibrant, textural
          worlds take center stage while unique, sonic architecture project
          sweeping narratives. Creative computing intertwines immersive
          environments while blurring the line between the aural and visual
          sonic space.
        </p>
        <p>
          Am DeVito has presented their compositions at the Berlin Off-Kultur
          Festival, Toronto’s Long Winter Festival, Pop Montreal, Sled Island
          Music Festival, Ypsigrock Festival in Sicily and Vienna’s Freilich
          Open Arts Series, to name a few. They are currently completing
          academic studies in Electroacoustics Studies in music and Computation
          Art and Design at Concordia University in Montreal.
        </p>
      </div>
    </div>
  );
};

export default Biography;
