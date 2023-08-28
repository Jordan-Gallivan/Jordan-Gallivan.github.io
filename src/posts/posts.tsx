import React, { ReactElement } from "react";
import YoutubeEmbed from "../util/youtubeEmbed";

export interface IPost {
  title: string,
  date: string,
  post?: ReactElement,
  img?: ReactElement,
}

export const posts: IPost[] = [
  {
    title: "React’ing to TypeScript",
    date: "28 August 2023",
    post: (
      <>
        <p>
          This summer my big personal project was learning to use React.  It was no small feat but I started out by picking up this book
          <a href="https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024/ref=pd_bxgy_img_sccl_1/142-9381458-4556036?pd_rd_w=s5D4x&content-id=amzn1.sym.26a5c67f-1a30-486b-bb90-b523ad38d5a0&pf_rd_p=26a5c67f-1a30-486b-bb90-b523ad38d5a0&pf_rd_r=4GHB44Q4EP8CK4V01R7W&pd_rd_wg=a8T7h&pd_rd_r=def18f9e-1925-44bd-a477-35e6825d3d29&pd_rd_i=1491952024&psc=1" target="_blank"> JavaScript the Definitive Guide </a> and diving in head first.  I had a little extra free time, having left the family back in Jax so I was able to soak it all in, in about 3 weeks.  Then came React.  Once again, O’Reilly Books to the rescue with this masterpiece
          <a href="https://www.amazon.com/Learning-React-Modern-Patterns-Developing/dp/1492051721/ref=sr_1_1?crid=1LAR437Q25JYL&keywords=react+o%27reilly&qid=1693253318&sprefix=react+orielly%2Caps%2C113&sr=8-1" target="_blank"> Learning React. </a>
        </p>
        <p>
          I was fortunate enough to get some time writing TypeScript at my internship, so when I decided to embark on this journey,
          I had the tough decision to make: do I just write the site in JavaScript and save myself the headache,
          or do I put on my big boy pants and spend a lot of long nights arguing with my IDE on why it shouldn’t be throwing an error?
          I decided on the latter and all I can saw was... woof.  It was a mess at first.
          So. Many.  Errors.  But I pulled myself through the mess and learned a LOT.
          I grew to love this handy scripting language and soon found comfort in the rigidity.  It kept me honest and made debugging so much easier.
        </p>
        <p>
          I set to rewriting my blog in React and ran into a few fun issues along the way. First, CSS Animations be
          damned.
          The post opening looks so janky but it’ll have to do for now. Second, hosting on gh pages resulted in my react
          router not working.
          Fortunately, I only really have just two pages (home and about) so that was a relatively easy fix, plus I got
          to incorporate React Context (YAY learning!).
          I’m really happy with how it turned out, but more importantly, I’m really happy with all the tricks I picked
          up along the way.
          It was the first time I was able to re-use code from a site I’m building now (more to follow on that).
        </p>
        <p>
          Enjoy the new site, and as always, swing by my <a href="https://github.com/Jordan-Gallivan/Jordan-Gallivan.github.io/tree/main" target="_blank"> Github</a> and check out what I did!
        </p>
      </>
    ),
    img: <img className={"post-image"} src={require('../images/girlfriend-ugly.gif')} alt={"Home Alone Gif"} />,
  },
  {
    title: "Off to Seatle",
    date: "05 May 2023",
    post: (
      <p>
        I have some pretty awesome news; I’ve officially been selected for an internship as a Software Development Engineer Intern at Amazon Web Services!
        It was a tumultuous couple months of applying for, being rejected for/interviewing for internships and to have it come through like this is a huge relief.
        I cannot put into words how grateful I am for this opportunity and I cannot wait to get out there and learn as much as I can!
      </p>
    )
  },
  {
    title: "A Review of My First Semester as a Post-Bacc Computer Science Major",
    date: "10 Feb 2023",
    post: (
      <>
        <p>The following is a synopsis of the courses I took in my first semester of the UNF Computer Science Post-Bacc student.
          This post is meant to serve as a guidepost for those who are interested in following a similar path, and in no way a
          comprehensive criticism or endorsement of UNF.
        </p>
        <h1>Computational Structures</h1>
        <p>"Computer Science is just Math." This is a gross oversimplification of the field of Computer Science, but its truth still holds.
          Discrete mathematics are the foundation for much of the computational thinking that goes into designing and implementing algorithms
          and this course was an introduction to those concepts.  Right off the bat, I’ll note that UNF’s Computational Structures was slightly
          lacking in some of the more important concepts of Discrete Mathematics, such as graph theory, but they do offer a
          Computational Structures 2 (which I’m currently enrolled in) that cleans up the rest. In this course, we covered the foundations
          beginning with predicate logic and traversed through Boolean algebra, algorithm complexity, modulo arithmetic, combinatorics, and
          probability.  All in all it was great to see the origins of the discipline and more importantly, learn the material that will
          ultimately help me be a better programmer.
        </p>
        <h1>Programming I</h1>
        <p>This course was taught using the C programming language, and while I began the semester with a fuss about why on earth I’d want
          to learn C, I ended with a new found appreciation for a language that has served as the backbone for many modern languages.
          Learning to program in C takes away all your crutches and forces you to pay attention to even the most trivial things.
          This course was exceptionally basic in the beginning focusing on the fundamentals such as conditionals, loops, arrays and I/O.
          But towards the end, we delved into what makes C such a powerful (and sometimes confusing) tool; Pointers and memory allocation.
          Again, when programming in C, especially when utilizing pointers, one must actually understand the details of what the code is doing
          in order to write effective code.  It was a fun ride and I am happy to say that after this course I went out an purchased a C book
          to continue my adventure coding in this awesome language.
        </p>
        <h1> Programming II</h1>
        <p>The follow up to Programming was a headfirst leap into OOP using Java.  Java is a great language to learn OOP
          and anyone who’s made a “hello world” program in the language will see, that you must start with a class and a main method.
          After reviewing the nuances of Java we jumped into OOP learning the intricacies of inheritance, abstract classes, and interfaces.
          All the while implementing I/O, GUIs, and file handling.  I look forward to continuing my journey with Java as many of the upper
          level courses rely heavily on the language
        </p>
        <h1> Probability and Statistics for Engineers</h1>
        <p>
          Another course that plagued me in earlier years came full circle to appreciation.  I’ve never been a fan of this pseudo-mathematics until
          I saw it’s utility in so many aspects of computer science.  The field that jumps out to me most is Machine Learning and AI.  My limited
          scope of these disciplines recognizes that statistics and probability are essential and this knowledge helped frame my approach in this
          course.  Just as discrete mathematics are essential for any programmer, Prob/Stats are essential for anyone hoping to break away from the
          simple and delve into the next era of technology.
        </p>
        <h1>Public Speaking for Professionals</h1>
        <p>
          I went into this course with quite a sour attitude having spent the better part of my adult life speaking publicly in front of
          people far more important than myself.  But, I quickly shaped up and instead viewed it as an opportunity to hone my skills.
          Almost immediately I realized how poor my email writing skills were and was grateful to correct something I’d done literally
          thousands of times.  The projects were a great reorientation into research in the 2020’s. All in all, it was a good experience
          I’m happy to have behind me.
        </p>
      </>
    ),
    img: <img className={"post-image"} src={require('../images/UNF.JPG')} alt={"UNF"} />,
  },
  {
    title: "The Search Continues",
    date: "04 Dec 2022",
    post: (
      <>
        <p>The past month has been filled with applications for Software Engineering Internships and subsequent prepration for interviews.  Computer Science is one of the few fields where a candidate
          can be tested on the spot and expected to demonstrate compotency of the material they are supposed to know.  It is quite daunting but it is an excellent litmus test.  While I haven't taken a formal
          Data Structures course yet, I've been exposed to the concepts and have had to clean up some knowledge gaps on the side (huge shout out to
          <a href="https://www.geeksforgeeks.org/data-structures/?ref=shm" target="_blank"> geeks for geeks!</a>). I never thought I would enjoy preparing for a
          job interview but the tools and tricks I've learned along the way have kept me genuinely intrigued, hungry for more, and sometimes perplexed. </p>
        <p>My language of choice for interview prep is Python.  Its simplicity is paramount but I'm beginning to see the differences in the language and why others trend to Java and C++.
          Nevertheless, seeing someone write one line of code for a solution that you have written a novel for is eye opening, discouraging, and enlightening all at the same time!
          It's always a trip to see the most "Pythonic" solution to a problem...</p>
        <p>As the semester comes to an end, I'll be sure to provide a wrap up of the courses I've taken but in the interim, here is a presentation I did on one of the most influential people in the business,
          John Carmack.  He's the stuff of legend and his story is one every programmer should listen to.  One of the most important sources for the presentation was
          <a href="https://lexfridman.com/john-carmack/" target="_blank"> John Carmack's Interview with Lex Fridman.  </a>
          If you have the time to listen to it, I cannot recommend it enough.  Enjoy!</p>
        <YoutubeEmbed embedID={"LV8EaFeq7wM"} />
      </>
    ),
  },
  {
    title: "Now for Some Automation",
    date: "24 Oct 2022",
    post: (
      <>
        <p>When I decided to make my own website, it was important to me to do it from scratch.  It’s foolish at times to reinvent the wheel and can even be looked at unfavorably,
          but this was first and foremost a learning experience for me.  Needless to say, I learned a tremendous amount along the way.  </p>
        <p>One of the pitfalls of doing it your own way is simple things like updating a blog entry can become cumbersome.  For each entry I had to update three files (the HTML for the index,
          the XML for the feed, and the javascript for the drop down menu in the header).  This would require some copy/pasting and wouldn’t be too complicated, but it left it open to mistakes.
          In the continuing effort to learn I set out to make a program to automate the updating of these three files and am really excited at how it turned out.
          I’ve posted the code to my <a href="https://github.com/Jordan-Gallivan/Website-Maintenance--" target="_blank"> Github</a> and a short synopsis is below:</p>
        <p>In each of the three files that would need to be updated I added a “catch comment” that would serve as the anchor point for me to insert the required code for each blog entry.
          The HTML and XML simply required me to generate some tags around the content and write it into the file at that location.  The javascript was slightly more complicated and required me to add a
          key:value pair to the object being used in the drop down menu.  For that I located the “&#123;“ and concatenated the strings around the new key:value pair.  It's been a little while since I wrote python
            so I was excited to get back into it.  Feel free to check out it out! </p>
      </>
    )
  },
  {
    title: "How did I get here?",
    date: "18 Oct 2022",
    post: (
      <>
        <p> It's hard to complain when you get to ride in the back seat of a fighter jet.
          Despite how awesome that part of the job was, it never made me truly happy.
          As my 10-year career in the Marine Corps came to an end, I knew it was time for a change.
          What that change would be however, gave me quite a bit of consternation.
          So, I fell back on what has always given me a sense of satisfaction and accomplishment, coding.  </p>
        <p>I had dabbled in coding projects since college, and it wasn’t until I sat down and committed to <a href="https://ocw.mit.edu/" target="_blank"> MIT’s OpenCourseWare</a>
          introduction to programming course that I realized computer science is so much more than just writing lines of code.
          There’s a science (duh…) to it that goes deeper than conditionals and loops.  On top of all of that is the art of writing good code.  I found I genuinely enjoyed learning about the material and putting it to use in the
          <a href="https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/" target="_blank">MIT 6.0001</a>/
          <a href="https://ocw.mit.edu/courses/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/" target="_blank">2</a> problem sets.  </p>
        <p>Then I tried my hand at the discrete math course, <a href="https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/" target="_blank"> 6.042</a>…
          It was here that being out of college for over 10 years and the limitations of teaching myself smashed into me with unrelenting force.  I was enthralled by the material and felt like Matt
          Damon in Goodwill Hunting when I solved a problem, but many hours were spent trying to understand the concepts and even more were spent on trying to do the problem sets.   It was decided then;
          I would go back to college as a 34 year old, sit in the front of class and soak up as much as I could.  I chose University of North Florida because my wife is doing a Surgical Residency at
          University of Florida Jacksonville and it’s finally an opportunity for her, myself and our 2 year old son to all live in the same place.  </p>
        <p>I’ll chronicle my journey here for those who are interested.  The focus of this blog will be on what courses a computer science major can expect, centered around the curriculum of University of North Florida.
          Much like I’m dusting off my html skills to make this, I’ll include side projects as I go along.</p>
        <p>Thanks for tuning in!</p>
      </>
    )
  },
  {
    title: "It can't be that hard",
    date: "18 Oct 2022",
    post: (
      <>
        <p>When I set out to make my first-ish website, the first thing that crossed my mind was “it can’t be that
          hard”. The last time I had written HTML was in college and in 2011 there wasn’t a whole lot to it.
          I had taken a lot of shortcuts in styling the website, kept it simple in terms of images and links, and overall
          remembered it as a good time.
        </p>
        <p>A fair amount has changed since 2011… This time around I wanted to do it right, so I jumped headfirst into
          javascript. Again, I foolishly thought, “I know java, so how hard can it be?”
          With the hour of free time a night I could steal after the family went to bed, I found out how very wrong I
          was. I excitedly poured over w3 schools and MDN and found myself down rabbit holes I didn’t know existed.
          But the end product is here. It still has a long way to go, but now I have something I can continually make
          changes to as I learn javascript and the nuances of HTML.
        </p>
      </>
    ),
  },
]