import React, { useState } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import ReactPlayer from 'react-player';

// Screenshots
import TwoThree from '../../assets/screenshots/2_3.jpg';
import Four from '../../assets/screenshots/4.png';
import Seven from '../../assets/screenshots/7.png';
import Eight from '../../assets/screenshots/8.png';
import Nine from '../../assets/screenshots/9.png';

// Components
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import './Workshop.css';

const Workshop = () => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    console.log('videos loaded!');
    setLoaded(true);
  };

  return (
    <>
      {!loaded && <LoadingSpinner asOverlay />}
      <section className='workshop-div'>
        <div className='workshop-header-div'>
          <h3>The Living Composition</h3>
        </div>
        <div className='workshop-subheader-div'></div>
        <Grid item component={Card} xs={12} sm={12} md={12} lg={12} xl={12}>
          <CardContent
            style={{
              padding: '0',
              margin: '0',
              width: '100%',
            }}
          >
            <Card
              style={{
                background: 'black',
                border: '5px solid var(--clr-accent-two)',
                width: '100%',
              }}
            >
              <iframe
                title='The Living Composition'
                src='https://www.youtube.com/embed/5_seoAC6ABU'
                alt='The Living Composition'
                style={{ width: '100%', minHeight: '250px' }}
                frameborder='0'
                allowFullScreen='true'
                webkitallowfullscreen='true'
                mozallowfullscreen='true'
                onLoad={onLoad}
              ></iframe>
            </Card>
          </CardContent>
        </Grid>
        <br />
        <Grid item component={Card} xs={12} sm={12} md={12} lg={12} xl={12}>
          <CardContent
            style={{
              padding: '0',
              margin: '0',
              width: '100%',
            }}
          >
            <Card
              style={{
                background: 'black',
                border: '5px solid var(--clr-accent-two)',
                width: '100%',
              }}
            >
              <ReactPlayer
                url='https://soundcloud.com/bobbypinmusic/the-living-composition'
                width='100%'
                height='150px'
                onLoad={onLoad}
              />
            </Card>
          </CardContent>
        </Grid>

        <div className='workshop-body'>
          <p>
            The Living Composition is a digital interactive sound art piece or
            ‘virtual AV installation’ exploring the intersections of live sound
            installation and virtual interactivity and how this new reality (the
            pandemic) will shape the face of interactive digital art. The
            composition in the piece represents the collective breath and how
            this new reality influences we now interact with it. The sound
            objects and other sound design elements were collected from a
            selection of EA composers and students representing their subjective
            experiences during this time to forms the sonic palette of the
            piece. The digital (computer application based) sound ‘installation’
            The Living Composition is built in Max and the standalone
            application is available to download and interact with on both Mac
            and Windows systems.
          </p>
          <p>
            After pressing start the ‘guest’ may listen to the piece as a
            pedestrian and allow the time of day to make variation in the cue
            playback or interact with different modules on the application UI to
            change the composition sound and visuals. Press the mic to use your
            voice to move the balls dynamically around the ‘virus’ screen or
            press the ~Motion Speedplay On~ and use your webcam to time stretch
            and compress track play back, either randomizing your selection or
            choosing a specific active track. ~Let’s Do the Time Warp~ Press
            this button and go ultra-stretch for a more ambient and textured
            experience. The piece can be left to run itself as the sounds morph
            and change over time, with no defined linearity. Different times of
            day have alternate experiences, while retaining the compositional
            cohesiveness – a regenerative and interactive (virtual) audiovisual
            installation. See the 'How to Play with the Living Composition' doc
            for more interactive suggestions.
          </p>
        </div>
        <div className='play-div'>
          <div className='play-header-div'>
            <h3>How to play</h3>
          </div>
        </div>
        <div className='play-body'>
          <ol className='play-list'>
            {/* SECTION ONE DIV */}
            <div className='section-one-div'>
              <div className='list-div'>
                <li>
                  <a
                    className='download-link'
                    href='https://www.dropbox.com/sh/yd30t93jomimbk7/AAAu-Wo2Ujw44HdOsSAXBPhaa?dl=0'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Download
                  </a>{' '}
                  ‘The Living Composition’ standalone app.
                </li>
                <li>
                  Either download the standalone app from the folder ‘The LC
                  Standalone App’ (choose your operating system) or if you have
                  Max, download the folder ‘The LC Max & Assets’.
                </li>
                <li>
                  Press Start and just let it run! Get a projector out and send
                  the video to your walls while your own at home sound
                  installation plays.{' '}
                </li>
              </div>
              <div className='list-screen-shot-div' style={{ paddingBottom: '15px' }}>
                <img className='list-screenshot_img' src={TwoThree} alt='two' />
              </div>
            </div>

            {/* SECTION TWO DIV */}
            <div className='section-two-div'>
              <div className='list-div'>
                <li>
                  <strong>3D Shape Control:</strong> Adjust the intensity of the
                  animated spheres, the number of objects on the screen or how
                  each frequency band effects the dynamic movements.{' '}
                  <ol className='numbered-list'>
                    <li>
                      Click the 'mic' button and use your voice to move the
                      spheres around instead, maybe along with the composition
                      audio gestures?
                    </li>
                  </ol>
                </li>
              </div>
              <div className='list-screen-shot-div' style={{paddingBottom: '15px'}}>
                <img
                  className='list-screenshot_img'
                  src={Four}
                  alt='four'
                />
              </div>
            </div>

            {/* SECTION THREE DIV */}
            <div className='section-three-div'>
              <div className='list-div'>
                <li>
                  <strong>Speed Play:</strong> Choose your channel to adjust the
                  playback timing of an active track by turning the associated
                  knob under the ‘Individ. Knob Control’ or control all of the
                  tracks at the same time with the ‘All’. You can also randomize
                  the tracks selected to modulate with the larger Randomize
                  button on the left side of the module. Or you can press the
                  blocks with the yellow pipes [green arrow] to choose which 3
                  channels are simultaneously modulated out of the 12 possible
                  selections. Mix and match for different experiences.
                </li>
                <ol className='numbered-list'>
                  <li>
                    <strong>Hint:</strong> Active track can be found above
                    ‘Active Track Monitor’ on Module 4 ~ Track Assignment and
                    Control, in the associated scope [NOT in the rainbow
                    coloured boxes – those are the cue names of the different
                    available tracks.
                  </li>
                  <li>
                    Hit the pink and green 'Let’s do the time Warp' button for
                    an ultra-timestretch to give the composition a more ambient
                    and textural feel.{' '}
                  </li>
                </ol>
              </div>
              <div
                className='list-screen-shot-div'
                style={{ flexDirection: 'column' }}
              >
                <div style={{ paddingBottom: '10px'}}>
                  <img
                    className='list-screenshot_img'
                    src={Seven}
                    alt='seven'
                  />
                </div>
                <div style={{ paddingTop: '10px'}}>
                  <img
                    className='list-screenshot_img'
                    src={Eight}
                    alt='eight'
                  />
                </div>
              </div>
            </div>

            {/* SECTION FOUR DIV */}
            <div className='section-four-div'>
              <div className='list-div'>
                <li>
                  <strong>Webcam Control:</strong> Press 'Motion Play on' to
                  allow the app to access your webcam, and then when you see
                  your image in black and white pixels in the unit, motion or
                  move towards and away from your webcam. The closer you are,
                  the faster the play back speed (compressing the track’s play
                  back time) and the further you are the slower the speed.
                  Monitor the speed modulations in the Speed Play unit. Alter
                  the sensitivity of the webcam ‘sensor’ unit using the ‘Thresh.
                  Frame Diff.’, ‘Temporal Smoothing on Frame Diff.’ and ‘Output
                  Thresh.’.
                </li>
              </div>
              <div className='list-screen-shot-div' style={{ paddingBottom: '15px'}}>
                <img className='list-screenshot_img' src={Nine} alt='nine' />
              </div>
            </div>
            <li>
              <strong>Mixer:</strong> Change which tracks are routed to the left
              channel [top row of the strip] of the stereo output and which go
              to the right [bottom row of the strip] using the Matrix of purple
              and green buttons. Purple means nothing is routing to that side
              and pressing the button while changing it to green means that that
              column corresponding to the mixer channel [same as the ‘Active
              Track Monitor’ on Track Assignment and Control unit] can be heard.
            </li>
            <li>
              <strong>Bored?</strong> Hit the big orange ‘Randomize all Tracks’
              Track Assignment and Control to start again with a different
              arrangement and mix.
            </li>
            <li>
              Find your own hidden Easter eggs by exploring different
              interactive arrangements of the patch.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Workshop;
