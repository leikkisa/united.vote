const Component = require('./Component')
const FeedbackWidget = require('./FeedbackWidget')

module.exports = class Footer extends Component {
  oninit() {
    if (!this.state.randomQuote) {
      return { randomQuote: quotes[Math.floor(Math.random() * quotes.length)] }
    }
  }
  render() {
    const { config, randomQuote = { text: '' } } = this.state
    const { NODE_ENV } = config

    return this.html`
      <footer class="footer">
        <div class="section has-text-centered" style="padding-bottom: 0">
            <div class="columns is-centered">
              <div class="column is-half" style="position: relative;">
                <span class="quote-icon">“</span>
                <style>
                  .quote-icon {
                    color: rgb(115, 115, 115);
                    opacity: 0.2;
                    font-size: 80px;
                    font-weight: 700;
                    position: absolute;
                    left: -29px;
                    top: -33px;
                  }

                  @media (max-width: 768px) {
                    .quote-icon {
                      font-size: 71px;
                      left: -9px;
                      top: -38px;
                    }
                  }
                </style>
                <p class="title has-text-grey is-4 has-text-justified">${[randomQuote.text.replace(/\n/g, '<br />')]}</p>
                ${randomQuote.author && [`<p class="title is-5 has-text-grey has-text-right">— <em>${randomQuote.author}</em></p>`]}
                ${randomQuote.date && [`<p class="title is-6 has-text-right has-text-grey is-uppercase">${randomQuote.date}</p>`]}

                <img src="/assets/unitedvote_mark.svg" alt="united.vote" width="40" height="28">
              </div>
            </div>
            <p class="is-size-7"><strong><a href="/" class="has-text-black">United.vote</a></strong> is a non-partisan organization dedicated to creating smarter and more accountable governance, with liquid democracy.</p>
        </div>
        ${FeedbackWidget.for(this)}
        <style>
          .footer {
            padding: 3rem 0rem 3.5rem;
          }
        </style>
      </footer>

      <script src="/assets/outdatedbrowser.min.js"></script>
      <script>
        //event listener: DOM ready
        function addLoadEvent(func) {
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = func;
            } else {
                window.onload = function() {
                    if (oldonload) {
                        oldonload();
                    }
                    func();
                }
            }
        }
        //call plugin function after DOM ready
        addLoadEvent(function(){
            outdatedBrowser({
                bgColor: '#f25648',
                color: '#ffffff',
                lowerThan: 'transform',
                languagePath: '/assets/outdatedbrowser_en.html'
            })
        });
      </script>
      ${NODE_ENV === 'production' ? [`
        <script src="https://cdn.ravenjs.com/3.20.1/raven.min.js" crossorigin="anonymous"></script>
        <script>
          Raven.config('https://613c962d6bfa43ba863bdd2b0c0ec907@sentry.io/254602', {
            environment: "${NODE_ENV}"
          }).install()
        </script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-84279342-5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-84279342-5');
        </script>
      `] : ''}
    `
  }
}

const quotes = [
  {
    text: "'What is Right?', not 'Who is Right?'",
  },
  {
    text: "I like voting. I like the process and the idea of voting. I just don't like the people we have to vote for.",
    author: 'Anonymous',
    date: 'December 2016',
  },
  {
    text: "Democracy is a state of grace that is attained only by those countries who have a host of individuals not only ready to enjoy freedom but to undergo the heavy labor of maintaining it.",
    author: "Norman Mailer",
    date: 'February 2003',
  },
  {
    text: "It is well known at this point that politics has become a team sport. The whole spectacle of it seems to be aimed at distracting us from the real issues we are facing as a country.",
    author: "Glenn Beck",
    date: 'September 2016',
  },
  {
    text: 'When did “your team is worse than mine” become the prevailing motive in our country for engaging in the democratic process?',
    author: 'Glenn Beck',
    date: 'September 2016',
  },
  {
    text: "If we want a better politics, it’s not enough to just change a Congressman or a Senator or even a President; we have to change the system.",
    author: 'President Barack Obama',
    date: 'January 2016',
  },
  {
    text: `Law is the expression of the general will.

Every citizen has a right to participate personally, or through their representative, in its foundation.`,
    author: 'Declaration of the Rights of Man and of the Citizen',
    date: 'August 1789',
  },
  {
    text: `Ours was the first revolution in the history of mankind that truly reversed the course of government, and with three little words: "We the People."

"We the People" tell the Government what to do, it doesn't tell us. "We the people" are the driver - the Government is the car. And we decide where it should go, and by what route, and how fast. Almost all the world's constitutions are documents in which governments tell the people what their privileges are. Our Constitution is a document in which "We the People" tell the Government what it is allowed to do. "We the people" are free.`,
    author: 'President Ronald Reagan',
    date: 'January 1989',
  },
  {
    text: 'And so, my fellow Americans: ask not what your country can do for you – ask what you can do for your country.',
    author: 'President John F. Kennedy',
    date: 'January 1961',
  },
  {
    text: 'A government of laws, and not of men.',
    author: 'President John Adams',
    date: 'June 1780',
  },
  {
    text: "We are caught in an inescapable network of mutuality, tied in a single garment of destiny. Whatever affects one directly, affects all indirectly.",
    author: 'Dr. Martin Luther King, Jr.',
    date: 'April 1963',
  },
  {
    text: "Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed it has been said that democracy is the worst form of government, except for all the other forms that have been tried.",
    author: 'Winston Churchill',
    date: 'November 1947',
  },
  {
    text: "Man's capacity for justice makes democracy possible; but man's inclination to injustice makes democracy necessary.",
    author: 'Reinhold Niebuhr',
    date: '1944',
  },
  {
    text: "If we want good government, we need to invest in it.",
    author: 'Dallas Cole',
    date: 'August 2017',
  },
  {
    text: 'The penalty we pay for not being involved in politics is being governed by people worse than ourselves.',
    author: 'Plato',
    date: '380 BC',
  },
  {
    text: 'Concentrated power is not rendered harmless by the good intentions of those who create it.',
    author: 'Milton Friedman',
  },
  {
    text: 'Let us never forget that government is ourselves and not an alien power over us. The ultimate rulers of our democracy are not a President and Senators and Congressmen and Government officials but the voters of this country.',
    author: 'President Franklin D. Roosevelt',
    date: 'July 1938',
  },
  {
    text: 'Freedom consists of the distribution of power, and despotism in its concentration.',
    author: 'Lord Acton',
  },
  {
    text: 'The danger is not that a particular class is unfit to govern. Every class is unfit to govern.',
    author: 'Lord Acton',
    date: 'April 1881',
  },
  {
    text: 'No man who is corrupt, no man who condones corruption in others, can possibly do his duty by the community.',
    author: 'President Theodore Roosevelt',
    date: '1900',
  },
  {
    text: 'Our first priority today is to defeat utterly those forces of greed and corruption that have come between us and our self-governance.',
    author: 'Granny D',
  },
  {
    text: 'There is nothing which I dread so much as a division of the republic into two great parties, each arranged under its leader, and concerting measures in opposition to each other. This, in my humble apprehension, is to be dreaded as the greatest political evil under our Constitution.',
    author: 'President John Adams',
    date: 'October 1780',
  },
  {
    text: 'The best defense against usurpatory government is an assertive citizenry.',
    author: 'William F. Buckley',
    date: '1992',
  },
  {
    text:
`The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced.

It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.`,
    author: 'President Abraham Lincoln',
    date: 'November 1863',
  },
  {
    text: 'We the People, Of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.',
    author: 'Preamble to the United States Constitution',
    date: 'September 1787',
  },
  {
    text: 'The principle of free government adheres to the American soil. It is bedded in it, immoveable as its mountains.',
    author: 'Secretary of State Daniel Webster',
    date: 'June 1825',
  },
  {
    text: 'Let us raise a standard to which the wise and honest can repair.',
    author: 'President George Washington',
    date: 'May 1787',
  },
  {
    text: 'We hold these truths to be self-evident: that all men are created equal, that they are endowed by their Creator with certain unalienable rights, that among these are life, liberty, and the pursuit of happiness.',
    author: 'The Declaration of Independence',
    date: 'July 4, 1776',
  },
  {
    text: 'We have a great dream. It started way back in 1776, and God grant that America will be true to her dream.',
    author: 'Dr. Martin Luther King, Jr.',
    date: 'July 1965',
  },
  {
    text: 'Let every nation know, whether it wishes us well or ill, that we shall pay any price, beat any burden, meet any hardship, support any friend, oppose any foe, in order to assure the survival and the success of liberty.',
    author: 'President John F. Kennedy',
    date: 'January 1961',
  },
  {
    text: 'This is a new nation, based on a mighty continent, of boundless possibilities.',
    author: 'President Theodore Roosevelt',
    date: 'July 1917',
  },
  {
    text: 'Whatever America hopes to bring to pass in the world must first come to pass in the heart of America.',
    author: 'President Dwight D. Eisenhower',
    date: 'January 1953',
  },
  {
    text: 'For this is what America is all about. It is the uncrossed desert and the unclimbed ridge. It is the star that is not reached and the harvest sleeping in the unplowed ground. Is our world gone? We say "Farewell." Is a new world coming? We welcome it — and we will bend it to the hopes of man.',
    author: 'President Lyndon B. Johnson',
    date: 'January 1965',
  },
  {
    text: 'The cause of freedom is not the cause of a race or a sect, a party or a class — it is the cause of humankind, the very birthright of humanity.',
    author: 'Anna Julia Cooper',
    date: 'May 1893',
  },
  {
    text: "Every generation has the obligation to free men's minds for a look at new worlds... to look out from a higher plateau than the last generation.",
    author: 'Ellison S. Onizuka',
    date: '1980',
  },
  {
    text: "Nobody will ever deprive the American people of the right to vote except the American people themselves—and the only way they could do this is by not voting.",
    author: 'President Franklin D. Roosevelt',
    date: 'October 1944',
  },
  {
    text: "For this Nation to remain true to its principles, we cannot allow any American's vote to be denied, diluted, or defiled. The right to vote is the crown jewel of American liberties, and we will not see its luster diminished.",
    author: 'President Ronald Reagan',
    date: 'November 1981',
  },
  {
    text: 'Our Founding Fathers, here in this country, brought about the only true revolution that has ever taken place in man’s history. Every other revolution simply exchanged one set of rulers for another set of rulers. But only here did that little band of men so advanced beyond their time that the world has never seen their like since, evolve the idea that you and I have within ourselves the God-given right and the ability to determine our own destiny.',
    author: 'President Ronald Reagan',
    date: 'March 1961',
  },
  {
    text: "The great democracies face new and serious threats – yet seem to be losing confidence in their own calling and competence... The health of the democratic spirit itself is at issue. And the renewal of that spirit is the urgent task at hand.",
    author: 'President George W. Bush',
    date: 'October 2017',
  },
  {
    text: "We know that the desire for freedom is not confined to, or owned by, any culture; it is the inborn hope of our humanity. We know that free governments are the only way to ensure that the strong are just and the weak are valued. And we know that when we lose sight of our ideals, it is not democracy that has failed. It is the failure of those charged with preserving and protecting democracy.",
    author: 'President George W. Bush',
    date: 'October 2017',
  },
  {
    text: "Democracy remains the definition of political legitimacy. That has not changed, and that will not change.",
    author: 'President George W. Bush',
    date: 'October 2017',
  },
  {
    text: "[We] call on the major institutions of our democracy, public and private, to consciously and urgently attend to the problem of declining trust.",
    author: 'President George W. Bush',
    date: 'October 2017',
  },
  {
    text: "Repressive rivals, along with skeptics here at home, misunderstand something important. It is the great advantage of free societies that we creatively adapt to challenges, without the direction of some central authority. Self-correction is the secret strength of freedom. We are a nation with a history of resilience and a genius for renewal.",
    author: 'President George W. Bush',
    date: 'October 2017',
  },
  {
    text: 'This is your life, this is your country — and if you want to keep it safe, you need to get involved.',
    author: 'Aaron Swartz',
  },
  {
    text: 'Four score and seven years ago our fathers brought forth, on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.',
    author: 'President Abraham Lincoln',
    date: 'November 1863',
  },
  {
    text: 'Democracy is not a spectator sport.',
    author: 'Marian Wright Edelman',
    date: '1987',
  },
  {
    text: "If we are honest with ourselves today, we will acknowledge that the ideal of Democracy has never failed, but that we haven't carried it out.",
    author: 'First Lady Eleanor Roosevelt',
    date: '1940',
  },
  {
    text: 'Our trouble is that we do not demand enough of the people who represent us. We are responsible for their activities... we must spur them to more imagination and enterprise in making a push into the unknown; we must make clear that we intend to have responsible and courageous leadership.',
    author: 'First Lady Eleanor Roosevelt',
    date: '1963',
  },
  {
    text: `I protest against the power of mad minorities to treat the majority as if it were another minority.

    But still more do I protest against the conduct of the majority if it surrenders its representative right so easily.`,
    author: 'G. K. Chesterton',
    date: 'January 1927',
  },
  {
    text:
    `Let us not despair but act.

    Let us not seek the Republican answer or the Democratic answer but the right answer.

    Let us not seek to fix the blame for the past - let us accept our own responsibility for the future.`,
    author: 'President John F. Kennedy',
    date: 'February 1958',
  },
  {
    text: `But I know also, that laws and institutions must go hand in hand with the progress of the human mind.

    As that becomes more developed, more enlightened, as new discoveries are made, new truths disclosed, and manners and opinions change with the change of circumstances, institutions must advance also, and keep pace with the times.`,
    author: 'President Thomas Jefferson',
    date: 'June 1816',
  },
  {
    text: "So long as I do not firmly and irrevocably possess the right to vote I do not possess myself. I cannot make up my mind — it is made up for me. I cannot live as a democratic citizen, observing the laws I have helped to enact — I can only submit to the edict of others.",
    author: 'Dr. Martin Luther King, Jr.',
    date: 'May 1957',
  },
]
